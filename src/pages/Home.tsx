import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";
import { initSiteInteractions } from "../lib/siteMotion";

const star = (
  <svg viewBox="0 0 24 24">
    <path d="M12 0 L14.6 9.4 L24 12 L14.6 14.6 L12 24 L9.4 14.6 L0 12 L9.4 9.4 Z" fill="#fff" />
  </svg>
);

const loopText = "FIND HOME — SENDAI, MIYAGI — ";

export default function Home() {
  // script.js の挙動（FVアニメ・スクロールワイプ・トグル・計測）を移植して実行
  useEffect(() => {
    const cleanup = initSiteInteractions();
    return cleanup;
  }, []);

  return (
    <>
      <Header />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <span className="motion-view-line" aria-hidden="true"></span>
          <div className="fv">
            <p className="fv-en fv-en-1" aria-hidden="true">
              <span className="fv-en-text" data-text="FIND YOUR HOME.">
                FIND YOUR HOME.
              </span>
            </p>
            <div className="fv-catch-row">
              <h1 id="hero-title" className="fv-catch">
                宮城・仙台の不動産なら<span className="fv-catch-break"></span>FIND HOMEへ
              </h1>
              <span className="fv-stars" aria-hidden="true">
                {star}
                {star}
                {star}
              </span>
            </div>
            <p className="fv-en fv-en-2" aria-hidden="true">
              <span className="fv-en-text" data-text="BE YOUR PARTNER.">
                BE YOUR PARTNER.
              </span>
            </p>
            <p className="fv-copy" aria-hidden="true">
              © 2026 FIND HOME SENDAI
            </p>
            <div className="fv-img">
              <div className="fv-img-content">
                <p className="hero-lead">売買・賃貸・管理まで地域密着で安心サポート</p>
                <p className="hero-text">
                  仲介手数料無料でどこよりも<span className="ib">お得な不動産サービスを</span>
                  <span className="ib">ご提案します。</span>
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#contact" data-event="click_fv_property_url_cta">
                    物件URLを送って相談する
                  </a>
                  <a className="btn btn-secondary" href="#cost" data-event="click_fv_initial_cost_cta">
                    初期費用を確認する
                  </a>
                  <button
                    className="btn btn-form-toggle"
                    type="button"
                    data-hero-form-toggle
                    aria-controls="hero-quick-form"
                    aria-expanded="false"
                    data-event="click_fv_quick_form"
                  >
                    かんたん相談フォーム
                  </button>
                </div>
                <div className="hero-stats" aria-label="賃貸相談の特徴">
                  <div className="stat">
                    <strong>夜間内覧OK</strong>
                    <span>17時以降の相談にも対応</span>
                  </div>
                  <div className="stat">
                    <strong>他社物件OK</strong>
                    <span>気になるURLを送るだけ</span>
                  </div>
                  <div className="stat">
                    <strong>見積り無料</strong>
                    <span>初期費用の内容を確認</span>
                  </div>
                </div>
                <form className="hero-form" id="hero-quick-form" action="#contact">
                  <div className="hero-form-title">かんたん相談フォーム</div>
                  <div className="hero-form-grid">
                    <input
                      className="wide"
                      name="物件URL"
                      type="url"
                      placeholder="物件URLを貼り付け"
                      data-event="input_property_url"
                    />
                    <input name="お名前" type="text" placeholder="お名前" />
                    <input name="連絡先" type="text" placeholder="電話またはメール" />
                    <select className="wide" name="希望連絡時間帯" defaultValue="希望連絡時間帯を選択">
                      <option>希望連絡時間帯を選択</option>
                      <option>午前</option>
                      <option>午後</option>
                      <option>夕方以降</option>
                      <option>指定なし</option>
                    </select>
                  </div>
                  <ul className="mini-checks">
                    <li>空室確認</li>
                    <li>初期費用確認</li>
                    <li>内覧日調整</li>
                  </ul>
                  <a className="btn btn-primary" href="#contact">
                    送信する
                  </a>
                  <p className="micro-note">
                    <span className="ib">物件や空室状況により、ご案内できない</span>
                    <span className="ib">場合があります。</span>
                    <br />
                    <span className="ib">お問い合わせ・見積り相談は無料です。</span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="band-about-problem">
          <section className="section about-section" id="about">
            <div className="container">
              <div className="section-head">
                <div>
                  <span className="eyebrow">About Us</span>
                  <h2 className="section-title">私たちについて</h2>
                </div>
                <p className="section-note">
                  <span className="ib">FIND HOMEは、「どこよりもお得で</span>
                  <span className="ib">安心して任せられる不動産サービス」を</span>
                  <span className="ib">ご提供したいという理想を掲げ</span>
                  <span className="ib">日々邁進しております。</span>
                  <br />
                  <span className="ib">宮城・仙台の不動産の</span>
                  <span className="ib">売買・賃貸・管理なら</span>
                  <span className="ib">ぜひ当社にお任せください。</span>
                </p>
              </div>
              <div className="cost-compare" data-motion="fade-up">
                <div className="compare-head">
                  <span className="compare-badge">最大限お安い初期費用をご提案</span>
                  <p className="compare-lead">
                    家賃が10万円だった際、<span className="ib">仲介手数料が無料だと</span>
                    <span className="ib">どのくらいお得になるのか</span>
                    <span className="ib">徹底比較。</span>
                  </p>
                </div>
                <div className="compare-row">
                  <div className="compare-card">
                    <div className="compare-title">A社</div>
                    <dl className="compare-rows">
                      <div>
                        <dt>礼金</dt>
                        <dd>¥0</dd>
                      </div>
                      <div>
                        <dt>家賃</dt>
                        <dd>¥100,000</dd>
                      </div>
                      <div>
                        <dt>共益費</dt>
                        <dd>¥5,000</dd>
                      </div>
                      <div>
                        <dt>火災保険</dt>
                        <dd>¥15,750</dd>
                      </div>
                      <div>
                        <dt>仲介手数料</dt>
                        <dd>¥110,000</dd>
                      </div>
                      <div className="compare-total">
                        <dt>見積価格</dt>
                        <dd>¥230,750</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="compare-card">
                    <div className="compare-title">B社</div>
                    <dl className="compare-rows">
                      <div>
                        <dt>礼金</dt>
                        <dd>¥0</dd>
                      </div>
                      <div>
                        <dt>家賃</dt>
                        <dd>¥100,000</dd>
                      </div>
                      <div>
                        <dt>共益費</dt>
                        <dd>¥5,000</dd>
                      </div>
                      <div>
                        <dt>火災保険</dt>
                        <dd>¥15,750</dd>
                      </div>
                      <div>
                        <dt>仲介手数料</dt>
                        <dd>¥55,000</dd>
                      </div>
                      <div className="compare-total">
                        <dt>見積価格</dt>
                        <dd>¥175,750</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="compare-arrow" aria-hidden="true">
                    <svg viewBox="0 0 28 24" fill="none">
                      <path
                        d="M0 12h22M15 4l8 8-8 8"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="compare-card compare-card-find">
                    <div className="compare-title compare-title-find">FIND HOME</div>
                    <dl className="compare-rows">
                      <div>
                        <dt>礼金</dt>
                        <dd>¥0</dd>
                      </div>
                      <div>
                        <dt>家賃</dt>
                        <dd>¥100,000</dd>
                      </div>
                      <div>
                        <dt>共益費</dt>
                        <dd>¥5,000</dd>
                      </div>
                      <div>
                        <dt>火災保険</dt>
                        <dd>¥20,000</dd>
                      </div>
                      <div>
                        <dt>仲介手数料</dt>
                        <dd className="compare-free">¥0</dd>
                      </div>
                      <div className="compare-total compare-total-find">
                        <dt>見積価格</dt>
                        <dd>¥125,000</dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <p className="compare-note">
                  <strong>浮いたお金の約10万円</strong>を、新生活のための
                  <span className="ib">家具・家電に充てることもできます。</span>
                </p>
              </div>
            </div>
          </section>

          <section className="section worry-merge" id="problems">
            <div className="container">
              <div className="section-head">
                <div>
                  <span className="eyebrow">Problem＆Service</span>
                  <h2 className="section-title">こんなお悩みありませんか？</h2>
                </div>
                <p className="section-note">
                  仙台で賃貸を探すときの<span className="ib">「時間がない」「費用が不安」</span>
                  <span className="ib">「この物件も相談できる？」を</span>
                  <span className="ib">来店前から整理できます。</span>
                </p>
              </div>
              <div className="worry-list" data-stagger="up">
                <p className="worry-item">日中に内覧へ行けない</p>
                <p className="worry-item">初期費用が高くて不安</p>
                <p className="worry-item">ポータル掲載物件を相談したい</p>
                <p className="worry-item">他社の見積りが妥当か不安</p>
                <p className="worry-item">急ぎで引っ越したい</p>
                <p className="worry-item">来店前に相談したい</p>
              </div>
              <div className="merge-bridge" id="service" data-stagger="up">
                <span className="eyebrow">Service</span>
                <h3>
                  そのお悩み、FIND HOMEなら
                  <br />
                  <span className="ib">物件探しごと</span>
                  <span className="ib">まとめて相談できます</span>
                </h3>
                <p>
                  <span className="ib">夜間内覧・初期費用の確認・</span>
                  <span className="ib">現地集合・急ぎの引っ越しまで。</span>
                  <br />
                  <span className="ib">来店前でも必要な確認を</span>
                  <span className="ib">まとめて進められます。</span>
                </p>
                <div className="solution-list" data-stagger="up">
                  <div className="solution-item">
                    <span className="pill">夜間内覧</span>
                    <h4>仕事帰りの内覧相談</h4>
                    <p>
                      <span className="ib">物件や担当者の予定により、17時以降の</span>
                      <span className="ib">内覧をご案内できる場合があります。</span>
                    </p>
                  </div>
                  <div className="solution-item">
                    <span className="pill">他社掲載物件</span>
                    <h4>物件URLを送って相談</h4>
                    <p>
                      気になる物件のURLから<span className="ib">空室状況・初期費用・内覧日程を</span>
                      <span className="ib">確認します。</span>
                    </p>
                  </div>
                  <div className="solution-item">
                    <span className="pill">初期費用</span>
                    <h4>見積り内容の確認</h4>
                    <p>
                      <span className="ib">他社見積りの内容も確認し、分かりにくい</span>
                      <span className="ib">項目を整理してお伝えします。</span>
                    </p>
                  </div>
                  <div className="solution-item">
                    <span className="pill">現地集合</span>
                    <h4>現地集合・送迎の相談</h4>
                    <p>
                      <span className="ib">物件や担当者予定に合わせて、集合方法も</span>
                      <span className="ib">事前に確認できます。</span>
                    </p>
                  </div>
                  <div className="solution-item">
                    <span className="pill">急ぎの引っ越し</span>
                    <h4>引っ越し時期から逆算</h4>
                    <p>
                      <span className="ib">空室確認から申込みまで、必要な段取りを</span>
                      <span className="ib">整理します。</span>
                    </p>
                  </div>
                  <div className="solution-item">
                    <span className="pill">契約前確認</span>
                    <h4>契約前の不安確認</h4>
                    <p>
                      契約条件や費用の見方を<span className="ib">納得できるよう</span>
                      <span className="ib">サポートします。</span>
                    </p>
                  </div>
                </div>
                <a className="btn btn-primary" href="#contact" data-event="click_fv_property_url_cta">
                  物件URLを送って相談する
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="band-cost-faq">
          <section className="section" id="cost">
            <div className="container">
              <div className="section-head">
                <div>
                  <span className="eyebrow">Initial Cost</span>
                  <h2 className="section-title">
                    初期費用の見積りの中身まで<span className="ib">確認します</span>
                  </h2>
                </div>
                <p className="section-note">
                  <span className="ib">同じ物件でも、初期費用は</span>
                  <span className="ib">見積り内容によって</span>
                  <span className="ib">差が出ることがあります。</span>
                  <br />
                  <span className="ib">納得して契約できるよう</span>
                  <span className="ib">確認します。</span>
                </p>
              </div>
              <div className="cost-panel" data-stagger="side">
                <div className="cost-box">
                  <h3>確認できる項目</h3>
                  <ul className="cost-list">
                    <li>仲介手数料</li>
                    <li>保証会社費用</li>
                    <li>火災保険</li>
                    <li>鍵交換費用</li>
                    <li>除菌・消毒・サポート費用</li>
                    <li>その他オプション費用</li>
                  </ul>
                </div>
                <div className="cost-box">
                  <h3>他社見積りも相談できます</h3>
                  <p>
                    <span className="ib">不要な費用が含まれていないか、分かりにくい</span>
                    <span className="ib">項目がないかを一緒に確認します。</span>
                    <br />
                    <span className="ib">初期費用を抑えられる可能性があるか、内容を</span>
                    <span className="ib">確認します。</span>
                  </p>
                  <a className="btn btn-primary" href="#contact" data-event="click_bottom_property_url_cta">
                    物件URLを送って相談する
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section flow-merge" id="flow">
            <div className="container">
              <div className="section-head">
                <div>
                  <span className="eyebrow">Flow</span>
                  <h2 className="section-title">物件URLを送った後の流れ</h2>
                </div>
                <p className="section-note">
                  問い合わせ後の見通しが分かると、賃貸探しは<span className="ib">ぐっと進めやすくなります。</span>
                </p>
              </div>
              <div className="process" data-stagger="up">
                <span className="process-motion-line"></span>
                <div className="process-item">
                  <h3>URLを送る</h3>
                  <p>
                    気になる物件URLや<span className="ib">希望条件を</span>
                    <span className="ib">送ってください。</span>
                  </p>
                </div>
                <div className="process-item">
                  <h3>空室確認</h3>
                  <p>
                    募集状況と内覧可否を<span className="ib">確認します。</span>
                  </p>
                </div>
                <div className="process-item">
                  <h3>費用確認</h3>
                  <p>
                    初期費用や見積り内容を<span className="ib">整理します。</span>
                  </p>
                </div>
                <div className="process-item">
                  <h3>内覧調整</h3>
                  <p>
                    現地集合や<span className="ib">夕方以降の相談も</span>
                    <span className="ib">確認します。</span>
                  </p>
                </div>
                <div className="process-item">
                  <h3>申込み</h3>
                  <p>
                    申込み・契約手続きまで<span className="ib">サポートします。</span>
                  </p>
                </div>
              </div>
              <div className="flow-cta" data-motion="fade-up" aria-labelledby="mid-cta-title">
                <div>
                  <span className="eyebrow">Free Consultation</span>
                  <h3 id="mid-cta-title">
                    <span className="ib">気になる物件がある方へ</span>
                  </h3>
                  <p>
                    <span className="ib">URLを送るだけで、空室状況や</span>
                    <span className="ib">初期費用を確認できます。</span>
                    <br />
                    <span className="ib">夜間・早朝の内覧も</span>
                    <span className="ib">まずはご相談ください。</span>
                  </p>
                </div>
                <div className="cta-actions">
                  <a className="btn btn-secondary" href="https://suumo.jp/" target="_blank" rel="noopener">
                    SUUMOはこちら
                  </a>
                  <a className="btn btn-primary" href="#contact" data-event="click_bottom_property_url_cta">
                    物件URLを送って相談する
                  </a>
                  <a className="btn btn-secondary" href="#cost" data-event="click_fv_initial_cost_cta">
                    初期費用を確認する
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="scroll-sentinel" data-scroll-event="scroll_50" aria-hidden="true"></div>

          <section className="section" id="reasons">
            <div className="container">
              <div className="section-head">
                <div>
                  <span className="eyebrow">Reasons</span>
                  <h2 className="section-title">FIND HOMEが選ばれる理由</h2>
                </div>
                <p className="section-note">
                  安さだけではなく、早さ・相談しやすさ・<span className="ib">確認の丁寧さを</span>
                  <span className="ib">大切にしています。</span>
                </p>
              </div>
              <div className="trust-grid" data-stagger="left">
                <article className="trust-card">
                  <h3>仙台エリアに密着</h3>
                  <p>
                    <span className="ib">地域の相場感と</span>
                    <span className="ib">暮らし目線を踏まえて、住まい探しを</span>
                    <span className="ib">サポートします。</span>
                  </p>
                </article>
                <article className="trust-card">
                  <h3>仕事帰りの内覧相談</h3>
                  <p>
                    <span className="ib">物件や空室状況により、夜間・早朝の内覧も</span>
                    <span className="ib">ご相談いただけます。</span>
                  </p>
                </article>
                <article className="trust-card">
                  <h3>他社掲載物件も相談可能</h3>
                  <p>
                    SUUMO・HOME'Sなどで見つけたURLから<span className="ib">確認を進められます。</span>
                  </p>
                </article>
                <article className="trust-card">
                  <h3>初期費用の見積り確認</h3>
                  <p>
                    <span className="ib">費用の内訳を確認し、納得して</span>
                    <span className="ib">契約できるよう整理します。</span>
                  </p>
                </article>
                <article className="trust-card">
                  <h3>現地集合や送迎も相談可能</h3>
                  <p>
                    担当者予定や物件条件に合わせ<span className="ib">無理のない見学方法を</span>
                    <span className="ib">確認します。</span>
                  </p>
                </article>
                <article className="trust-card">
                  <h3>売買・管理も相談可能</h3>
                  <p>
                    <span className="ib">賃貸を主軸に、内容に応じて</span>
                    <span className="ib">売買や管理のご相談にも</span>
                    <span className="ib">対応します。</span>
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="section" id="faq">
            <div className="container narrow">
              <div className="section-head">
                <div>
                  <span className="eyebrow">FAQ</span>
                  <h2 className="section-title">よくある質問</h2>
                </div>
                <p className="section-note">
                  <span className="ib">問い合わせ前に多い</span>
                  <span className="ib">ご相談・ご質問をまとめました。</span>
                  <br />
                  <span className="ib">ここにない内容も</span>
                  <span className="ib">お気軽にお問い合わせください。</span>
                </p>
              </div>
              <div className="faq-featured" data-stagger="alt">
                <article className="faq-feature">
                  <img src="/images/voice-1.jpg" alt="仕事帰りの内覧相談" />
                  <div className="faq-feature-body">
                    <h3>
                      <span className="faq-mark">Q</span>
                      <span>
                        仕事帰りの遅い時間でも<span className="ib">内覧できますか？</span>
                      </span>
                    </h3>
                    <p>
                      <span className="faq-mark faq-mark-a">A</span>
                      <span>
                        物件や空室状況・管理会社確認・<span className="ib">担当者予定によりますが</span>
                        <span className="ib">夜間・早朝の内覧も</span>
                        <span className="ib">ご相談いただけます。</span>
                        <br />
                        <span className="ib">17時までにご連絡いただくと</span>
                        <span className="ib">調整しやすくなります。</span>
                      </span>
                    </p>
                  </div>
                </article>
                <article className="faq-feature">
                  <img src="/images/voice-3.jpg" alt="物件URLの相談" />
                  <div className="faq-feature-body">
                    <h3>
                      <span className="faq-mark">Q</span>
                      <span>
                        SUUMOなどで見つけた<span className="ib">他社物件も</span>
                        <span className="ib">相談できますか？</span>
                      </span>
                    </h3>
                    <p>
                      <span className="faq-mark faq-mark-a">A</span>
                      <span>
                        はい。
                        <br />
                        <span className="ib">気になる物件のURLを</span>
                        <span className="ib">送っていただければ</span>
                        <span className="ib">空室状況・初期費用・内覧可否を</span>
                        <span className="ib">まとめて確認します。</span>
                      </span>
                    </p>
                  </div>
                </article>
                <article className="faq-feature">
                  <img src="/images/voice-2.jpg" alt="初期費用の見積り確認" />
                  <div className="faq-feature-body">
                    <h3>
                      <span className="faq-mark">Q</span>
                      <span>
                        初期費用の見積りを<span className="ib">事前に確認できますか？</span>
                      </span>
                    </h3>
                    <p>
                      <span className="faq-mark faq-mark-a">A</span>
                      <span>
                        はい。
                        <br />
                        <span className="ib">他社見積りの内容も確認し、不要な費用や</span>
                        <span className="ib">分かりにくい項目がないか</span>
                        <span className="ib">一緒に確認します。</span>
                      </span>
                    </p>
                  </div>
                </article>
              </div>
              <div className="faq-list" data-stagger="up">
                <div className="faq-more" id="faq-more">
                  <div className="faq-more-inner">
                    <details className="faq-item">
                      <summary>初期費用は必ず安くなりますか？</summary>
                      <p>
                        <span className="ib">必ず安くなるとは限りません。</span>
                        <br />
                        <span className="ib">ただし、見積り内容を</span>
                        <span className="ib">確認することで、費用の</span>
                        <span className="ib">内訳を理解し、納得して</span>
                        <span className="ib">契約しやすくなります。</span>
                      </p>
                    </details>
                    <details className="faq-item">
                      <summary>現地集合はできますか？</summary>
                      <p>
                        <span className="ib">物件や担当者の</span>
                        <span className="ib">予定によりますが、現地集合も</span>
                        <span className="ib">ご相談可能です。</span>
                        <br />
                        <span className="ib">事前に希望をお知らせください。</span>
                      </p>
                    </details>
                    <details className="faq-item">
                      <summary>急ぎの引っ越しでも対応できますか？</summary>
                      <p>
                        空室状況や審査状況によりますが、急ぎの方も<span className="ib">できる限りスムーズに</span>
                        <span className="ib">進められるよう</span>
                        <span className="ib">確認します。</span>
                      </p>
                    </details>
                    <details className="faq-item">
                      <summary>17時までに電話すれば内覧できますか？</summary>
                      <p>
                        <span className="ib">17時までにご連絡いただくと</span>
                        <span className="ib">確認を進めやすくなります。</span>
                        <br />
                        <span className="ib">物件や空室状況により</span>
                        <span className="ib">ご案内条件が異なるため、まずは</span>
                        <span className="ib">電話でご相談ください。</span>
                      </p>
                    </details>
                    <details className="faq-item">
                      <summary>保証人がいなくても相談できますか？</summary>
                      <p>
                        <span className="ib">保証会社を利用できる物件もあります。</span>
                        <br />
                        <span className="ib">条件に合う物件を確認しますので</span>
                        <span className="ib">ご相談ください。</span>
                      </p>
                    </details>
                    <details className="faq-item">
                      <summary>売買や管理の相談もできますか？</summary>
                      <p>
                        はい。
                        <br />
                        <span className="ib">賃貸相談を主軸にしつつ、売買や</span>
                        <span className="ib">管理についても</span>
                        <span className="ib">内容に応じてご相談いただけます。</span>
                      </p>
                    </details>
                  </div>
                </div>
              </div>
              <button
                className="faq-toggle"
                type="button"
                data-faq-toggle
                aria-controls="faq-more"
                aria-expanded="false"
              >
                <span className="faq-toggle-icon" aria-hidden="true"></span>
                <span className="faq-toggle-label">他の質問を見る</span>
              </button>
            </div>
          </section>
        </div>

        <div className="band-dark-city">
          <section className="section contact section-soft" id="contact">
            <div className="container">
              <div className="section-head">
                <div>
                  <span className="eyebrow">Contact</span>
                  <h2 className="section-title">
                    <span className="ib">物件URLを送って</span>
                    <span className="ib">空室・初期費用・</span>
                    <span className="ib">内覧日を相談する</span>
                  </h2>
                </div>
                <p className="section-note">
                  <span className="ib">送信後、担当者より内容確認のうえ</span>
                  <span className="ib">ご連絡いたします。</span>
                  <br />
                  <span className="ib">お問い合わせ・見積り相談は無料です。</span>
                </p>
              </div>
              <div className="contact-body">
                <div className="contact-phone-strip" data-motion="fade-up" aria-label="電話での相談窓口">
                  <a href="tel:0223954899" data-event="tap_phone">
                    <span>賃貸担当</span>
                    <strong>022-395-4899</strong>
                  </a>
                  <a href="tel:0223954355" data-event="tap_phone">
                    <span>売買担当</span>
                    <strong>022-395-4355</strong>
                  </a>
                </div>
                <form
                  className="contact-card"
                  data-motion="fade-up"
                  action="mailto:info@find-home.jp"
                  method="post"
                  encType="text/plain"
                >
                  <label>
                    相談種別
                    <select name="相談種別" defaultValue="気になる物件URLを相談したい">
                      <option>気になる物件URLを相談したい</option>
                      <option>賃貸物件を探したい</option>
                      <option>初期費用を相談したい</option>
                      <option>売買について相談したい</option>
                      <option>管理について相談したい</option>
                      <option>その他</option>
                    </select>
                  </label>
                  <div className="form-grid-two">
                    <label>
                      お名前<input name="お名前" type="text" required />
                    </label>
                    <label>
                      電話番号<input name="電話番号" type="tel" required />
                    </label>
                  </div>
                  <label>
                    メールアドレス<input name="メールアドレス" type="email" required />
                  </label>
                  <label>
                    気になる物件URL
                    <input
                      name="気になる物件URL"
                      type="url"
                      placeholder="https://..."
                      data-event="input_property_url"
                    />
                  </label>
                  <div className="form-grid-two">
                    <label>
                      希望エリア<input name="希望エリア" type="text" placeholder="例：青葉区、仙台駅周辺" />
                    </label>
                    <label>
                      家賃予算<input name="家賃予算" type="text" placeholder="例：7万円以内" />
                    </label>
                  </div>
                  <div className="form-grid-two">
                    <label>
                      引っ越し希望時期
                      <select name="引っ越し希望時期" defaultValue="未定">
                        <option>未定</option>
                        <option>すぐ</option>
                        <option>1ヶ月以内</option>
                        <option>3ヶ月以内</option>
                      </select>
                    </label>
                    <label>
                      希望連絡方法
                      <select name="希望連絡方法" defaultValue="どちらでも可">
                        <option>どちらでも可</option>
                        <option>電話</option>
                        <option>メール</option>
                      </select>
                    </label>
                  </div>
                  <label>
                    連絡希望時間帯
                    <select name="連絡希望時間帯" defaultValue="指定なし">
                      <option>指定なし</option>
                      <option>午前</option>
                      <option>午後</option>
                      <option>夕方以降</option>
                    </select>
                  </label>
                  <label>
                    相談内容
                    <textarea name="相談内容" required placeholder="空室確認、初期費用、内覧希望日時など" />
                  </label>
                  <label className="privacy-check">
                    <input name="個人情報同意" type="checkbox" required />
                    <span>
                      <a href="/privacy" target="_blank" rel="noopener">
                        プライバシーポリシー
                      </a>
                      を確認し、個人情報の取扱いに同意します。
                    </span>
                  </label>
                  <button className="btn btn-primary" type="submit">
                    物件URLを送って相談する
                  </button>
                  <p className="micro-note">
                    <span className="ib">送信後、担当者より内容確認のうえご連絡いたします。</span>
                    <br />
                    <span className="ib">お問い合わせ・見積り相談は無料です。</span>
                    <br />
                    <span className="ib">物件や空室状況により、ご案内できない場合もございます。</span>
                  </p>
                </form>
              </div>
            </div>
          </section>

          <div className="loop-band" aria-hidden="true">
            <div className="loop-band-track">
              <span>{loopText}</span>
              <span>{loopText}</span>
              <span>{loopText}</span>
              <span>{loopText}</span>
            </div>
          </div>

          <section className="section company-section" id="company">
            <div className="container company-card" data-stagger="up">
              <div className="company-copy">
                <span className="eyebrow">Company</span>
                <h2>会社概要</h2>
                <p>
                  宮城・仙台の不動産相談を<span className="ib">地域密着でサポートしています。</span>
                </p>
                <a
                  className="btn btn-secondary company-map-link"
                  href="https://maps.app.goo.gl/aShcq9N2mQyTNBXB8"
                  target="_blank"
                  rel="noopener"
                >
                  Google Mapで見る
                </a>
              </div>
              <dl className="company-overview">
                <div>
                  <dt>会社名</dt>
                  <dd>株式会社FIND</dd>
                </div>
                <div>
                  <dt>所在地</dt>
                  <dd>
                    〒980-0803
                    <br />
                    宮城県仙台市青葉区国分町3-6-11
                    <br />
                    アーク仙台ビル3F
                  </dd>
                </div>
                <div>
                  <dt>TEL&amp;FAX</dt>
                  <dd>
                    <a href="tel:0222118782">022-211-8782</a>
                  </dd>
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
                  <dt>相談窓口</dt>
                  <dd>
                    賃貸担当{" "}
                    <a href="tel:0223954899" data-event="tap_phone">
                      022-395-4899
                    </a>
                    <br />
                    売買担当{" "}
                    <a href="tel:0223954355" data-event="tap_phone">
                      022-395-4355
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>グループ会社</dt>
                  <dd>LALA株式会社</dd>
                </div>
              </dl>
              <a
                className="btn btn-secondary company-cta"
                href="https://lala-reform.com"
                target="_blank"
                rel="noopener"
              >
                リフォームはこちら
              </a>
              <div className="company-map">
                <iframe
                  title="株式会社FIND 周辺地図"
                  src="https://maps.google.com/maps?q=38.2687,140.8695&z=17&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer withNav />
      <MobileBottomNav />
      <div className="scroll-sentinel" data-scroll-event="scroll_90" aria-hidden="true"></div>
    </>
  );
}
