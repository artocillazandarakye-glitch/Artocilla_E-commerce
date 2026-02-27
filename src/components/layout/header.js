import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Artocilla</div>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="icons">
        {/* Search */}
        <span title="Search">🔍</span>

        {/* User Account */}
        <span title="Account">👤</span>

        {/* Shopping Cart */}
        <span className="cart-icon" title="Cart">
          🛒
          <span className="cart-count">2</span>
        </span>
      </div>
    </header>
  );
}