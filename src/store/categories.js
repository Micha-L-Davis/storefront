import axios from 'axios';
import { setCategories } from './actions';

const initialState = {
  categories: []
}

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }
    default:
      return state;
  }
}

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');

  dispatch(setCategories(response.data.results));
}

export default categoriesReducer;
