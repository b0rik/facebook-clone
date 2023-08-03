import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Auth = () => {
  const { loading, data } = useSelector(state => state.user);

  if (loading) return <h1>loading!</h1>
  if (!data) return <Navigate to='login' />

  return <Outlet />
} 

export default Auth;