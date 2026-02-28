import React from 'react';

export default function Hero() {
  return (
    <section className="hero__section" style={styles.hero}>
      <img
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600"
        alt="Hero"
        style={styles.bgImg}
      />
      <div style={styles.overlay}></div>

      <div className="hero__content" style={styles.content}>
        <p className="hero__subtitle" style={styles.subtitle}>NEW COLLECTION 2026</p>
        <h1 className="hero__title" style={styles.title}>Live in<br />Beautiful<br />Simplicity</h1>
        <p className="hero__desc" style={styles.desc}>
          Timeless fashion crafted for the modern soul.
        </p>
        <a href="/shop" className="hero__btn" style={styles.btnPrimary}>Shop Now</a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    height: '90vh',
    width: '100%',
    overflow: 'hidden',
   
  },
  bgImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.35)',
  },
  content: {
    position: 'relative',
    color: '#fff',
    padding: '5rem',
    maxWidth: '600px',
  },
  subtitle: {
    letterSpacing: '0.3em',
    fontSize: '0.75rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '4rem',
    fontWeight: '700',
    fontFamily: '"Playfair Display", Georgia, serif',
    lineHeight: 1.15,
    marginBottom: '1.25rem',
  },
  desc: { marginBottom: '2rem', fontSize: '1rem' },
  btnPrimary: {
    display: 'inline-block',
    padding: '0.85rem 2.5rem',
    backgroundColor: '#c9956c',
    color: '#fff',
    textDecoration: 'none',
    fontFamily: '"Jost", sans-serif',
    fontWeight: '500',
    letterSpacing: '0.05em',
  },
};