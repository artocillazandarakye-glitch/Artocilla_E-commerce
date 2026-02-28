import Navbar from '../../../components/navbar';
import Hero from '../../../components/hero';
import Collections from '../../../components/collections';
import Categories from '../../../components/categories';
import Products from '../../../components/products';
import Deal from '../../../components/deal';
import Footer from '../../../components/footer';
import '../../global.css';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Collections />
      <Products />
      <Deal />
      <Footer />
    </>
  );
}