import React, { useState } from 'react';
import { Teacher } from '@redux/data/data-types';
import Button from '../Custom/CustomButton/Button';

import Header from './Header';
import Description from './Description';
import Reviews from './Reviews';
import Footer from './Footer';

const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white w-full max-w-1184 flex rounded-3xl p-6">
      <div className="flex items-start mr-12">
        <div className="flex items-center justify-center w-[120px] h-[120px] border rounded-full border-yellowLight">
          <img
            src={teacher.avatar_url}
            alt={`${teacher.name} ${teacher.surname}`}
            className="w-24 h-24 rounded-full"
          />
        </div>
      </div>
      <div>
        <Header teacher={teacher} />

        <Description teacher={teacher} />

        <button onClick={toggleExpanded} className="text-mainBlack my-8">
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>

        {isExpanded && (
          <div>
            <p className="mb-8">{teacher.experience}</p>
            <Reviews teacher={teacher} />
          </div>
        )}

        <Footer teacher={teacher} />

        {isExpanded && (
          <Button
            type="button"
            onClick={toggleExpanded}
            className="text-mainBlack py-4 max-w-232 px-12 mx-auto mt-8"
          >
            Book trial lesson
          </Button>
        )}
      </div>
    </div>
  );
};

export default TeacherCard;
