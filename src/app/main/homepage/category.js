import "./category.css";

export default function Category() {
  return (
    <section className="categories">
      <div className="category-card women">
        <h2>WOMEN COLLECTION</h2>
      </div>

      <div className="category-card men">
        <h2>MEN COLLECTION</h2>
      </div>

      <div className="category-card kids">
        <h2>KIDS COLLECTION</h2>
      </div>

      <div className="category-card gift">
        <h2>GIFT CARDS</h2>
      </div>
    </section>
  );
}