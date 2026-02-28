import React from 'react';
import { BlogCardList } from '../app/main/homepage/components/cardlist';

const blogPosts = [
  {
    title: '5 Ways to Style a Linen Dress This Summer',
    date: 'February 20, 2026',
    excerpt: 'Linen dresses are the ultimate summer staple. Here are five effortless ways to wear them from morning to midnight.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600',
    category: 'Style Tips',
  },
  {
    title: 'The Art of Building a Capsule Wardrobe',
    date: 'February 15, 2026',
    excerpt: 'Less is more. Discover how a carefully curated selection of timeless pieces can transform your daily dressing routine.',
    image: 'https://images.unsplash.com/photo-1558171813-6bfabea00f0e?w=600',
    category: 'Fashion',
  },
  {
    title: 'Sustainable Fashion: Why It Matters in 2026',
    date: 'February 10, 2026',
    excerpt: 'Fast fashion is out. We explore how conscious choices in clothing can make a real difference for the planet.',
    image: 'https://images.unsplash.com/photo-1532453288672-3a17ac73b2e0?w=600',
    category: 'Sustainability',
  },
];

export default function Blog() {
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.heading}>From Our Blog</h2>
        <a href="#" style={styles.viewAll}>View All Posts →</a>
      </div>
      <BlogCardList posts={blogPosts} />
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 3rem',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  heading: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#2c1a0e',
    fontFamily: 'Georgia, serif',
  },
  viewAll: {
    color: '#c9956c',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
};