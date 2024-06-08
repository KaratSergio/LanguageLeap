import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get } from 'firebase/database';
import { database } from '../../firebase';
import { Teacher } from './data-types';

export const fetchTeachersList = createAsyncThunk<Teacher[]>('teachers/fetchTeachers', async () => {
  const dbRef = ref(database);
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const data = snapshot.val();
    return Object.values(data) as Teacher[];
  } else {
    throw new Error('No data available');
  }
});
