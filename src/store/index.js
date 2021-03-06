import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import activeCategoryReducer from './activeCategory';
import cartContentsReducer from './cartContents'
import categoriesReducer from './categories';
import drawerReducer from './drawer'
import productsReducer from './products';

import thunk from '../store/middleware/thunk';

let reducers = combineReducers({
  activeCategory: activeCategoryReducer,
  cartContents: cartContentsReducer,
  categories: categoriesReducer,
  drawer: drawerReducer,
  products: productsReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
