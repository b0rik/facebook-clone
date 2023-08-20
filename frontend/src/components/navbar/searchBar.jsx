import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import store from '../../utils/state/store';
import { searchUsers } from '../../utils/state/actions/searchActions';

import '../../styles/navbar/search-bar.css';

import searchIcon from '../../assets/search-interface-symbol.png';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { data: searchData } = useSelector((state) => state.search);

  useEffect(() => {
    // need to add debounce
    // remove from redux? make local?
    store.dispatch(searchUsers(searchValue));
  }, [searchValue]);

  const results = searchData?.data
    ? searchData.data.users.map((user) => (
        <Link
          to={`/users/${user._id}`}
          key={user._id}
          className='search-bar__result'
          onClick={() => {
            setSearchValue('')
            setIsFocused(false)
          }}
        >
          {user.name}
        </Link>
      ))
    : [];

  return (
    <div className='search-bar'>
      <div className='search-bar__input'>
        <input
          type='text'
          className='search-bar__input-field'
          placeholder='Search users...'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(() => e.target.value);
          }}
          onFocus={() => setIsFocused(true)} 
          onBlur={(e) => {
            setTimeout(() => setIsFocused(false), 100)
          }}
        />
        <span className='search-bar__icon'>
          <img src={searchIcon} alt='saerch icon' />
        </span>
      </div>
      <div className='search-bar__results-container'>
        <div
          className='search-bar__results'
          style={{ display: isFocused ? 'flex' : 'none' }}
        >
          {(results.length > 0 && results) || (
            <p className='search-bar__result'>No results.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
