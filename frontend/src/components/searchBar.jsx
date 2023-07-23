import React from 'react';

import '../styles/searchBar.css';

import searchIcon from '../assets/search-interface-symbol.png';

const SearchBar = () => {
  return (
    <form className="search-bar">
      <input type="text"
        id="search_bar_input"
        className="search-bar__input-field" 
        placeholder="Search..."/>
      <button className="search-bar__button"><img src={searchIcon} alt="saerch icon" /></button>
    </form>
  );
};

export default SearchBar;