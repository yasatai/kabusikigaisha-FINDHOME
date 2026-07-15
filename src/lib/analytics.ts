// dataLayer への計測イベント送信（script.js より移植）
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(name: string): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name });
}
