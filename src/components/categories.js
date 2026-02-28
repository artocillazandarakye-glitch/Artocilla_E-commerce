import React from 'react';

const categoryData = [
  { label: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80' },
  { label: 'Men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80' },
  { label: 'Kids', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80' },
  { label: 'Gift Cards', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80' },
  { label: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' },
  { label: 'Accessories', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80' },
];

export default function Categories() {
  return (
    <section style={styles.section}>
      <p style={styles.eyebrow}>BROWSE BY</p>
      <h2 style={styles.heading}>Shop by Category</h2>
      <div style={styles.grid}>
        {categoryData.map((cat, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={e => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.07)';
            }}
            onMouseLeave={e => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img src={cat.image} alt={cat.label} style={styles.img} />
            <div style={styles.overlay}>
              <p style={styles.label}>{cat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '5rem 4rem',
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
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1e1409',
    marginBottom: '2.5rem',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  card: {
    width: '220px',
    height: '300px',
    borderRadius: '2px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(30,20,9,0.15)',
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
    paddingBottom: '1.2rem',
  },
  label: {
    color: '#f5f0eb',
    fontWeight: '500',
    fontSize: '1.2rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontFamily: '"Jost", sans-serif',
    textShadow: '0 1px 4px rgba(0,0,0,0.4)',
  },
};