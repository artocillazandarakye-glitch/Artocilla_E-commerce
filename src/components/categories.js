import React, { useState, useEffect } from 'react';

const categoryData = [
  { label: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80' },
  { label: 'Men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80' },
  { label: 'Kids', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80' },
  { label: 'Gift Cards', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80' },
  { label: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' },
  { label: 'Accessories', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80' },
];

export default function Categories() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth < 480;
  const isTablet = screenWidth >= 480 && screenWidth < 768;


  const gridStyle = {
    display: 'grid',
    gap: isMobile ? '0.75rem' : '1rem',
    gridTemplateColumns: isMobile
      ? 'repeat(2, 1fr)'
      : isTablet
      ? 'repeat(3, 1fr)'
      : 'repeat(6, 1fr)',
  };

  const cardHeight = isMobile ? '160px' : isTablet ? '220px' : '300px';

  const sectionPadding = isMobile
    ? '3rem 1.25rem'
    : isTablet
    ? '4rem 2rem'
    : '5rem 4rem';

  return (
    <section style={{ ...styles.section, padding: sectionPadding }}>
      <p style={styles.eyebrow}>BROWSE BY</p>
      <h2 style={{
        ...styles.heading,
        fontSize: isMobile ? '1.5rem' : '2rem',
        marginBottom: isMobile ? '1.5rem' : '2.5rem',
      }}>
        Shop by Category
      </h2>
      <div style={gridStyle}>
        {categoryData.map((cat, i) => (
          <div
            key={i}
            style={{ ...styles.card, height: cardHeight }}
            onMouseEnter={e => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.07)';
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img src={cat.image} alt={cat.label} style={styles.img} />
            <div style={styles.overlay}>
              <p style={{
                ...styles.label,
                fontSize: isMobile ? '0.75rem' : '1.2rem',
                letterSpacing: isMobile ? '0.08em' : '0.1em',
              }}>
                {cat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#f5f0eb',
    textAlign: 'center',
  },
  eyebrow: {
    fontSize: '0.68rem',
    letterSpacing: '0.22em',
    color: '#6b5744',
    marginBottom: '0.6rem',
    fontFamily: '"Jost", sans-serif',
  },
  heading: {
    fontWeight: '700',
    color: '#1e1409',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  card: {
    borderRadius: '2px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(30,20,9,0.15)',
    width: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.35s ease',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(30,20,9,0.75) 0%, rgba(30,20,9,0.05) 60%)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: '1rem',
  },
  label: {
    color: '#f5f0eb',
    fontWeight: '500',
    textTransform: 'uppercase',
    fontFamily: '"Jost", sans-serif',
    textShadow: '0 1px 4px rgba(0,0,0,0.4)',
  },
};