import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import SimpleCart from './components/simple-cart/SimpleCart';
import { getProducts } from './store/products';
import { getCategories } from './store/categories';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [])

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
