import { createSlice } from '@reduxjs/toolkit';
import { addToCart, removeFromCart } from './actions';

const cartContentsSlice = createSlice({
  name: 'cartContents',
  initialState: {
    cartContents: [],
  },
  reducers: {
    addToCart,
    removeFromCart
  }
});

export default cartContentsSlice
