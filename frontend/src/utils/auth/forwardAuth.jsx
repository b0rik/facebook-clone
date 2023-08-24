import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { apiSlice } from '../state/apiSlice';

const ForwardAuth = ({ children }) => {
  const selectActiveUser = apiSlice.endpoints.getActiveUser.select();
  const { isLoading, isSuccess, isError, error } = useSelector(selectActiveUser);
  
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isSuccess) {
    return <Navigate to='/home' />
  } else if (isError) {
    return error.status === 401 ? <div>{children}</div> : <div>{error.data.message}</div>
  }
};

export default ForwardAuth;
