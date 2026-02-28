import React from 'react';

export default function Footer() {
  return (
    <footer className="footer__root">
      <div className="footer__grid">

        <div className="footer__col footer__col--brand">
          <div className="footer__brand-name">APPAREL</div>
          <p className="footer__brand-sub">TIMELESS FASHION — EST. 2024</p>
          <p className="footer__about">Simple. Intentional. Beautiful. Fashion that serves your life.</p>
          <div className="footer__socials">
            <a href="https://facebook.com" className="footer__social-btn" title="Facebook" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ccc">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="footer__social-btn" title="Instagram" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#ccc" stroke="none"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="footer__social-btn" title="Twitter" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ccc">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://tiktok.com" className="footer__social-btn" title="TikTok" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ccc">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">SHOP</h4>
          {[
            ["Women's Collection", "/collections/women"],
            ["Men's Collection",   "/collections/men"],
            ["Kids",               "/collections/kids"],
            ["Accessories",        "/collections/accessories"],
            ["Sale",               "/sale"],
          ].map(([item, href]) => (
            <a key={item} href={href} className="footer__col-link">{item}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">COMPANY</h4>
          {[
            ["About Us",       "/about"],
            ["Careers",        "/careers"],
            ["Press",          "/press"],
            ["Sustainability", "/sustainability"],
          ].map(([item, href]) => (
            <a key={item} href={href} className="footer__col-link">{item}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">SUPPORT</h4>
          {[
            ["FAQ",                "/faq"],
            ["Shipping & Returns", "/shipping"],
            ["Size Guide",         "/size-guide"],
            ["Contact Us",         "/contact"],
          ].map(([item, href]) => (
            <a key={item} href={href} className="footer__col-link">{item}</a>
          ))}
        </div>

      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© 2026 APPAREL. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="/privacy" className="footer__bottom-link">Privacy</a>
          <span className="footer__dot">·</span>
          <a href="/terms" className="footer__bottom-link">Terms</a>
          <span className="footer__dot">·</span>
          <a href="/cookies" className="footer__bottom-link">Cookies</a>
        </div>
      </div>
    </footer>
  );
}