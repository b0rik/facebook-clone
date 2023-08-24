import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/searchBar';
import NavLinks from '../NavLinks/navLinks';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={'/home'} className="navbar__logo">
        fesbuk.
      </Link>
      <SearchBar />
      <NavLinks />
    </nav>
  );
};

export default Navbar;