import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './utils/state/store';

import Root from './routes/root';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import Signup from './routes/signup';
import ErrorPage from './error-page';

import { getActiveUser } from './utils/state/actions/userActions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/*',
    element: <h1>404</h1>
  }
]);

store.dispatch(getActiveUser());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
   </React.StrictMode>
);
