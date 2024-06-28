import { useEffect } from 'react';
import { toast } from 'react-toastify';
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
  const { teachers, loading, error, total, itemsToShow, handleLoadMore } = useTeachers(4);
  const languageFilter = useAppSelector(selectLanguageFilter);
  const levelFilter = useAppSelector(selectLevelFilter);
  const priceFilter = useAppSelector(selectPriceFilter);

  useEffect(() => {
    dispatch(fetchTeachersList({ startAfter: 0, limit: 4 }));
  }, [dispatch]);

  if (loading && !teachers.length) {
    return <Loader loading={loading} />;
  }

  if (error && !teachers.length) {
    toast.error(`Error: ${error}`);
    return null;
  }

  const filteredTeachers = teachers.filter((teacher) => {
    let matches = true;
    if (languageFilter && !teacher.languages.includes(languageFilter)) {
      matches = false;
    }
    if (levelFilter && !teacher.levels.includes(levelFilter)) {
      matches = false;
    }
    if (priceFilter && teacher.price_per_hour !== priceFilter) {
      matches = false;
    }
    return matches;
  });

  return (
    <div className="bg-pageBg flex flex-col pad-padding mobile-padding p-24 items-center mx-auto gap-8">
      <div className="w-full items-start">
        <Filter />
      </div>
      {filteredTeachers.slice(0, itemsToShow).map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
      {itemsToShow < total && (
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
