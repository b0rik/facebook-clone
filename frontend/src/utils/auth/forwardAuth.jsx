import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Spinner from '../../components/Spinner/spinner';

import { activeUserSelector } from '../state/apiSelectors';

const ForwardAuth = ({ children }) => {
  const { isLoading, isSuccess, isError, error } = useSelector(activeUserSelector);
  
  if (isLoading) {
    return <Spinner />
  } else if (isSuccess) {
    return <Navigate to='/home' />
  } else if (isError) {
    return error.status === 401 ? <div>{children}</div> : <div>{error.data.message}</div>
  }
};

export default ForwardAuth;
