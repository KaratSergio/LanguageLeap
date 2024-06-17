import { RootState } from '../store';

export const selectTeachers = (state: RootState) => state.teachers.teachers;
export const selectLoading = (state: RootState) => state.teachers.loading;
export const selectError = (state: RootState) => state.teachers.error;
export const selectTotal = (state: RootState) => state.teachers.total;
