import { createSlice, configureStore } from '@reduxjs/toolkit';
import countries from '../assets/data.json';

const initialState = {
  countries,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

const store = configureStore({
  reducer: {
    countries: countrySlice.reducer,
  },
});

export const coutriesActions = countrySlice.actions;
export default store;
