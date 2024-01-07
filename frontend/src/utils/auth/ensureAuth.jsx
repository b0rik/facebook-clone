import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import Spinner from '../../components/Spinner/spinner';

// import { activeUserSelector } from '../state/apiSelectors';
import { useGetActiveUserQuery } from '../state/apiSlice';

const EnsureAuth = ({ children }) => {
  // const { isLoading, isSuccess, isError, error } = useSelector(activeUserSelector);
  const { isLoading, isSuccess, isError, error } = useGetActiveUserQuery();

  if (isLoading) {
    return <Spinner />
  } else if (isSuccess) {
    return <div>{children}</div>
  } else if (isError) {
    return error.status === 401 ? <Navigate to='/login' /> : <div>{error.data.message}</div>
  }
};

export default EnsureAuth;
