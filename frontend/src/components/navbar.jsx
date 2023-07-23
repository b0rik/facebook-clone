import { Link } from 'react-router-dom';

import SearchBar from '../components/searchBar';
import NavLinks from '../components/navLinks';

import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={'/'} className="navbar__logo">
        facebook
      </Link>
      <SearchBar />
      <NavLinks />
    </nav>
  );
};

export default Navbar;