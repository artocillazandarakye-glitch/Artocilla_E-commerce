import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>

        {/* Col 1: Brand */}
        <div style={styles.col}>
          <div style={styles.brandName}>APPAREL</div>
          <p style={styles.brandSub}>TIMELESS FASHION — EST. 2024</p>
          <p style={styles.about}>Simple. Intentional. Beautiful. Fashion that serves your life.</p>
          <div style={styles.socials}>
            {/* Facebook */}
            <a href="#" style={styles.socialBtn} title="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ccc">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" style={styles.socialBtn} title="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#ccc" stroke="none"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" style={styles.socialBtn} title="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ccc">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" style={styles.socialBtn} title="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#ccc">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Shop */}
        <div style={styles.col}>
          <h4 style={styles.colTitle}>SHOP</h4>
          {["Women's Collection", "Men's Collection", 'Kids', 'Accessories', 'Sale'].map(item => (
            <a key={item} href="#" style={styles.colLink}>{item}</a>
          ))}
        </div>

        {/* Col 3: Company */}
        <div style={styles.col}>
          <h4 style={styles.colTitle}>COMPANY</h4>
          {['About Us', 'Careers', 'Press', 'Sustainability'].map(item => (
            <a key={item} href="#" style={styles.colLink}>{item}</a>
          ))}
        </div>

        {/* Col 4: Support */}
        <div style={styles.col}>
          <h4 style={styles.colTitle}>SUPPORT</h4>
          {['FAQ', 'Shipping & Returns', 'Size Guide', 'Contact Us'].map(item => (
            <a key={item} href="#" style={styles.colLink}>{item}</a>
          ))}
        </div>

      </div>

      <div style={styles.bottom}>
        <p style={styles.copyright}>© 2026 APPAREL. All rights reserved.</p>
        <div style={styles.bottomLinks}>
          <a href="#" style={styles.bottomLink}>Privacy</a>
          <span style={styles.dot}>·</span>
          <a href="#" style={styles.bottomLink}>Terms</a>
          <span style={styles.dot}>·</span>
          <a href="#" style={styles.bottomLink}>Cookies</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1e1409',
    color: '#a89880',
    padding: '5rem 4rem 2.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.8fr 1fr 1fr 1fr',
    gap: '3rem',
    marginBottom: '4rem',
    paddingBottom: '4rem',
    borderBottom: '1px solid #2e2010',
  },
  col: { display: 'flex', flexDirection: 'column', gap: '0.6rem' },
  brandName: {
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#f5f0eb',
    letterSpacing: '0.08em',
    marginBottom: '0.15rem',
  },
  brandSub: {
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    color: '#6b5744',
    marginBottom: '0.75rem',
    textTransform: 'uppercase',
  },
  about: {
    lineHeight: 1.8,
    fontSize: '0.88rem',
    maxWidth: '220px',
    color: '#a89880',
    marginBottom: '0.5rem',
  },
  socials: { display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' },
  socialBtn: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    backgroundColor: '#2e2010',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'background 0.2s',
  },
  colTitle: {
    color: '#f5f0eb',
    fontWeight: '600',
    fontSize: '0.7rem',
    letterSpacing: '0.2em',
    marginBottom: '0.75rem',
    fontFamily: '"Jost", sans-serif',
  },
  colLink: {
    color: '#a89880',
    textDecoration: 'none',
    fontSize: '0.88rem',
    lineHeight: 2,
    transition: 'color 0.2s',
    fontFamily: '"Jost", sans-serif',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    fontSize: '0.8rem',
    color: '#5a4535',
  },
  copyright: { margin: 0 },
  bottomLinks: { display: 'flex', alignItems: 'center', gap: '0.5rem' },
  bottomLink: { color: '#5a4535', textDecoration: 'none' },
  dot: { color: '#3a2a1a' },
};