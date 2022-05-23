import { Box } from "@mui/material";
import Product from './product/Product'
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom"
import ProductDetails from "./product/productDetails";
import ShoppingCart from "../simple-cart/ShoppingCart";
import productsSlice from "../../store/products.slice";
//import { patchProducts } from "../../store/products";
import { useState } from "react";
import cartContentsSlice from "../../store/cartContents.slice";

const { takeFromStock } = productsSlice.actions;
const { addToCart } = cartContentsSlice.actions;

function Products() {
  let { products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [detailView, setDetailView] = useState({ _id: 0 });

  function handleBuy(product) {
    if (product.inStock > 0) {
      let addAction = addToCart(product);
      dispatch(addAction);

      let takeAction = takeFromStock(product);
      dispatch(takeAction);

      // let newProduct = { ...product }
      // newProduct.inStock = product.inStock - 1
      // dispatch(patchProducts(newProduct));
    }
  }

  function handleDetail(product) {
    setDetailView(product);
  }

  return (
    <Routes>
      <Route exact path="/" element={
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}>
          {
            products.map((product, index) => {
              return <Product product={product} key={`${product._id}-${index}`} handleBuy={handleBuy} handleDetail={handleDetail} />
            })
          }
        </Box>
      } />
      <Route path={`/products/${detailView._id}`} element={
        <ProductDetails product={detailView} handleBuy={handleBuy} />
      } />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
  );
}


export default Products;
