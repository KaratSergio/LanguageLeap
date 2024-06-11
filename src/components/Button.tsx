import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

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
