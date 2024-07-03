import React from 'react';
import { Link } from 'react-router-dom';
import firstImage from '@assets/img/face.png';
import { useTheme } from '@hooks/useTheme';

const HomeContent: React.FC = () => {
  const { bg: backgroundColor, hover: hoverColor, image: backgroundImage } = useTheme();

  return (
    <div className="w-full max-w-1312 mx-auto flex pad-home">
      <div className="w-full max-w-720 mr-6 rounded-30 px-16 py-98 pad-box-w bg-pinkBg">
        <h1 className="text-5xl font-medium tracking-m2 leading-56 mb-4 max-w-548 w-full">
          Unlock your potential with the best{' '}
          <span className="relative inline-block">
            <span className="absolute inset-0 rounded-lg top-3 h-9 z-10" style={{ backgroundColor: hoverColor }}></span>
            <span className="font-normal italic rounded-lg px-1 relative z-20">language</span>
          </span>
        </h1>
        <p className="mt-8 mb-16 w-full max-w-471">
          Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new
          heights by connecting with highly qualified and experienced tutors.
        </p>
        <Link
          to="/teachers"
          className="inline-flex text-mainBlack text-lg font-bold py-4 px-88 rounded-xl"
          style={{ backgroundColor, transition: 'background-color 0.3s' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = backgroundColor)}
        >
          Get Started
        </Link>
      </div>
      <div
        className="max-w-568 pad-box-w w-full rounded-30"
        style={{
          backgroundColor: hoverColor,
          transition: 'background-color 0.3s',
          backgroundImage: `url(${backgroundImage}), url(${firstImage})`,
          backgroundPosition: 'bottom center, center calc(100% - 110px)',
          backgroundRepeat: 'no-repeat',
          minHeight: '530px',
        }}
      ></div>
    </div>
  );
};

export default HomeContent;
