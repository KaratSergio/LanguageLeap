import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '@services/authServices';
import { User } from 'firebase/auth';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PrivateRouteProps } from './types';
import Spinner from '@helpers/Loader';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, protectedRoute }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (protectedRoute) {
      getCurrentUser()
        .then((currentUser) => {
          setUser(currentUser);
        })
        .catch((error) => {
          console.error('Error getting current user:', error);
          toast.error('An error occurred while loading user data.');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [protectedRoute]);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (protectedRoute && !user) {
    toast.error('You need to be logged in to access this page.');
    return <Navigate to="/" />;
  }

  return (
    <>
      {element}
      <ToastContainer />
    </>
  );
};

export default PrivateRoute;
