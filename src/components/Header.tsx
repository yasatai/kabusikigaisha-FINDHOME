import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="FIND HOME トップへ">
          <img className="brand-mark" src="/images/logo-blue.png" alt="FIND HOME 仙台の不動産" width={176} height={44} decoding="async" />
        </Link>
        <nav className="nav" aria-label="主要ナビゲーション">
          <Link to="/#problems">お悩み</Link>
          <Link to="/#service">サービス</Link>
          <Link to="/#cost">初期費用</Link>
          <Link to="/#flow">流れ</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/#company">会社概要</Link>
          <Link to="/#contact">物件URL相談</Link>
        </nav>
        <div className="header-actions">
          <div className="tel-group" aria-label="電話番号">
            <a className="tel" href="tel:0223954355" data-event="tap_phone">
              売買担当 022-395-4355
            </a>
            <a className="tel" href="tel:0223954899" data-event="tap_phone">
              賃貸担当 022-395-4899
            </a>
          </div>
          <Link className="btn btn-primary" to="/#contact" data-event="click_fv_property_url_cta">
            物件URLを送って相談する
          </Link>
        </div>
      </div>
    </header>
  );
}
