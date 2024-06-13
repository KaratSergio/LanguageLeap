import React from 'react';
import { Navigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { login, register } from '@services/authServices';
import { loginSchema, registerSchema } from '@utils/validationSchemas';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IFormInput, AuthFormProps } from './types';

import Button from '../Custom/CustomButton/Button';

const AuthForm: React.FC<AuthFormProps> = ({ isLogin = false, onClose }) => {
  const schema = isLogin ? loginSchema : registerSchema;

  const {
    register: formRegister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      if (isLogin) {
        await login(data.email, data.password);
        reset();
        onClose();
      } else {
        await register(data.email, data.password, data.name);
        reset();
        onClose();
        toast.success('Registration successful');
        return <Navigate to="/private-page" />;
      }
    } catch (error) {
      toast.error('Invalid email or password');
    }
  };

  const modalTitle = isLogin ? 'Log In' : 'Registration';
  const modalDescription = isLogin
    ? 'Welcome back! Please enter your credentials to access your account and continue your search for a teacher.'
    : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information';

  return (
    <>
      <ToastContainer position="top-center" />
      <form onSubmit={handleSubmit(onSubmit)} className="p-16 bg-white shadow-md rounded-30">
        <div className="flex flex-col max-w-text-modal w-full gap-5 mb-10">
          <h2 className="font-medium text-mainBlack text-40px leading-48px tracking-tighter">
            {modalTitle}
          </h2>
          <p className="leading-22px text-textColor">{modalDescription}</p>
        </div>
        {!isLogin && (
          <div>
            <input
              {...formRegister('name')}
              placeholder="Name"
              className="border border-borderColor py-4 px-18 mb-18 rounded-xl w-full placeholder-mainBlack leading-22px"
            />
            {errors.name && <p className="text-red-500">{errors.name?.message}</p>}
          </div>
        )}
        <div>
          <input
            {...formRegister('email')}
            placeholder="Email"
            className="border border-borderColor py-4 px-18 mb-18 rounded-xl w-full placeholder-mainBlack leading-22px"
          />
          {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
        </div>
        <div>
          <input
            type="password"
            {...formRegister('password')}
            placeholder="Password"
            className="border border-borderColor py-4 px-18 mb-18 rounded-xl w-full placeholder-mainBlack leading-22px"
          />
          {errors.password && <p className="text-red-500">{errors.password?.message}</p>}
        </div>
        <Button className="p-4 mt-10" type="submit">
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </form>
    </>
  );
};

export default AuthForm;
