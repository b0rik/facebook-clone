import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './utils/state/store';
import { signupAction } from './routes/signup';
import { loginAction } from './routes/login';

import Root from './routes/root';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import Signup from './routes/signup';
import ErrorPage from './error-page';

import { fetchUser } from './utils/state/actions/userActions';

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
    element: <Login />,
    action: loginAction
  },
  {
    path: '/signup',
    element: <Signup />,
    action: signupAction
  },
]);

store.dispatch(fetchUser());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
   </React.StrictMode>
);
