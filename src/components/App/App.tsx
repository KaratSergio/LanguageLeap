import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '@routes/PrivateRoute';
import Navbar from '../Navbar/Navbar';
import Loader from '@helpers/Loader';

const Home = lazy(() => import('@pages/HomePage'));
const Teachers = lazy(() => import('@pages/TeachersPage'));
const Favorites = lazy(() => import('@pages/FavoritesPage'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader loading={true} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/favorites" element={<PrivateRoute element={<Favorites />} protectedRoute={true} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
