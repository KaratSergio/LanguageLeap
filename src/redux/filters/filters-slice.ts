import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersState } from './filters-types';

const initialState: FiltersState = {
  language: null,
  level: null,
  price: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLanguageFilter: (state, action: PayloadAction<string | null>) => {
      state.language = action.payload;
    },
    setLevelFilter: (state, action: PayloadAction<string | null>) => {
      state.level = action.payload;
    },
    setPriceFilter: (state, action: PayloadAction<number | null>) => {
      state.price = action.payload;
    },
    resetFilters: (state) => {
      state.language = null;
      state.level = null;
      state.price = null;
    },
  },
});

export const { setLanguageFilter, setLevelFilter, setPriceFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
