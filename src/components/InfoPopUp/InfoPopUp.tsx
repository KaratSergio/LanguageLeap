import React, { useState } from 'react';
import Modal from '../Custom/CustomModal/Modal';
import Button from '../Custom/CustomButton/Button';
import AuthForm from '../Auth/AuthForm';

interface InfoPopUpProps {
  onClose: () => void;
}

const InfoPopUp: React.FC<InfoPopUpProps> = ({ onClose }) => {
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
        <Modal onClose={onClose}>
          <div className="flex flex-col items-center bg-btnColorYh rounded-30 w-96 h-64 p-4">
            <div className="flex flex-col justify-around items-center rounded-30 font-semibold w-64 h-56 text-center bg-btnColorYh">
              <p>
                Only authorized users!!!
                <br /> <span className="text-borderGrey font-normal">can add to favorites</span>
              </p>
              <div className="flex flex-wrap items-center justify-center mt-4">
                <p>You can</p>
                <Button type="button" className="mx-1 max-w-14" onClick={() => openModal(true)}>
                  Login
                </Button>
                <p>or</p>
                <Button type="button" className="mx-1 max-w-20" onClick={() => openModal(false)}>
                  Register
                </Button>
                <p className="text-borderGrey font-normal">to access this feature.</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default InfoPopUp;
