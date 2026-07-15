# FIND HOME — React / TypeScript 版

既存の静的サイト（`../index.html` / `../styles.css` / `../script.js`）を
**Vite + React + TypeScript** に変換したものです。アニメーション・レイアウト・
文言・改行制御はすべて元のサイトと同一です。

## 構成

- `src/main.tsx` … エントリ。`styles.css` を読み込み、F5 で先頭に戻る処理を初期化。
- `src/App.tsx` … ルーティング（`/` = トップ、`/privacy` = プライバシーポリシー）とハッシュスクロール。
- `src/pages/Home.tsx` … トップページ本体（元 `index.html` の `<main>`）。
- `src/pages/Privacy.tsx` … プライバシーポリシー（元 `privacy.html`）。
- `src/components/` … `Header` / `Footer` / `MobileBottomNav`。
- `src/lib/siteMotion.ts` … 元 `script.js` のアニメーション・トグル・計測を移植（`useEffect` から呼び出し）。
- `src/lib/scrollTop.ts` … 読み込み・F5 時に先頭へ戻す処理。
- `src/styles.css` … 元 `styles.css`（画像パスを `public/images/` → `/images/` に変更しただけ）。
- `public/images/` … 画像一式。

## 開発 / ビルド

```bash
cd app
npm install
npm run dev      # 開発サーバ（http://localhost:5173）
npm run build    # 本番ビルド（dist/）
npm run preview  # ビルド結果のプレビュー
```

## デプロイ（SPA）

`/privacy` などのパスを直接開いても動くよう、SPA フォールバックが必要です。
Netlify は `public/_redirects`（同梱済み）で対応。ほかのホストでも
「すべてのパスを `index.html` に返す」設定を行ってください。
