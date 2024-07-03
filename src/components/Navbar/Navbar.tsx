import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../Auth/AuthForm';
import { logout } from '@services/authServices';
import { useAuth } from '@hooks/useAuth';

import Icon from '../Icon/Icon';
import BurgerIcon from '../Icon/BurgerIcon';
import Modal from '../Custom/Modal';
import MobileMenu from './MobileMenu';
import { useTheme } from '@hooks/useTheme';

const Navbar = () => {
  const { bg: backgroundColor } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="mt-5">
      <div className="w-full max-w-nav-bar mx-auto flex justify-between px-8">
        <div className="flex w-full max-w-nav-page justify-between py-10">
          <Link to="/" className="font-bold flex items-center">
            <div className="relative w-7 h-7 mr-2 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-yellowLogo rounded-full"></div>
              <div className="absolute top-0 left-0 right-0 bg-blueLogo h-14 rounded-t-full"></div>
            </div>
            <p className="text-xl font-medium">LearnLingo</p>
          </Link>
          <ul className="hidden md:flex gap-7 items-center">
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
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              <BurgerIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
        <div className="font-bold hidden md:flex ml-16">
          {currentUser ? (
            <button className="w-24" type="button" onClick={handleLogout}>
              Log out
              <Icon
                id="icon-logout"
                className="ml-2"
                style={{ fill: backgroundColor, stroke: backgroundColor, transition: 'background-color 0.3s' }}
              />
            </button>
          ) : (
            <div className="w-255 flex">
              <button type="button" onClick={() => openModal(true)}>
                Log in
                <Icon
                  id="icon-login"
                  className="ml-2"
                  style={{ fill: backgroundColor, stroke: backgroundColor, transition: 'background-color 0.3s' }}
                />
              </button>
              <button
                type="button"
                onClick={() => openModal(false)}
                className="flex justify-center rounded-xl text-white py-14 px-39 ml-4 w-nav-btn-reg bg-mainBlack hover:bg-gray-800"
              >
                Registration
              </button>
            </div>
          )}
        </div>
      </div>
      {/* MOBILE MENU */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        currentUser={currentUser}
        openModal={openModal}
        handleLogout={handleLogout}
      />
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          className={`modal-content ${isLogin ? 'login-modal' : 'registration-modal'}`}
        >
          <AuthForm isLogin={isLogin} onClose={handleAuthSuccess} />
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
