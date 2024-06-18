import { Teacher } from '@redux/data/data-types';

const Description: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <>
      <h3 className="text-2xl font-medium mt-2">
        {teacher.name} {teacher.surname}
      </h3>

      <div className="mt-8 font-medium flex flex-col gap-2">
        <p>
          <span className="text-borderGrey">Speaks:</span>{' '}
          {teacher.languages.map((language, index) => (
            <span key={index}>
              {language}
              {index !== teacher.languages.length - 1 && ','}{' '}
            </span>
          ))}
        </p>
        <p>
          <span className="text-borderGrey">Lesson Info:</span> {teacher.lesson_info}
        </p>
        <p>
          <span className="text-borderGrey">Conditions:</span> {teacher.conditions}
        </p>
      </div>
    </>
  );
};

export default Description;
