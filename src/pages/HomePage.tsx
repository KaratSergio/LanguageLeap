import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to LanguageLeap</h1>
      <p className="mb-4">Discover the advantages of learning languages with us!</p>
      <Link to="/teachers" className="bg-blue-500 text-white py-2 px-4 rounded">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
