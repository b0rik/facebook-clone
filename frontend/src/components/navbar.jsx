import React from 'react';

import SearchBar from '../components/searchBar';
import NavLinks from '../components/navLinks';

import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        facebook
      </div>
      <SearchBar />
      <NavLinks />
    </nav>
  );
};

export default Navbar;