import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { fetchTeachersList } from '@redux/data/data-actions';
import { Teacher } from '@redux/data/data-types';
import { selectTeachers, selectLoading, selectError, selectTotal } from '@redux/data/data-selectors';

import Loader from '@helpers/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../Custom/CustomButton/Button';
import TeacherCard from '../TeacherCard/TeacherCard';

const TeachersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const teachers = useAppSelector(selectTeachers);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const total = useAppSelector(selectTotal);
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
  }, [dispatch, teachers.length, initialFetchDone]);

  const handleLoadMore = async () => {
    try {
      await dispatch(fetchTeachersList({ startAfter: teachers.length, limit }));
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
    <div className=" bg-pageBg flex flex-col pad-padding mobile-padding p-24 items-center mx-auto gap-8">
      {teachers.map((teacher: Teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
      {teachers.length < total && (
        <Button
          type="button"
          onClick={handleLoadMore}
          className="bg-btnColorY text-mainColor mx-auto py-4 px-12 max-w-[183px] rounded-xl"
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default TeachersList;
