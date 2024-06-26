import Loader from '@helpers/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTeachers } from '@hooks/useTeachers';
import Button from '../Custom/Button';
import TeacherCard from '../TeacherCard/TeacherCard';

const TeachersList: React.FC = () => {
  const { teachers, loading, error, total, itemsToShow, handleLoadMore } = useTeachers(4);

  if (loading && !teachers.length) {
    return <Loader loading={loading} />;
  }

  if (error && !teachers.length) {
    toast.error(`Error: ${error}`);
    return null;
  }

  return (
    <div className="bg-pageBg flex flex-col pad-padding mobile-padding p-24 items-center mx-auto gap-8">
      {teachers.slice(0, itemsToShow).map((teacher) => (
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
