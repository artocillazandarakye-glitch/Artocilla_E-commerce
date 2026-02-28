const linkStyle = {
  color: "#8a8070",
  fontSize: "14px",
  fontFamily: "sans-serif",
  fontWeight: "300",
  transition: "color 0.2s",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "block",
  textAlign: "left",
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1a1a18", color: "#d4c9b8", fontFamily: "'Georgia', serif" }}>
      {/* Main Footer Content */}
      <div style={{
        padding: "64px 80px 48px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: "48px",
      }}>
        {/* Brand Column */}
        <div>
          <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#8a8070", maxWidth: "280px", fontFamily: "sans-serif", fontWeight: "300", margin: "0 0 28px 0" }}>
            Timeless fashion crafted for the modern soul. We believe in beautiful simplicity — clothes that move with you through every moment.
          </p>
          {/* Social Icons */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              {
                name: "Facebook",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                )
              },
              {
                name: "Instagram",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                )
              },
              {
                name: "TikTok",
                icon: (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
                  </svg>
                )
              },
              {
                name: "Pinterest",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                )
              },
            ].map(({ name, icon }) => (
              <button
                key={name}
                title={name}
                onClick={() => {}}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid #f0ead6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f0ead6",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#f0ead6";
                  e.currentTarget.style.color = "#1a1a18";
                  e.currentTarget.style.backgroundColor = "#f0ead6";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#f0ead6";
                  e.currentTarget.style.color = "#f0ead6";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Shop Column */}
        <div>
          <h4 style={{ fontSize: "11px", letterSpacing: "3px", color: "#b8956a", marginBottom: "24px", fontFamily: "sans-serif", textTransform: "uppercase", fontWeight: "400" }}>
            Shop
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Women", "Men", "Kids", "Footwear", "Accessories", "Gift Cards", "New Arrivals", "Best Sellers"].map(item => (
              <li key={item} style={{ marginBottom: "12px" }}>
                <button
                  style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = "#f0ece4"}
                  onMouseLeave={e => e.currentTarget.style.color = "#8a8070"}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h4 style={{ fontSize: "11px", letterSpacing: "3px", color: "#b8956a", marginBottom: "24px", fontFamily: "sans-serif", textTransform: "uppercase", fontWeight: "400" }}>
            Help
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["FAQ", "Shipping & Returns", "Size Guide", "Order Tracking", "Contact Us", "Store Locator", "Loyalty Program"].map(item => (
              <li key={item} style={{ marginBottom: "12px" }}>
                <button
                  style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = "#f0ece4"}
                  onMouseLeave={e => e.currentTarget.style.color = "#8a8070"}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 style={{ fontSize: "11px", letterSpacing: "3px", color: "#b8956a", marginBottom: "24px", fontFamily: "sans-serif", textTransform: "uppercase", fontWeight: "400" }}>
            Company
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["About Us", "Blog", "Careers", "Press", "Sustainability", "Privacy Policy", "Terms of Service"].map(item => (
              <li key={item} style={{ marginBottom: "12px" }}>
                <button
                  style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = "#f0ece4"}
                  onMouseLeave={e => e.currentTarget.style.color = "#8a8070"}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: "1px solid #2e2820",
        padding: "24px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <p style={{ fontSize: "13px", color: "#9a8e80", fontFamily: "sans-serif", margin: 0 }}>
          © 2026 Apparel. All rights reserved.
        </p>

        <p style={{ fontSize: "13px", color: "#9a8e80", fontFamily: "sans-serif", margin: 0 }}>
          Made with ♥ in the Philippines
        </p>
      </div>
    </footer>
  );
};

export default Footer;