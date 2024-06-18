import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database, auth } from '../../firebase';

import Loader from '@helpers/Loader';
import { Teacher } from '@redux/data/data-types';
import TeacherCard from '@components/TeacherCard/TeacherCard';

const TeachersFavorites = () => {
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

  return (
    <div className="container gap-8 bg-pageBg flex flex-col p-24 items-center">
      {favoriteTeacherIds.map((teacherId: string) => (
        <TeacherCard key={teacherId} teacher={favoriteTeachers[teacherId]} />
      ))}
    </div>
  );
};

export default TeachersFavorites;
