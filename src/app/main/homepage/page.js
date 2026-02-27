import React from "react";
import CardList from "./components/cardlist";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import Category from "./category";
import "./page.css"; // <-- New CSS file for styles


export default function Homepage() {
  return (
    <>
      <Header />

      <main className="homepage-container">
        {/* HERO SECTION */}
        <section className="hero-section">
          <h4>SPRING / SUMMER COLLECTION</h4>
          <h1>Huge Fashion Sale</h1>
          <p>Up to 50% Off</p>
          <button className="shop-button">SHOP NOW</button>
        </section>

        {/* CATEGORY SECTION */}
        <Category/>

        {/* PRODUCTS SECTION */}
        <section className="products-section">
          <h2>Our Trendy Products</h2>
          <CardList />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}