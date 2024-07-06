import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '@services/authServices';
import { useAuth } from '@hooks/useAuth';
import { useTheme } from '@hooks/useTheme';

import NavLinks from './NavLinks';
import Modal from '../Custom/Modal';
import MobileMenu from './MobileMenu';
import AuthForm from '../Auth/AuthForm';
import AuthControls from './AuthControls';
import BurgerIcon from '../Icon/BurgerIcon';

const Navbar = () => {
  const { bg: backgroundColor, hover: hoverColor } = useTheme();
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
          <NavLinks currentUser={currentUser} backgroundColor={backgroundColor} hoverColor={hoverColor} />
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              <BurgerIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
        <AuthControls
          currentUser={currentUser}
          openModal={openModal}
          handleLogout={handleLogout}
          backgroundColor={backgroundColor}
        />
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
