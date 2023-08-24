import {
  createBrowserRouter,
  Navigate
} from 'react-router-dom';

import EnsureAuth from './utils/auth/ensureAuth';
import ForwardAuth from './utils/auth/forwardAuth';
import Root from './routes/root';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import Signup from './routes/signup';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <ForwardAuth><Login /></ForwardAuth>,
  },
  {
    path: '/signup',
    element: <ForwardAuth><Signup /></ForwardAuth>,
  },
  {
    path: '/',
    element: <EnsureAuth><Root /></EnsureAuth>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to='home' />,
      },
      {
        index: true,
        path: '/home',
        element: <Home />,
      },
      {
        path: '/users/:id',
        element: <Profile />
      },
      {
        path: '/users/',
        element: <Profile />
      },
    ],
  },
  {
    path: '/*',
    element: <h1>404</h1>
  }
]);

export default router;