import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface IFormInput {
  email: string;
  password: string;
  name?: string;
}

export interface AuthFormProps {
  isLogin?: boolean;
  onClose: () => void;
}

export interface FormHeaderProps {
  title: string;
  description: string;
}

export interface InputFieldProps {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
}

export interface PasswordInputFieldProps {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}
