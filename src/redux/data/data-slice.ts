import { createSlice } from '@reduxjs/toolkit';
import { TeachersState, FulfilledAction } from './data-types';
import { fetchTeachersList } from './data-actions';

const initialState: TeachersState = {
  teachers: [],
  loading: false,
  error: null,
  total: 0,
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    resetTeachers: (state) => {
      state.teachers = [];
      state.loading = false;
      state.error = null;
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachersList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeachersList.fulfilled, (state, action: FulfilledAction) => {
        const { startAfter } = action.meta.arg;

        if (startAfter === 0) {
          state.teachers = action.payload.teachers;
        } else {
          state.teachers = [...state.teachers, ...action.payload.teachers];
        }
        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchTeachersList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load teachers';
      });
  },
});

export const { resetTeachers } = teachersSlice.actions;
export default teachersSlice.reducer;
