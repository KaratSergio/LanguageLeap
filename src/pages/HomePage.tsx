import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container w-1288 mx-auto mt-5 flex">
      <div className="w-720 mr-6 rounded-30 pl-16 py-98 bg-pinkBg ">
        <h1 className="text-4xl font-bold mb-4 w-548">
          Unlock your potential with the best language tutors
        </h1>
        <p className=" mt-8 mb-16 w-471">
          Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language
          proficiency to new heights by connecting with highly qualified and experienced tutors.
        </p>
        <Link
          to="/teachers"
          className="inline-flex  bg-btnColorY hover:bg-btnColorYh text-mainBlack py-4 px-88 rounded-xl"
        >
          Get Started
        </Link>
      </div>
      <div className="w-568 rounded-30 bg-yellowLight"></div>
    </div>
  );
};

export default Home;
