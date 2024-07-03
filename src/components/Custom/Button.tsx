import { useTheme } from '@hooks/useTheme';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ type, className, onClick, children, style }) => {
  const { bg: backgroundColor, hover: hoverColor } = useTheme();

  return (
    <button
      type={type}
      className={`font-bold text-lg w-full text-titleColor rounded-xl ${className}`}
      style={{
        backgroundColor,
        transition: 'background-color 0.3s',
        ...style,
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = backgroundColor)}
    >
      {children}
    </button>
  );
};

export default Button;
