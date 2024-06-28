import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get } from 'firebase/database';
import { database } from '../../firebase';
import { Teacher } from './data-types';

export const fetchTeachersList = createAsyncThunk<
  { teachers: Teacher[]; total: number },
  { startAfter: number; limit: number }
>('teachers/fetchTeachers', async ({ startAfter, limit }) => {
  const dbRef = ref(database, 'teachers');
  const snapshot = await get(dbRef);

  if (snapshot.exists()) {
    const data = snapshot.val();
    const teachers = Object.values(data).slice(startAfter, startAfter + limit) as Teacher[];
    const total = Object.keys(data).length;
    return { teachers, total };
  } else {
    throw new Error('No data');
  }
});
