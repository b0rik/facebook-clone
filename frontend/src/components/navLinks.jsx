import { Link } from 'react-router-dom'

import '../styles/navLinks.css';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li className="nav-links__link">
        <Link to={'/'}>Home</Link>
      </li>
      <li className="nav-links__link">
        <Link to={'/profile'}>Profile</Link>
      </li>
      <li className="nav-links__link">
        <button id="logout">Logout</button>
      </li>
    </ul>
  );
};

export default NavLinks;