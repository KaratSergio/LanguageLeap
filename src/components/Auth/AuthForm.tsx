import { Navigate } from 'react-router-dom';
import { IFormInput, AuthFormProps } from './types';
import { useForm, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { login, register } from '@services/authServices';
import { loginSchema, registerSchema } from '@utils/validationSchemas';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthFormText } from '@hooks/useAuthFormText';

import FormHeader from './FormHeader';
import InputField from './InputField';
import PasswordInputField from './PasswordInputField';
import Button from '../Custom/CustomButton/Button';

const AuthForm: React.FC<AuthFormProps> = ({ isLogin = false, onClose }) => {
  const schema = isLogin ? loginSchema : registerSchema;
  const { modalTitle, modalDescription } = useAuthFormText(isLogin);

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

  return (
    <>
      <ToastContainer position="top-center" />
      <form onSubmit={handleSubmit(onSubmit)} className="p-16 bg-white shadow-md rounded-30">
        <FormHeader title={modalTitle} description={modalDescription} />
        {!isLogin && (
          <InputField placeholder="Name" register={formRegister('name')} error={errors.name} />
        )}
        <InputField placeholder="Email" register={formRegister('email')} error={errors.email} />
        <PasswordInputField
          placeholder="Password"
          register={formRegister('password')}
          error={errors.password}
        />
        <Button className="p-4 mt-10" type="submit">
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </form>
    </>
  );
};

export default AuthForm;
