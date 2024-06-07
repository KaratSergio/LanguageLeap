import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">LanguageLeap</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/teachers" className="text-white">
            Teachers
          </Link>
          <Link to="/favorites" className="text-white">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
