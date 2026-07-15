import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setupScrollTopOnLoad } from "./lib/scrollTop";
import "./styles.css";

// 読み込み・更新（F5）時はページ先頭へ（script.js より移植）
setupScrollTopOnLoad();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
