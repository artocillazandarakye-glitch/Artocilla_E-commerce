import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo placeholder */}
        <div className="footer-logo">
          <h2>YourLogo</h2>
        </div>

        {/* Links / Info Blocks */}
        <div className="footer-links">
          <div className="link-block">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="link-block">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Contact</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-bottom">
        <p>Follow us:</p>
        <div className="social-icons">
          <a href="#">FB</a>
          <a href="#">TW</a>
          <a href="#">IG</a>
        </div>
        <p>© 2026 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;