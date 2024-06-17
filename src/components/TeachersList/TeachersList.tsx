import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { fetchTeachersList } from '@redux/data/data-actions';
import { Teacher } from '@redux/data/data-types';
import { selectTeachers, selectLoading, selectError, selectTotal } from '@redux/data/data-selectors';

import Loader from '@helpers/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TeacherCard from '../TeacherCard/TeacherCard';

const TeachersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const teachers = useAppSelector(selectTeachers);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const total = useAppSelector(selectTotal);
  const [startAfter, setStartAfter] = useState(0);
  const [initialFetchDone, setInitialFetchDone] = useState(false);

  const limit = 4;

  useEffect(() => {
    const fetchInitialTeachers = async () => {
      try {
        await dispatch(fetchTeachersList({ startAfter: 0, limit }));
        setInitialFetchDone(true);
      } catch (error) {
        console.error('Error executing request:', error);
        toast.error(`Error: ${error}`);
      }
    };

    if (!initialFetchDone) {
      fetchInitialTeachers();
    }

    return () => {
      setStartAfter(0);
    };
  }, [dispatch, initialFetchDone]);

  const handleLoadMore = async () => {
    const newStartAfter = startAfter + limit;
    setStartAfter(newStartAfter);
    try {
      await dispatch(fetchTeachersList({ startAfter: newStartAfter, limit }));
    } catch (error) {
      console.error('Error executing request:', error);
      toast.error(`Error: ${error}`);
    }
  };

  if (loading && !initialFetchDone) {
    return <Loader loading={loading} />;
  }

  if (error && !initialFetchDone) {
    toast.error(`Error: ${error}`);
    return null;
  }

  return (
    <div className="container flex flex-col justify-center items-center mx-auto gap-8">
      {teachers.map((teacher: Teacher, index: number) => (
        <TeacherCard key={index} teacher={teacher} />
      ))}
      {teachers.length < total && (
        <button onClick={handleLoadMore} className="bg-blue-500 text-white py-2 px-4 rounded">
          Load more
        </button>
      )}
    </div>
  );
};

export default TeachersList;
