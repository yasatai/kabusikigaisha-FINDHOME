import { Link } from "react-router-dom";

export default function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="スマホ固定メニュー">
      <a href="tel:0223954899" data-event="tap_phone">
        電話する
      </a>
      <Link to="/#contact" data-event="click_bottom_property_url_cta">
        物件URLを送る
      </Link>
    </nav>
  );
}
