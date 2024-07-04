import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom';
import { MobileMenuProps } from './types';

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen, currentUser, openModal, handleLogout }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-btnColorYh transform ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <ul className="flex flex-col gap-4 font-semibold text-5xl justify-center items-center mt-40">
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/teachers" onClick={() => setIsMenuOpen(false)}>
            Teachers
          </Link>
        </li>
        {currentUser && (
          <li>
            <Link to="/favorites" onClick={() => setIsMenuOpen(false)}>
              Favorites
            </Link>
          </li>
        )}
      </ul>
      <div className="font-bold flex flex-col items-center mt-12">
        {currentUser ? (
          <button
            type="button"
            onClick={() => {
              handleLogout();
              setIsMenuOpen(false);
            }}
          >
            Log out
            <Icon id="icon-logout" color="fill-btnColorY" strokeColor="stroke-btnColorY" className="ml-2" />
          </button>
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
              <Icon id="icon-login" color="fill-btnColorY" strokeColor="stroke-btnColorY" className="ml-2" />
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
