import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Auth = ({ children }) => {
  const { loading, data } = useSelector(state => state.user);

  if (loading) return <h1>loading!</h1>
  if (!data) return <Navigate to='login' />

  return children;
} 

export default Auth;