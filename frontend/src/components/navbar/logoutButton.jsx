import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

import { useLogoutUserMutation } from '../../utils/state/apiSlice';
import store from '../../utils/state/store';
import { getActiveUser } from '../../utils/state/actions/userActions';

import '../../styles/navbar/logout-button.css';

const LogoutButton = ({ children }) => {
  const [logoutUser, { isError, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      store.dispatch(getActiveUser());
      alert('You are logged out.');
      return navigate('/login');
    }

    if (isError) {
      alert('There was an error logging you out. Please try again.');
    }
  }, [isError, isSuccess, navigate]);

  return (
    <button className='logout-button' onClick={async e => { 
      e.preventDefault(); 
      await logoutUser();
    }}>
      {children}
    </button>
  )
};

export default LogoutButton;