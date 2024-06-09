import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

import AuthForm from './Auth/AuthForm';
import { logout } from './Auth/index';
import { useAuth } from './Auth/useAuth';

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
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">LearnLingo</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/teachers" className="text-white">
            Teachers
          </Link>
          {currentUser ? (
            <Link to="/favorites" className="text-white">
              Favorites
            </Link>
          ) : null}
          {currentUser ? (
            <button onClick={handleLogout} className="text-white">
              Logout
            </button>
          ) : (
            <>
              <button onClick={() => openModal(true)} className="text-white">
                Login
              </button>
              <button onClick={() => openModal(false)} className="text-white">
                Register
              </button>
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
