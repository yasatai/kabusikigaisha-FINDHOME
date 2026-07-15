import { useEffect } from "react";

const SITE = "https://www.findhome-japan.com";

type SeoOptions = {
  title: string;
  description: string;
  /** サイトルートからのパス（例 "/" or "/privacy"） */
  path: string;
  /** true でインデックス許可、false で noindex */
  index?: boolean;
  ogImage?: string;
  ogType?: string;
  /** ページ固有の JSON-LD（複数可） */
  jsonLd?: object[];
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * ルート別に title / description / canonical / robots / OGP / JSON-LD を設定する。
 * SPA でもページごとに正しいメタ情報を出力する（JS実行クローラ・SNS向け）。
 */
export function usePageSeo(opts: SeoOptions): void {
  useEffect(() => {
    const url = SITE + opts.path;
    document.title = opts.title;
    upsertMeta("name", "description", opts.description);
    upsertMeta("name", "robots", opts.index === false ? "noindex, follow" : "index, follow");
    upsertLink("canonical", url);

    upsertMeta("property", "og:type", opts.ogType || "website");
    upsertMeta("property", "og:site_name", "FIND HOME");
    upsertMeta("property", "og:locale", "ja_JP");
    upsertMeta("property", "og:title", opts.title);
    upsertMeta("property", "og:description", opts.description);
    upsertMeta("property", "og:url", url);
    const img = opts.ogImage || `${SITE}/images/hero-bg.jpg`;
    upsertMeta("property", "og:image", img);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", opts.title);
    upsertMeta("name", "twitter:description", opts.description);
    upsertMeta("name", "twitter:image", img);

    // ページ固有 JSON-LD（前ページ分は data 属性で除去してから追加）
    document.head
      .querySelectorAll('script[data-seo-jsonld="page"]')
      .forEach((s) => s.remove());
    const added: HTMLScriptElement[] = [];
    (opts.jsonLd || []).forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo-jsonld", "page");
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
      added.push(s);
    });

    return () => {
      added.forEach((s) => s.remove());
    };
  }, [opts.title, opts.description, opts.path, opts.index, opts.ogImage, opts.ogType, opts.jsonLd]);
}
