import { useState, useEffect } from 'react';
import { Teacher } from '@redux/data/data-types';
import { auth, database } from '../firebase';
import { ref, onValue, set, remove, DatabaseReference, DataSnapshot } from 'firebase/database';

const useFavoriteTeacher = (teacher: Teacher) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const favoriteRef = getFavoriteRef(user.uid, teacher.id);

      const handleSnapshot = (snapshot: DataSnapshot) => {
        setIsFavorite(snapshot.exists());
      };

      const favoriteRefListener = onValue(favoriteRef, handleSnapshot);

      return () => {
        favoriteRefListener();
      };
    }
  }, [teacher.id]);

  const toggleFavorite = () => {
    const user = auth.currentUser;
    if (!user) {
      setIsModalVisible(true);
      return;
    }

    const favoriteRef = getFavoriteRef(user.uid, teacher.id);

    if (isFavorite) {
      remove(favoriteRef)
        .then(() => {
          setIsFavorite(false);
        })
        .catch((error) => {
          console.error('Error when deleting from favorites', error);
        });
    } else {
      set(favoriteRef, teacher)
        .then(() => {
          setIsFavorite(true);
        })
        .catch((error) => {
          console.error('Error when adding to favorites:', error);
        });
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const getFavoriteRef = (userId: string, teacherId: string): DatabaseReference => {
    return ref(database, `users/${userId}/favorites/${teacherId}`);
  };

  return { isFavorite, isModalVisible, toggleFavorite, handleCloseModal };
};

export default useFavoriteTeacher;
