import { createSlice } from '@reduxjs/toolkit';
import { setProducts, filterProducts, takeFromStock, returnToStock } from './actions';
import axios from 'axios';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    hiddenProducts: []
  },
  reducers: {
    setProducts,
    filterProducts,
    takeFromStock,
    returnToStock
  }
});

export const getProducts = () => async (dispatch, getState) => {
  const { setProducts } = productsSlice.actions;
  try {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    dispatch(setProducts(response.data.results));
  } catch (e) {
    console.log('get category error', e);
  }
}

export default productsSlice;
