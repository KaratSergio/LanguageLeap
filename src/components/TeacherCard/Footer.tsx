import { Teacher } from '@redux/data/data-types';
import { useAppSelector } from '@redux/store';
import { selectLevelFilter } from '@redux/filters/filters-selectors';

const Footer: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  const selectedLevel = useAppSelector(selectLevelFilter);

  return (
    <div className="flex flex-wrap gap-2">
      {teacher.levels.map((level: string, index: number) => (
        <div
          className={`border py-2 px-3 rounded-35 border-borderColor ${
            level === selectedLevel ? 'bg-btnColorY border-btnColorY' : ''
          }`}
          key={index}
        >
          <p className="font-medium text-sm">#{level}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
