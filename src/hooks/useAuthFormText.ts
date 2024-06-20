import { useMemo } from 'react';

export const useAuthFormText = (isLogin: boolean) => {
  const modalTitle = useMemo(() => (isLogin ? 'Log In' : 'Registration'), [isLogin]);
  const modalDescription = useMemo(
    () =>
      isLogin
        ? 'Welcome back! Please enter your credentials to access your account and continue your search for a teacher.'
        : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information',
    [isLogin]
  );

  return { modalTitle, modalDescription };
};
