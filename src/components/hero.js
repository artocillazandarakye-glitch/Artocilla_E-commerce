import React from 'react';

export default function Hero() {
  return (
    <section style={styles.hero}>
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600"
        alt="Hero"
        style={styles.bgImg}
      />
      {/* Dark overlay */}
      <div style={styles.overlay}></div>

      {/* Text — left side */}
      <div style={styles.content}>
        <p style={styles.subtitle}>NEW COLLECTION 2026</p>
        <h1 style={styles.title}>Live in<br />Beautiful<br />Simplicity</h1>
        <p style={styles.desc}>Timeless fashion crafted for the modern soul.<br />Elegant, sustainable, and effortlessly you.</p>
        <a href="#" style={styles.btnPrimary}>Shop Now</a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  bgImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.05) 100%)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    color: '#fff',
    padding: '0 5rem',
    maxWidth: '600px',
  },
  subtitle: {
    letterSpacing: '0.3em',
    fontSize: '0.8rem',
    marginBottom: '1rem',
    opacity: 0.85,
  },
  title: {
    fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
    fontWeight: '700',
    lineHeight: 1.05,
    marginBottom: '1.5rem',
    fontFamily: 'Georgia, serif',
  },
  desc: {
    fontSize: '1rem',
    lineHeight: 1.8,
    opacity: 0.88,
    marginBottom: '2.5rem',
  },
  btnPrimary: {
    display: 'inline-block',
    padding: '0.85rem 2.5rem',
    backgroundColor: '#c9956c',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '700',
    letterSpacing: '0.1em',
    fontSize: '0.9rem',
    borderRadius: '2px',
  },
};