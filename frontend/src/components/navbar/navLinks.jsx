import { Link } from 'react-router-dom'

import LogoutButton from './logoutButton';

import '../../styles/navbar/navLinks.css';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li className="nav-links__link">
        <Link to={'/home'}>Home</Link>
      </li>
      <li className="nav-links__link">
        <Link to={'/users'}>Profile</Link>
      </li>
      <li className="nav-links__link">
        <LogoutButton>Logout</LogoutButton>
      </li>
    </ul>
  );
};

export default NavLinks;