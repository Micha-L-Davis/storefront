import axios from 'axios';
import { setProducts } from './actions';

const initialState = {
  products: [],
  hiddenProducts: []
}

function productsReducer(state = initialState, action) {
  let productList = [...state.products, ...state.hiddenProducts]
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload }
    case 'FILTER':
      let showList = productList.filter(product => product.category === action.payload && product.inStock > 0);
      let hideList = productList.filter(product => product.category !== action.payload || product.inStock < 1);

      return { ...state, products: showList, hiddenProducts: hideList };
    case 'VEND':
      let removedInventory = state.products.map(product => {
        if (product.name === action.payload.name) {
          product.inStock = product.inStock - 1;
        }
        return product;
      });
      return { ...state, products: removedInventory };
    case 'RESTOCK':
      let addedInventory = state.products.map(product => {
        if (product.name === action.payload.name) {
          product.inStock = product.inStock + 1;
        }
        return product;
      });
      return { ...state, products: addedInventory };
    default:
      return state;
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');

  dispatch(setProducts(response.data.results));
}

export const patchProducts = (product) => async (dispatch, getState) => {
  try {
    await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product)
    dispatch(getProducts());
  } catch (error) {
    console.log(error);
  }
}

export default productsReducer;
