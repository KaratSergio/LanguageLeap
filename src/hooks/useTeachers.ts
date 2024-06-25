import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { fetchTeachersList } from '@redux/data/data-actions';
import { selectTeachers, selectLoading, selectError, selectTotal } from '@redux/data/data-selectors';
import { toast } from 'react-toastify';

export const useTeachers = (initialLimit = 4) => {
  const dispatch = useAppDispatch();
  const teachers = useAppSelector(selectTeachers);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const total = useAppSelector(selectTotal);
  const [itemsToShow, setItemsToShow] = useState(initialLimit);

  useEffect(() => {
    const fetchInitialTeachers = async () => {
      try {
        await dispatch(fetchTeachersList({ startAfter: 0, limit: initialLimit }));
      } catch (error) {
        console.error('Error executing request:', error);
        toast.error(`Error: ${error}`);
      }
    };

    if (!teachers.length) {
      fetchInitialTeachers();
    }
  }, [dispatch, teachers.length, initialLimit]);

  const handleLoadMore = async () => {
    try {
      await dispatch(fetchTeachersList({ startAfter: teachers.length, limit: initialLimit }));
      setItemsToShow((prevItemsToShow) => prevItemsToShow + initialLimit);
    } catch (error) {
      console.error('Error executing request:', error);
      toast.error(`Error: ${error}`);
    }
  };

  return { teachers, loading, error, total, itemsToShow, handleLoadMore };
};
