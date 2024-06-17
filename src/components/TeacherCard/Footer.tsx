import { Teacher } from '@redux/data/data-types';

const Footer: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <div className="flex gap-2">
      {teacher.levels.map((level: string, index: number) => (
        <div className="border py-2 px-3 rounded-35 border-borderColor" key={index}>
          <p className="font-medium text-sm">#{level}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
