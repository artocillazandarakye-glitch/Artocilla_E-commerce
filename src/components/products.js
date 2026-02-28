import React, { useState } from 'react';
import { ProductCardList } from '../app/main/homepage/components/cardlist';

const allProducts = [
  { title: 'Linen Wrap Dress', price: '₱1,299', badge: 'New', category: 'new', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400', rating: 4 },
  { title: 'Classic White Tee', price: '₱599', badge: 'Best Seller', category: 'bestseller', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', rating: 5 },
  { title: 'Slim Fit Chinos', price: '₱1,099', badge: 'Top Rated', category: 'toprated', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400', rating: 5 },
  { title: 'Floral Midi Skirt', price: '₱899', badge: 'New', category: 'new', image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400', rating: 4 },
  { title: 'Oversized Blazer', price: '₱2,199', badge: 'Best Seller', category: 'bestseller', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', rating: 4 },
  { title: 'Knit Cardigan', price: '₱1,499', badge: 'Top Rated', category: 'toprated', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400', rating: 5 },
  { title: 'Denim Jacket', price: '₱1,799', badge: 'New', category: 'new', image: 'https://images.unsplash.com/photo-1527015175922-36a306cf0e20?w=400', rating: 4 },
  { title: 'Silk Blouse', price: '₱999', badge: 'Best Seller', category: 'bestseller', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400', rating: 5 },
];

const tabs = ['All', 'New Arrivals', 'Best Seller', 'Top Rated'];

export default function Products() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = allProducts.filter(p => {
    if (activeTab === 'All') return true;
    if (activeTab === 'New Arrivals') return p.category === 'new';
    if (activeTab === 'Best Seller') return p.category === 'bestseller';
    if (activeTab === 'Top Rated') return p.category === 'toprated';
    return true;
  });

  return (
    <section style={styles.section}>
      <p style={styles.eyebrow}>TIMELESS PIECES FOR EVERY OCCASION</p>
      <h2 style={styles.heading}>Our Products</h2>
      <div style={styles.tabs}>
        {tabs.map(tab => (
          <button
            key={tab}
            style={{ ...styles.tab, ...(activeTab === tab ? styles.tabActive : {}) }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <ProductCardList products={filtered} />
    </section>
  );
}

const styles = {
  section: {
    padding: '5rem 4rem',
    backgroundColor: '#ffffff',
  },
  eyebrow: {
    textAlign: 'center',
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
    marginBottom: '2rem',
    fontFamily: '"Playfair Display", Georgia, serif',
    textAlign: 'center',
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.6rem',
    marginBottom: '2.5rem',
    flexWrap: 'wrap',
  },
  tab: {
    padding: '0.55rem 1.4rem',
    border: '1px solid #ddd5c8',
    backgroundColor: '#f5f0eb',
    color: '#6b5744',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '0.8rem',
    borderRadius: '20px',
    transition: 'all 0.2s',
    letterSpacing: '0.04em',
    fontFamily: '"Jost", sans-serif',
  },
  tabActive: {
    backgroundColor: '#1e1409',
    color: '#f5f0eb',
    border: '1px solid #1e1409',
  },
};