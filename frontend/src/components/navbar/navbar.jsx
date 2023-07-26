import { Link } from 'react-router-dom';

import SearchBar from './searchBar';
import NavLinks from './navLinks';

import '../../styles/navbar/navbar.css';

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