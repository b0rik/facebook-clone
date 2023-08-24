import { RouterProvider } from 'react-router-dom';

import Spinner from './components/Spinner/spinner';

import router from './router';

import { useGetActiveUserQuery } from './utils/state/apiSlice';

const App = () => {
  const { isLoading } = useGetActiveUserQuery();

  // TODO make loading component
  return isLoading 
    ? <Spinner /> 
    : <div><RouterProvider router={router} /></div>
};

export default App;
