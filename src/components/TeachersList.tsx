import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachersList } from '../redux/data/data-actions';
import { selectTeachers, selectLoading, selectError } from '../redux/data/data-selectors';
import { AppDispatch, RootState } from '../redux/store';
import { Teacher, Review } from '../redux/data/data-types';

import Loader from './Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeachersList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const teachers = useSelector((state: RootState) => selectTeachers(state));
  const loading = useSelector((state: RootState) => selectLoading(state));
  const error = useSelector((state: RootState) => selectError(state));

  useEffect(() => {
    dispatch(fetchTeachersList())
      .then(() => {})
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  }, [dispatch]);

  if (loading) {
    return <Loader loading={loading} />;
  }

  if (error) {
    toast.error(`Error: ${error}`);
    return null;
  }

  return (
    <div className="container mx-auto p-4">
      {teachers.map((item: Teacher, index: number) => (
        <div key={index} className="bg-white shadow-md rounded p-4 mb-4">
          <div className="flex items-center">
            <img
              src={item.avatar_url}
              alt={`${item.name} ${item.surname}`}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">
                {item.name} {item.surname}
              </h2>
              <p>Rating: {item.rating}</p>
            </div>
          </div>
          <p>{item.lesson_info}</p>
          <p>Price per hour: ${item.price_per_hour}</p>
          <p>Lessons done: {item.lessons_done}</p>
          <h3 className="text-lg font-bold">Reviews:</h3>
          {item.reviews.map((review: Review, reviewIndex: number) => (
            <div key={reviewIndex} className="pl-4">
              <p>
                <strong>{review.reviewer_name}:</strong> {review.comment} (Rating:{' '}
                {review.reviewer_rating})
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TeachersList;
