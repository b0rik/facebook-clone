import { RouterProvider } from 'react-router-dom';

import router from './router';

import { useGetActiveUserQuery } from './utils/state/apiSlice';

const App = () => {
  const { isLoading } = useGetActiveUserQuery();

  // TODO make loading component
  return isLoading 
    ? <div>Loading...</div> 
    : <div><RouterProvider router={router} /></div>
};

export default App;
