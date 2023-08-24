import { useLogoutUserMutation } from '../../utils/state/apiSlice';

import '../../styles/navbar/logout-button.css';

const LogoutButton = ({ children }) => {
  const [logoutUser] = useLogoutUserMutation();

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