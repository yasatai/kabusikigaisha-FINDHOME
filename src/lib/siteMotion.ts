import { trackEvent } from "./analytics";

/**
 * script.js の挙動をそのまま移植した初期化関数。
 * ページのマウント後（useEffect 内）に呼び出し、返り値の cleanup で解除する。
 * React が再描画で class/attribute を上書きしないよう、対象コンポーネントは静的に保つ前提。
 */
export function initSiteInteractions(): () => void {
  const cleanups: Array<() => void> = [];
  const add = (
    target: EventTarget,
    type: string,
    fn: EventListenerOrEventListenerObject,
    opts?: AddEventListenerOptions
  ) => {
    target.addEventListener(type, fn, opts);
    cleanups.push(() => target.removeEventListener(type, fn, opts));
  };

  /* かんたん相談フォームの開閉 */
  const heroForm = document.getElementById("hero-quick-form");
  const heroFormToggle = document.querySelector<HTMLElement>("[data-hero-form-toggle]");
  if (heroForm && heroFormToggle) {
    add(heroFormToggle, "click", () => {
      const isOpen = heroForm.classList.toggle("is-open");
      heroFormToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  /* data-event クリック / 入力計測 */
  document.querySelectorAll<HTMLElement>("[data-event]").forEach((el) => {
    const eventName = el.getAttribute("data-event");
    if (!eventName) return;
    const type =
      el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT"
        ? "input"
        : "click";
    add(
      el,
      type,
      () => {
        trackEvent(eventName);
        const secondaryEvent = el.getAttribute("data-event-secondary");
        if (secondaryEvent) trackEvent(secondaryEvent);
      },
      { once: type === "input" }
    );
  });

  /* フォーム開始・送信計測 */
  document.querySelectorAll<HTMLFormElement>("form").forEach((form) => {
    let started = false;
    add(form, "input", () => {
      if (started) return;
      started = true;
      trackEvent("form_start");
    });
    add(form, "submit", () => trackEvent("form_submit"));
  });

  /* FAQ 開閉計測 */
  document.querySelectorAll<HTMLDetailsElement>(".faq-item").forEach((faq) => {
    add(faq, "toggle", () => {
      if (faq.open) trackEvent("open_faq");
    });
  });

  /* 「他の質問を見る」トグル */
  const faqToggle = document.querySelector<HTMLElement>("[data-faq-toggle]");
  const faqMore = document.getElementById("faq-more");
  if (faqToggle && faqMore) {
    add(faqToggle, "click", () => {
      const isOpen = faqMore.classList.toggle("is-open");
      faqToggle.setAttribute("aria-expanded", String(isOpen));
      const label = faqToggle.querySelector(".faq-toggle-label");
      if (label) label.textContent = isOpen ? "閉じる" : "他の質問を見る";
    });
  }

  /* スクロール到達計測 */
  if ("IntersectionObserver" in window) {
    const observedScrollEvents: Record<string, boolean> = {};
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const eventName = entry.target.getAttribute("data-scroll-event");
          if (!eventName || observedScrollEvents[eventName]) return;
          observedScrollEvents[eventName] = true;
          trackEvent(eventName);
          scrollObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll("[data-scroll-event]").forEach((marker) => scrollObserver.observe(marker));
    cleanups.push(() => scrollObserver.disconnect());
  }

  /* ────────────────────────────────────────────────────
   * Motion（ichimura-painting.jp のアニメーションを再現）
   * ──────────────────────────────────────────────────── */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("motion-ready");

    /* FV：時間差スライドイン */
    const fvSelectors = [".site-header", ".fv-en-1", ".fv-catch-row", ".fv-en-2", ".fv-copy", ".fv-img"];
    fvSelectors.forEach((selector, index) => {
      const el = document.querySelector(selector);
      if (!el) return;
      const t = window.setTimeout(() => el.classList.add("show"), index * 260 + 500);
      cleanups.push(() => window.clearTimeout(t));
    });

    /* FV：装飾ラインはテキストの後に画面外から入る */
    const hero = document.querySelector(".hero");
    if (hero) {
      const t = window.setTimeout(() => hero.classList.add("is-show"), fvSelectors.length * 260 + 500);
      cleanups.push(() => window.clearTimeout(t));
    }

    /* 見出し・帯だけ左→右ワイプ */
    const wipeSelectors = [
      ".section-head .eyebrow",
      ".section-head .section-title",
      ".section-head .section-note",
      ".loop-band",
    ];
    const wipeTargets: HTMLElement[] = [];
    wipeSelectors.forEach((selector) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.classList.add("scroll_active");
        wipeTargets.push(el);
      });
    });

    const wipeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove("active", "done");
          }
        });
      },
      { rootMargin: "0px 0px -25% 0px" }
    );

    wipeTargets.forEach((el) => {
      const onEnd = (event: Event) => {
        const te = event as TransitionEvent;
        if (te.target !== el || te.propertyName !== "clip-path") return;
        if (el.classList.contains("active")) el.classList.add("done");
      };
      add(el, "transitionend", onEnd);
      wipeObserver.observe(el);
    });
    cleanups.push(() => wipeObserver.disconnect());

    /* コンテンツ側：data-motion（単体）と data-stagger（子要素へ時間差配分） */
    const revealTargets: Element[] = [];
    document.querySelectorAll("[data-motion]").forEach((el) => revealTargets.push(el));
    document.querySelectorAll("[data-stagger]").forEach((group) => {
      let delay = 0;
      Array.prototype.forEach.call(group.children, (child: HTMLElement) => {
        if (child.classList.contains("process-motion-line")) return;
        child.style.transitionDelay = delay + "ms";
        delay += 90;
      });
      revealTargets.push(group);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove("active");
          }
        });
      },
      { rootMargin: "0px 0px -18% 0px" }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    /* ヘッダー：スクロールで縮小 */
    const header = document.querySelector<HTMLElement>(".site-header");
    if (header) {
      const onScroll = () => header.classList.toggle("header-sm", window.scrollY > 120);
      add(window, "scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  return () => cleanups.forEach((fn) => fn());
}
