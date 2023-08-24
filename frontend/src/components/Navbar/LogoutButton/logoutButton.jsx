import { useEffect } from 'react';
import { useLogoutUserMutation } from '../../../utils/state/apiSlice';

import './logout-button.css';

const LogoutButton = ({ children }) => {
  const [logoutUser, { isError, error }] = useLogoutUserMutation();

  useEffect(() => {
    if (isError) {
      console.error(error);
      alert('Error logging out. Please try again.');
    }
  }, [isError, error]);

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