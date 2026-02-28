import React from 'react';
import './card.css';

export function ProductCard({ title, price, badge, image, rating = 4 }) {
  return (
    <div className="product-card">
      <div className="product-card__img-wrapper">
        <img src={image} alt={title} className="product-card__img" />
        {badge && <span className="product-card__badge">{badge}</span>}
        <button className="product-card__wishlist">♡</button>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__stars">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
        <div className="product-card__footer">
          <span className="product-card__price">{price}</span>
          <button className="product-card__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export function CollectionCard({ title, description, image, size = 'small' }) {
  return (
    <div className={`collection-card collection-card--${size}`}>
      <img src={image} alt={title} className="collection-card__img" />
      <div className="collection-card__overlay">
        <h3 className="collection-card__title">{title}</h3>
        <p className="collection-card__desc">{description}</p>
        {/* eslint-disable-next-line */}
        <button className="collection-card__link">Shop Now →</button>
      </div>
    </div>
  );
}

export function BlogCard({ title, date, excerpt, image, category }) {
  return (
    <div className="blog-card">
      <div className="blog-card__img-wrapper">
        <img src={image} alt={title} className="blog-card__img" />
        <span className="blog-card__category">{category}</span>
      </div>
      <div className="blog-card__body">
        <p className="blog-card__date">{date}</p>
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__excerpt">{excerpt}</p>
        {/* eslint-disable-next-line */}
        <button className="blog-card__link">Read More →</button>
      </div>
    </div>
  );
}