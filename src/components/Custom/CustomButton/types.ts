export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
