import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Home from '../pages/HomePage';
import Teachers from '../pages/TeachersPage';
import Favorites from '../pages/FavoritesPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
