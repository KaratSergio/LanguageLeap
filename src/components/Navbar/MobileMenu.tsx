import { Link } from 'react-router-dom';
import { MobileMenuProps } from './types';
import { useTheme } from '@hooks/useTheme';
import Icon from '../Icon/Icon';

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen, currentUser, openModal, handleLogout }) => {
  const { bg: backgroundColor, hover: hoverColor } = useTheme();

  return (
    <div
      className={`fixed inset-0 z-40 transform ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-300 ease-in-out`}
      style={{ backgroundColor: hoverColor, transition: 'background-color 1.3s' }}
    >
      <ul className="flex flex-col gap-8 font-semibold text-5xl justify-center items-center mt-40">
        <li>
          <Link className="flex items-center pr-12" to="/" onClick={() => setIsMenuOpen(false)}>
            <Icon
              id="icon-home"
              className="mr-4"
              style={{
                fill: backgroundColor,
                stroke: backgroundColor,
                width: '40px',
                height: '40px',
                transition: 'background-color 0.3s',
              }}
            />
            Home
          </Link>
        </li>
        <li>
          <Link className="flex items-center" to="/teachers" onClick={() => setIsMenuOpen(false)}>
            Teachers
            <Icon
              id="icon-users"
              className="ml-4"
              style={{
                fill: backgroundColor,
                stroke: backgroundColor,
                width: '40px',
                height: '40px',
                transition: 'background-color 0.3s',
              }}
            />
          </Link>
        </li>
        {currentUser && (
          <li>
            <Link className="flex items-center" to="/favorites" onClick={() => setIsMenuOpen(false)}>
              Favorites
              <Icon
                id="icon-like-on"
                className="ml-4"
                style={{
                  fill: backgroundColor,
                  stroke: backgroundColor,
                  width: '40px',
                  height: '40px',
                  transition: 'background-color 0.3s',
                }}
              />
            </Link>
          </li>
        )}
      </ul>
      <div className="font-bold flex flex-col items-center mt-12">
        {currentUser ? (
          <div className="flex items-center">
            <p className="mr-4 font-serif tracking-widest">{currentUser.displayName}</p>
            <button
              type="button"
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
            >
              Log out
              <Icon
                id="icon-logout"
                className="ml-2"
                style={{ fill: backgroundColor, stroke: backgroundColor, transition: 'background-color 0.3s' }}
              />
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                openModal(true);
                setIsMenuOpen(false);
              }}
            >
              Log in
              <Icon
                id="icon-login"
                className="ml-2"
                style={{ fill: backgroundColor, stroke: backgroundColor, transition: 'background-color 0.3s' }}
              />
            </button>
            <button
              type="button"
              onClick={() => {
                openModal(false);
                setIsMenuOpen(false);
              }}
              className="flex justify-center rounded-xl text-white py-14 px-39 mt-4 w-nav-btn-reg  bg-mainBlack hover:bg-gray-900"
            >
              Registration
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
