import { ProductCard, BlogCard, CollectionCard } from '../../../../components/ui/card';

export function ProductCardList({ products = [] }) {
  return (
    <div className="product-card-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}

export function CollectionCardList({ collections = [] }) {
  return (
    <div className="collection-card-list">
      {collections.map((collection, index) => (
        <CollectionCard key={index} {...collection} />
      ))}
    </div>
  );
}

export function BlogCardList({ posts = [] }) {
  return (
    <div className="blog-card-list">
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
}