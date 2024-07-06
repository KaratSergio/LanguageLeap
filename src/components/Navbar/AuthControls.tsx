import Icon from '../Icon/Icon';
import { AuthControlsProps } from './types';

const AuthControls: React.FC<AuthControlsProps> = ({ currentUser, openModal, handleLogout, backgroundColor }) => {
  return (
    <div className="font-bold hidden md:flex ml-16">
      {currentUser ? (
        <div className="flex items-center">
          <p className="mr-4 font-serif tracking-widest">{currentUser.displayName}</p>
          <button className="w-24" type="button" onClick={handleLogout}>
            Log out
            <Icon
              id="icon-logout"
              className="ml-2"
              style={{ fill: backgroundColor, stroke: backgroundColor, transition: 'background-color 0.3s' }}
            />
          </button>
        </div>
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
  );
};

export default AuthControls;
