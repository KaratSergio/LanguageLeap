import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ type, className, onClick, children }) => {
  return (
    <button
      type={type}
      className={`font-bold text-lg w-full bg-btnColorY hover:bg-btnColorYh text-titleColor  rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
