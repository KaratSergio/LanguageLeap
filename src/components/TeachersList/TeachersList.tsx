import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Teacher } from '@redux/data/data-types';
import { useTeachers } from '@src/hooks/useTeachers';
import { fetchTeachersList } from '@redux/data/data-actions';
import { useAppDispatch, useAppSelector } from '@redux/store';

import Loader from '@helpers/Loader';
import Button from '../Custom/Button';
import Filter from '../Filters/Filters';
import TeacherCard from '../TeacherCard/TeacherCard';

import { selectLanguageFilter, selectLevelFilter, selectPriceFilter } from '@redux/filters/filters-selectors';

const TeachersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { teachers, loading, error, total, itemsToShow, handleLoadMore, resetItemsToShow, setItemsToShow } =
    useTeachers(4);
  const languageFilter = useAppSelector(selectLanguageFilter);
  const levelFilter = useAppSelector(selectLevelFilter);
  const priceFilter = useAppSelector(selectPriceFilter);
  const [allTeachers, setAllTeachers] = useState<Teacher[]>([]);
  const [filtersApplied, setFiltersApplied] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchTeachersList({ startAfter: 0, limit: 4 }))
      .unwrap()
      .then((data) => setAllTeachers(data.teachers));
  }, [dispatch]);

  useEffect(() => {
    const fetchAllTeachers = async () => {
      try {
        const result = await dispatch(fetchTeachersList({ startAfter: 0, limit: total })).unwrap();
        setAllTeachers(result.teachers);
      } catch (error) {
        console.error('Error loading all teachers:', error);
        toast.error(`Error: ${error}`);
      }
    };

    if (languageFilter || levelFilter || priceFilter.min !== null || priceFilter.max !== null) {
      setFiltersApplied(true);
      fetchAllTeachers();
    } else {
      setFiltersApplied(false);
    }
  }, [dispatch, languageFilter, levelFilter, priceFilter, total]);

  useEffect(() => {
    if (!filtersApplied) {
      resetItemsToShow();
    }
  }, [filtersApplied, resetItemsToShow]);

  if (loading && !teachers.length) {
    return <Loader loading={loading} />;
  }

  if (error && !teachers.length) {
    toast.error(`Error: ${error}`);
    return null;
  }

  const filteredTeachers = allTeachers.filter((teacher) => {
    let matches = true;
    if (languageFilter && !teacher.languages.includes(languageFilter)) {
      matches = false;
    }
    if (levelFilter && !teacher.levels.includes(levelFilter)) {
      matches = false;
    }
    if (priceFilter.min !== null && teacher.price_per_hour < priceFilter.min) {
      matches = false;
    }
    if (priceFilter.max !== null && teacher.price_per_hour > priceFilter.max) {
      matches = false;
    }
    return matches;
  });

  const displayTeachers = filtersApplied ? filteredTeachers.slice(0, itemsToShow) : teachers.slice(0, itemsToShow);

  return (
    <div className="bg-pageBg flex flex-col pad-padding mobile-padding p-24 max-w-1376 w-full items-center mx-auto gap-8">
      <div className="w-full items-start">
        <Filter />
      </div>
      {displayTeachers.length === 0 ? (
        <p className="mt-10 font-semibold text-2xl">No teachers match your filters.</p>
      ) : (
        displayTeachers.map((teacher) => <TeacherCard key={teacher.id} teacher={teacher} />)
      )}
      {filtersApplied && itemsToShow < filteredTeachers.length && (
        <Button
          type="button"
          onClick={() => setItemsToShow((prevItemsToShow) => prevItemsToShow + 4)}
          className="bg-btnColorY text-mainColor mx-auto py-4 px-12 max-w-[183px] rounded-xl"
        >
          Load more
        </Button>
      )}
      {!filtersApplied && itemsToShow < total && (
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
