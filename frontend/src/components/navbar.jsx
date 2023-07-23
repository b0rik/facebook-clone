import React from 'react';

import SearchBar from '../components/searchBar';
import NavLinks from '../components/navLinks';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        facebook
      </div>
      {/* <SearchBar />
      <NavLinks /> */}
    </div>
  );
};

export default Navbar;