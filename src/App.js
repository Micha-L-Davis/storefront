import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import SimpleCart from './components/simple-cart/SimpleCart';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <SimpleCart />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
