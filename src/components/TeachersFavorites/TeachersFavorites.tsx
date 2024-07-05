import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database, auth } from '../../firebase';
import { Link } from 'react-router-dom';

import Loader from '@helpers/Loader';
import { Teacher } from '@redux/data/data-types';
import TeacherCard from '@components/TeacherCard/TeacherCard';
import { useTheme } from '@hooks/useTheme';

const TeachersFavorites = () => {
  const { bg: backgroundColor, hover: hoverColor } = useTheme();
  const [favoriteTeacherIds, setFavoriteTeacherIds] = useState<string[]>([]);
  const [favoriteTeachers, setFavoriteTeachers] = useState<{ [id: string]: Teacher }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = () => {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const favoritesRef = ref(database, `users/${userId}/favorites`);

        onValue(
          favoritesRef,
          (snapshot) => {
            const favoritesData = snapshot.val();
            if (favoritesData) {
              setFavoriteTeacherIds(Object.keys(favoritesData));
              setFavoriteTeachers(favoritesData);
            } else {
              setFavoriteTeacherIds([]);
              setFavoriteTeachers({});
            }
            setLoading(false);
          },
          (error) => {
            console.error('Error when getting selected teachers:', error);
            setLoading(false);
          }
        );
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return <Loader loading={loading} />;
  }

  if (favoriteTeacherIds.length === 0) {
    return (
      <div className="flex flex-wrap mt-24 gap-1 justify-center items-center h-full">
        <p className="text-lg text-center text-gray-600">No favorite teachers found.</p>
        <Link
          to="/teachers"
          className="inline-flex text-mainBlack text-lg font-bold py-1 px-4 rounded-xl"
          style={{
            backgroundColor: backgroundColor,
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = backgroundColor)}
        >
          Add some teachers
        </Link>
        <p>to your favorites list.</p>
      </div>
    );
  }

  return (
    <div className="gap-8 bg-pageBg flex flex-col p-24 pad-padding mobile-padding items-center">
      {favoriteTeacherIds.map((teacherId: string) => (
        <TeacherCard key={teacherId} teacher={favoriteTeachers[teacherId]} />
      ))}
    </div>
  );
};

export default TeachersFavorites;
