import { Teacher } from '@redux/data/data-types';

const Avatar: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <div className="flex items-start mr-12">
      <div className="relative flex items-center justify-center w-[120px] h-[120px] border rounded-full border-yellowLight">
        <img
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
          className="w-24 h-24 rounded-full"
        />

        <div className="absolute top-5 right-5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Avatar;
