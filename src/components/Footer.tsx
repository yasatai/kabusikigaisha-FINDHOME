import { Link } from "react-router-dom";

type Props = {
  /** トップページのみ、各セクションへのフッターナビ（PC）を表示 */
  withNav?: boolean;
};

export default function Footer({ withNav = false }: Props) {
  return (
    <footer className="footer" id="office-info">
      {withNav && (
        <nav className="footer-nav" aria-label="フッターナビゲーション">
          <Link to="/#about">ABOUT US</Link>
          <Link to="/#problems">PROBLEM/SERVICE</Link>
          <Link to="/#cost">INITIAL COST</Link>
          <Link to="/#flow">FLOW</Link>
          <Link to="/#reasons">REASONS</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/#contact">CONTACT</Link>
          <Link to="/#company">COMPANY</Link>
        </nav>
      )}
      <div className="footer-inner">
        <div className="footer-brand-block">
          <img src="/images/logo-blue.png" alt="FIND HOME" width={200} height={48} loading="lazy" decoding="async" />
          <p>
            仙台・宮城の住まい探しを
            <br />
            地域密着でサポートします。
          </p>
          <Link className="footer-link-button" to="/#company">
            会社情報を見る<span>→</span>
          </Link>
        </div>
        <div className="footer-office">
          <h3>仙台駅前店</h3>
          <p>
            〒980-0803
            <br />
            宮城県仙台市青葉区国分町3-6-11
            <br />
            アーク仙台ビル3F
          </p>
          <div className="footer-phone-list">
            <a className="footer-phone" href="tel:0223954355" data-event="tap_phone">
              <span>売買担当</span>022-395-4355
            </a>
            <a className="footer-phone" href="tel:0223954899" data-event="tap_phone">
              <span>賃貸担当</span>022-395-4899
            </a>
          </div>
        </div>
        <dl className="footer-info">
          <div>
            <dt>メール</dt>
            <dd>info@find-home.jp</dd>
          </div>
          <div>
            <dt>営業時間</dt>
            <dd>10:00〜19:00</dd>
          </div>
          <div>
            <dt>定休日</dt>
            <dd>
              水曜日<span className="ib">（祝日は営業）</span>
            </dd>
          </div>
          <div>
            <dt>対応エリア</dt>
            <dd>
              宮城県<span className="ib">（仙台市全域ほか）</span>
            </dd>
          </div>
          <div>
            <dt>相談方法</dt>
            <dd>
              来店・電話・メール・<span className="ib">オンライン</span>
            </dd>
          </div>
        </dl>
      </div>
      <small className="footer-copy">© 2026 FIND HOME. All Rights Reserved.</small>
    </footer>
  );
}
