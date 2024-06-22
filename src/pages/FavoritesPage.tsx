import React from 'react';
import TeachersFavorites from '@components/TeachersFavorites/TeachersFavorites';

const Favorite: React.FC = () => {
  return (
    <section className="mx-auto">
      <h2 className="invisible text-sm">Favorites</h2>
      <TeachersFavorites />
    </section>
  );
};

export default Favorite;
