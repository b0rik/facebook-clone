import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import { signupAction } from './routes/signup';

import Root from './routes/root';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import Signup from './routes/signup';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />,
    action: signupAction
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
