import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Home from '../pages/HomePage';
import Teachers from '../pages/TeachersPage';
import Favorites from '../pages/FavoritesPage';
import PrivateRoute from '../components/PrivateRoute';

import 'tailwindcss/tailwind.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route
          path="/favorites"
          element={<PrivateRoute element={<Favorites />} protectedRoute={true} />}
        />
      </Routes>
    </>
  );
}

export default App;
