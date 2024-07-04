import { Teacher } from '@redux/data/data-types';
import { useTheme } from '@hooks/useTheme';

const Avatar: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  const { hover: hoverColor } = useTheme();

  return (
    <div className="flex items-start mr-12">
      <div
        className="relative avatar-mob-box flex items-center justify-center w-[120px] h-[120px] border rounded-full"
        style={{ borderColor: hoverColor, transition: 'background-color 0.3s' }}
      >
        <img
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
          className="avatar-mob-img w-24 h-24 rounded-full"
        />
        <div className="absolute dot-mob top-5 right-5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Avatar;
