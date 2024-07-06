import { Link } from 'react-router-dom';
import { NavLinksProps } from './types';

const NavLinks: React.FC<NavLinksProps> = ({ currentUser, hoverColor }) => {
  return (
    <ul className="hidden md:flex gap-7 items-center">
      <li>
        <Link
          to="/"
          className="nav-link"
          style={{ color: '#121417', transition: 'color 0.6s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#121417')}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/teachers"
          className="nav-link"
          style={{ color: '#121417', transition: 'color 0.6s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#121417')}
        >
          Teachers
        </Link>
      </li>
      {currentUser && (
        <li>
          <Link
            to="/favorites"
            className="nav-link"
            style={{ color: '#121417', transition: 'color 0.6s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#121417')}
          >
            Favorites
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
