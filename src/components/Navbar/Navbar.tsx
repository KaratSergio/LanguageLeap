import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Custom/CustomModal/Modal';

import AuthForm from '../Auth/AuthForm';
import { logout } from '@services/authServices';
import { useAuth } from '@hooks/useAuth';

import Button from '../Custom/CustomButton/Button';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const currentUser = useAuth();

  const openModal = (login: boolean) => {
    setIsLogin(login);
    setIsModalOpen(true);
  };

  const handleLogout = async () => {
    await logout();
  };

  const handleAuthSuccess = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="mt-5">
      <div className="container w-nav-bar mx-auto flex justify-between">
        <div className="flex w-nav-page justify-between py-10">
          <div className="text-mainBlack font-bold flex items-center ">LearnLingo</div>
          <div className="flex gap-7  items-center">
            <Link to="/" className="text-mainBlack">
              Home
            </Link>
            <Link to="/teachers" className="text-mainBlack">
              Teachers
            </Link>
            {currentUser ? (
              <Link to="/favorites" className="text-mainBlack">
                Favorites
              </Link>
            ) : null}
          </div>
        </div>
        <div className="flex  w-nav-auth">
          {currentUser ? (
            <button onClick={handleLogout} className="text-mainBlack">
              Logout
            </button>
          ) : (
            <>
              <button type="submit" onClick={() => openModal(true)} className="text-mainBlack">
                Login
              </button>
              <Button
                type="submit"
                onClick={() => openModal(false)}
                className="text-white py-14 px-39 ml-4 w-nav-btn-reg bg-mainBlack hover:bg-gray-900 "
              >
                Register
              </Button>
            </>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <AuthForm isLogin={isLogin} onClose={handleAuthSuccess} />
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
