import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Teacher } from '@redux/data/data-types';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { fetchTeachersList } from '@redux/data/data-actions';
import { selectTeachers, selectLoading, selectError, selectTotal } from '@redux/data/data-selectors';
import { selectLanguageFilter, selectLevelFilter, selectPriceFilter } from '@redux/filters/filters-selectors';

export const useTeachers = (initialLimit = 4) => {
  const dispatch = useAppDispatch();
  const teachers = useAppSelector(selectTeachers);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const total = useAppSelector(selectTotal);
  const languageFilter = useAppSelector(selectLanguageFilter);
  const levelFilter = useAppSelector(selectLevelFilter);
  const priceFilter = useAppSelector(selectPriceFilter);
  const [itemsToShow, setItemsToShow] = useState(initialLimit);
  const [allTeachers, setAllTeachers] = useState<Teacher[]>([]);

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

  useEffect(() => {
    const fetchAllTeachers = async () => {
      try {
        const result = await dispatch(fetchTeachersList({ startAfter: 0, limit: total })).unwrap();
        setAllTeachers(result.teachers);
      } catch (error) {
        console.error('Error fetching all teachers:', error);
        toast.error(`Error: ${error}`);
      }
    };

    if (languageFilter || levelFilter || priceFilter) {
      fetchAllTeachers();
    }
  }, [dispatch, languageFilter, levelFilter, priceFilter, total]);

  const handleLoadMore = async () => {
    try {
      await dispatch(fetchTeachersList({ startAfter: teachers.length, limit: initialLimit }));
      setItemsToShow((prevItemsToShow) => prevItemsToShow + initialLimit);
    } catch (error) {
      console.error('Error executing request:', error);
      toast.error(`Error: ${error}`);
    }
  };

  return { teachers, loading, error, total, itemsToShow, handleLoadMore, allTeachers };
};
