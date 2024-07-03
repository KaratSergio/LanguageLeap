import { Teacher } from '@redux/data/data-types';
import { useAppSelector } from '@redux/store';
import { selectLevelFilter } from '@redux/filters/filters-selectors';
import { useTheme } from '@hooks/useTheme';

const Footer: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  const { bg: backgroundColor } = useTheme();
  const selectedLevel = useAppSelector(selectLevelFilter);

  return (
    <div className="flex flex-wrap gap-2">
      {teacher.levels.map((level: string, index: number) => (
        <div
          style={{
            padding: '8px 12px',
            borderRadius: '35px',
            border: '1px solid rgba(18, 20, 23, 0.2)',
            backgroundColor: level === selectedLevel ? backgroundColor : 'transparent',
            borderColor: level === selectedLevel ? backgroundColor : 'rgba(18, 20, 23, 0.2)',
            transition: 'background-color 0.9s',
          }}
          key={index}
        >
          <p className="font-medium text-sm">#{level}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
