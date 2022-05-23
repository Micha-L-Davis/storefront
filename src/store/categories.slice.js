import { createSlice } from '@reduxjs/toolkit';
import { setCategories } from '../store/actions'
import axios from 'axios';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories
  }
});

export const getCategories = () => async (dispatch, getState) => {
  const { setCategories } = categoriesSlice.actions;
  try {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(setCategories(response.data.results));
  } catch (e) {
    console.log('get category error', e);
  }
}

export default categoriesSlice;
