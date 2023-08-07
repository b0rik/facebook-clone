import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

import { useLogoutUserMutation } from '../../utils/state/apiSlice';
import store from '../../utils/state/store';
import { fetchUser } from '../../utils/state/actions/userActions';

import '../../styles/navbar/navLinks.css';

const NavLinks = () => {
  const [logoutUser, { isError, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      store.dispatch(fetchUser());
      alert('You are logged out.');
      return navigate('/login');
    }

    if (isError) {
      alert('There was an error logging you out. Please try again.');
    }
  }, [isError, isSuccess, navigate]);

  return (
    <ul className="nav-links">
      <li className="nav-links__link">
        <Link to={'/home'}>Home</Link>
      </li>
      <li className="nav-links__link">
        <Link to={'/profile'}>Profile</Link>
      </li>
      <li className="nav-links__link">
        <button onClick={e => { 
          e.preventDefault(); 
          logoutUser();
        }}>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default NavLinks;