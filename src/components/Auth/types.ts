export interface IFormInput {
  email: string;
  password: string;
  name?: string;
}

export interface AuthFormProps {
  isLogin?: boolean;
  onClose: () => void;
}
