import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Custom/CustomModal/Modal';

import AuthForm from '../Auth/AuthForm';
import { logout } from '@services/authServices';
import { useAuth } from '@hooks/useAuth';

import Button from '../Custom/CustomButton/Button';
import Icon from '../Icon/Icon';

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
      <div className="w-full max-w-nav-bar mx-auto flex justify-between">
        <div className="flex w-full max-w-nav-page justify-between py-10">
          <Link to="/" className="font-bold flex items-center">
            <div className="relative w-7 h-7 mr-2 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-yellowLogo rounded-full"></div>
              <div className="absolute top-0 left-0 right-0 bg-blueLogo h-14 rounded-t-full"></div>
            </div>
            <p className="text-xl font-medium">LearnLingo</p>
          </Link>
          <ul className="flex gap-7 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/teachers">Teachers</Link>
            </li>
            {currentUser && (
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="font-bold flex max-w-nav-auth">
          {currentUser ? (
            <button type="button" onClick={handleLogout}>
              Log out
              <Icon id="icon-logout" strokeColor="stroke-btnColorY" className="ml-2" />
            </button>
          ) : (
            <>
              <button type="button" onClick={() => openModal(true)}>
                Log in
                <Icon id="icon-login" strokeColor="stroke-btnColorY" className="ml-2" />
              </button>
              <Button
                type="button"
                onClick={() => openModal(false)}
                className="text-white py-14 px-39 ml-4 w-nav-btn-reg bg-mainBlack hover:bg-gray-900"
              >
                Registration
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
