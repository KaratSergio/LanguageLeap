import { Teacher } from '@redux/data/data-types';
import { ModalProps } from '../Custom/types';

import Modal from '../Custom/Modal';
import ModalForm from './ModalForm';
import RadioButtonGroup from './RadioButtons/RadioButtonsGroup';

const TeacherModal: React.FC<ModalProps & { teacher: Teacher }> = ({
  onClose,
  teacher,
  className,
}) => {
  return (
    <Modal onClose={onClose} className={`modal-content ${className}`}>
      <div className="text-start">
        <h3 className="text-40px font-medium">Book trial lesson</h3>
        <p className="mt-2">
          Our experienced tutor will assess your current language level, discuss your learning goals,
          and tailor the lesson to your specific needs.
        </p>
        <div className="flex justify-start mt-4 space-x-2">
          <img
            src={teacher.avatar_url}
            alt={`${teacher.name} ${teacher.surname}`}
            className="w-[49px] h-[49px] rounded-full"
          />
          <div className="flex flex-col justify-center items-start">
            <p className="text-xs">Your teacher</p>
            <p className="font-medium">{`${teacher.name} ${teacher.surname}`}</p>
          </div>
        </div>
        <RadioButtonGroup />
        <ModalForm />
      </div>
    </Modal>
  );
};

export default TeacherModal;
