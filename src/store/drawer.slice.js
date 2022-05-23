import { createSlice } from '@reduxjs/toolkit';
import { slideDrawer } from './actions';

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    rightIsOpen: false,
    leftIsOpen: false
  },
  reducers: {
    slideDrawer
  }
});

export default drawerSlice;
