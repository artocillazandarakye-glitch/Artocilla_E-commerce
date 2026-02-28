import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="https://i.ibb.co/spWgkWzH/12.jpg" alt="Apparel Logo" className="navbar__logo-img" />
      </div>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <li><a href="/" className="navbar__link" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="/collections" className="navbar__link" onClick={() => setMenuOpen(false)}>Collections</a></li>
        <li><a href="/products" className="navbar__link" onClick={() => setMenuOpen(false)}>Products</a></li>
        <li><a href="/blog" className="navbar__link" onClick={() => setMenuOpen(false)}>Blog</a></li>
        <li><a href="/about" className="navbar__link" onClick={() => setMenuOpen(false)}>About</a></li>
      </ul>

      <div className="navbar__icons">
        <button className="navbar__icon-btn" title="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2c1a0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>

        <button className="navbar__icon-btn" title="Cart" onClick={() => setCartCount(c => c + 1)}>
          <div className="navbar__cart-wrapper">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c1a0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && <span className="navbar__cart-badge">{cartCount}</span>}
          </div>
        </button>

        <button className="navbar__icon-btn" title="Profile">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c1a0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>

        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2c1a0e" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2c1a0e" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}