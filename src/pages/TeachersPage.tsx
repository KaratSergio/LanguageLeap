import TeachersList from '@components/TeachersList/TeachersList';

const Teachers: React.FC = () => {
  return (
    <section className="mx-auto ">
      <h2 className="invisible text-sm">Teachers</h2>
      <TeachersList />
    </section>
  );
};

export default Teachers;
