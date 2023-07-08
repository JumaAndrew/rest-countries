import { createSlice, configureStore } from '@reduxjs/toolkit';
import countries from '../assets/data.json';

const initialState = {
  countries,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchCountry(state, action) {
      const countryName = action.payload;

      const searchedCountry = countries.filter(
        (country) => country.name.toLowerCase() === countryName.toLowerCase()
      );

      if (!searchedCountry) return;

      state.countries = searchedCountry;
    },
    restore(state) {
      state.countries = countries;
    },
    filterByRegion(state, action) {
      const region = action.payload;
      console.log(region);

      if (region.toLowerCase() === 'all') {
        state.countries = countries;
      } else {
        const filteredCountries = countries.filter(
          (country) => country.region.toLowerCase() === region.toLowerCase()
        );

        state.countries = filteredCountries;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    countries: countrySlice.reducer,
  },
});

export const countriesActions = countrySlice.actions;
export default store;
