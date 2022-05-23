import { combineReducers } from 'redux';
import cartContentsSlice from './cartContents.slice'
import categoriesSlice from './categories.slice';
import drawerSlice from './drawer.slice'
import productsSlice from './products.slice';
import { configureStore } from '@reduxjs/toolkit';
import thunk from './middleware/thunk'

let reducer = combineReducers({
  cartContents: cartContentsSlice.reducer,
  categories: categoriesSlice.reducer,
  drawer: drawerSlice.reducer,
  products: productsSlice.reducer,
});

export default function store() {
  return configureStore({
    reducer,
    middleware: [thunk]
  });
}
