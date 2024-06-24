import { Teacher } from '@redux/data/data-types';

const Description: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <>
      <div className="mt-8 text-mob-size font-medium flex flex-col gap-2">
        <p>
          <span className="text-borderGrey">Speaks:</span>{' '}
          {teacher.languages.map((language, index) => (
            <span className="custom-underline" key={index}>
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
