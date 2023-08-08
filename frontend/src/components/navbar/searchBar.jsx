import { Link } from 'react-router-dom';

import '../../styles/navbar/search-bar.css';

import searchIcon from '../../assets/search-interface-symbol.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <input type="text"
          className="search-bar__input-field" 
          placeholder="Search..."/>
        <span className="search-bar__icon"><img src={searchIcon} alt="saerch icon" /></span>
      </div>
      <div className="search-bar__results-container">
        <div className="search-bar__results">
          <Link to='' className="search-bar__result">Lilah Lachman</Link>
          <Link to='' className="search-bar__result">Boris Glushko</Link>
          <Link to='' className="search-bar__result">Sam Man</Link>
          <Link to='' className="search-bar__result">Sam Dude</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;