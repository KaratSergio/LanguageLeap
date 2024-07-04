import { FormHeaderProps } from './types';

const FormHeader: React.FC<FormHeaderProps> = ({ title, description }) => (
  <div className="flex flex-col max-w-text-modal w-full gap-5 mb-10">
    <h2 className="font-medium text-mainBlack text-40px modal-title-mob leading-48px tracking-tighter">{title}</h2>
    <p className="leading-22px text-textColor">{description}</p>
  </div>
);

export default FormHeader;
