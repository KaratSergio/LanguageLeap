import React, { useState } from 'react';
import Modal from '../Custom/Modal';
import Button from '../Custom/Button';
import AuthForm from '../Auth/AuthForm';

import { useTheme } from '@hooks/useTheme';

interface InfoPopUpProps {
  onClose: () => void;
}

const InfoPopUp: React.FC<InfoPopUpProps> = ({ onClose }) => {
  const { hover: hoverColor } = useTheme();
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  const openModal = (isLogin: boolean) => {
    setIsLogin(isLogin);
  };

  const closeModal = () => {
    setIsLogin(null);
    onClose();
  };

  return (
    <div>
      {isLogin !== null ? (
        <Modal onClose={closeModal}>
          <AuthForm isLogin={isLogin} onClose={closeModal} />
        </Modal>
      ) : (
        <Modal onClose={onClose} className=" px-[36px]">
          <div
            className="flex flex-col items-center w-full rounded-30 p-4"
            style={{ backgroundColor: hoverColor, transition: 'background-color 1.3s' }}
          >
            <div
              className="flex flex-col justify-around items-center rounded-30 text-xl md:text-2xl font-semibold w-full max-w-96 text-center"
              style={{ backgroundColor: hoverColor, transition: 'background-color 1.3s' }}
            >
              <p>
                Only authorized users!!!
                <br /> <span className="text-borderGrey font-normal text-base md:text-2xl">can add to favorites</span>
              </p>
              <div className="flex flex-wrap items-center  border-top  justify-center mt-4">
                <p>You can</p>
                <Button type="button" className="mx-1 max-w-14" onClick={() => openModal(true)}>
                  Login
                </Button>
                <p>or</p>
                <Button type="button" className="mx-1 max-w-20" onClick={() => openModal(false)}>
                  Register
                </Button>
                <p className=" text-borderGrey font-normal text-base md:text-2xl">to access this feature.</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default InfoPopUp;
