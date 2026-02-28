import React, { useState, useEffect } from 'react';

function getTimeLeft() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = end - now;
  return {
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Deal() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = n => String(n).padStart(2, '0');

  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <p style={styles.tag}>LIMITED OFFER</p>
        <h2 style={styles.heading}>Deal of the Week</h2>
        <p style={styles.desc}>Get 40% off on our premium Linen Collection. Comfort meets elegance — don't miss out!</p>
        <div style={styles.timer}>
          {[['Hours', time.hours], ['Mins', time.minutes], ['Secs', time.seconds]].map(([label, val]) => (
            <div key={label} style={styles.timeBlock}>
              <span style={styles.timeNum}>{pad(val)}</span>
              <span style={styles.timeLabel}>{label}</span>
            </div>
          ))}
        </div>
        <a href="#" style={styles.btn}>Grab the Deal</a>
      </div>
      <div style={styles.right}>
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600"
          alt="Deal of the Week"
          style={styles.img}
        />
        <div style={styles.badge}>40% OFF</div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    padding: '5rem 3rem',
    backgroundColor: '#2c1a0e',
    color: '#fff',
    flexWrap: 'wrap',
  },
  left: { flex: 1, minWidth: '280px' },
  tag: {
    letterSpacing: '0.3em',
    fontSize: '0.8rem',
    color: '#c9956c',
    marginBottom: '0.5rem',
  },
  heading: {
    fontSize: '2.5rem',
    fontFamily: 'Georgia, serif',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  desc: {
    lineHeight: 1.7,
    opacity: 0.85,
    marginBottom: '2rem',
    maxWidth: '400px',
  },
  timer: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  timeBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timeNum: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#c9956c',
    lineHeight: 1,
  },
  timeLabel: {
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
    opacity: 0.7,
    marginTop: '0.25rem',
  },
  btn: {
    display: 'inline-block',
    padding: '0.85rem 2.5rem',
    backgroundColor: '#c9956c',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '700',
    letterSpacing: '0.1em',
    borderRadius: '2px',
  },
  right: {
    flex: 1,
    minWidth: '280px',
    position: 'relative',
  },
  img: {
    width: '100%',
    borderRadius: '4px',
    objectFit: 'cover',
    maxHeight: '450px',
  },
  badge: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#c9956c',
    color: '#fff',
    fontWeight: '700',
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    borderRadius: '2px',
  },
};