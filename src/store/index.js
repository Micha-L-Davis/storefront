import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import categoriesReducer from './categories';
import productsReducer from './products';
import activeCategoryReducer from './activeCategory';
import navDrawerReducer from './navDrawer'

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  activeCategory: activeCategoryReducer,
  navDrawer: navDrawerReducer
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}
