import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeachersState, Teacher } from './data-types';
import { fetchTeachersList } from './data-actions';

const initialState: TeachersState = {
  teachers: [],
  loading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachersList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachersList.fulfilled, (state, action: PayloadAction<Teacher[]>) => {
        state.teachers = action.payload;
        state.loading = false;
      })
      .addCase(fetchTeachersList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch teachers';
      });
  },
});

export default teachersSlice.reducer;
