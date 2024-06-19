import React, { useState } from 'react';
import { Teacher } from '@redux/data/data-types';
import Button from '../Custom/CustomButton/Button';

import Avatar from './Avatar';
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
      <Avatar teacher={teacher} />
      <div>
        <Header teacher={teacher} />

        <Description teacher={teacher} />

        <button onClick={toggleExpanded} className="text-mainBlack my-8">
          <span className="custom-underline">{isExpanded ? 'Show Less' : 'Read More'}</span>
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
