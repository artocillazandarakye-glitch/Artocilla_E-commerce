import React from 'react';
import { CollectionCardList } from '../app/main/homepage/components/cardlist';

const collectionsData = [
  {
    title: "Women's Collection",
    description: "Elegant styles for every occasion",
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    size: 'large',
  },
  {
    title: "Men's Collection",
    description: "Sharp and refined essentials",
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80',
    size: 'small',
  },
  {
    title: "Kids Collection",
    description: "Playful and comfortable fits",
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&q=80',
    size: 'small',
  },
  {
    title: "Gift Cards",
    description: "The perfect gift for everyone",
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    size: 'small',
  },
  {
    title: "Summer Sale",
    description: "Up to 50% off selected styles",
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
    size: 'small',
  },
];

export default function Collections() {
  return (
    <section style={styles.section}>
      <p style={styles.eyebrow}>CURATED FOR YOU</p>
      <h2 style={styles.heading}>Our Collections</h2>
      <CollectionCardList collections={collectionsData} />
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
};