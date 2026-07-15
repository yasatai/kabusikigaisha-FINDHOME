// 読み込み・更新（F5）時はページ先頭（Hero）へ戻す（script.js より移植）
export function setupScrollTopOnLoad(): void {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const toTop = () => window.scrollTo(0, 0);
  toTop();
  window.addEventListener("load", () => {
    toTop();
    // ブラウザによるハッシュ位置への自動スクロールを上書き
    requestAnimationFrame(toTop);
    setTimeout(toTop, 0);
  });
  // bfcache 復帰時も先頭へ
  window.addEventListener("pageshow", toTop);
}
