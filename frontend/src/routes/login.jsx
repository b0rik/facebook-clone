import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { useLoginUserMutation } from '../utils/state/apiSlice';
import store from '../utils/state/store';
import { getActiveUser } from '../utils/state/actions/userActions';

import FormPage from '../components/formPage/formPage';
import FormInput from '../components/formPage/formInput';
import Button from '../components/button';

import '../styles/login.css';

const Login = () => {
  const { data: userData, loading: userDataLoading } = useSelector((state) => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { error, isSuccess, isLoading: loginLoading }] =
    useLoginUserMutation();
  const navigate = useNavigate();

  const errors = error?.data?.data?.errors ? error.data.data.errors : [];
  
  useEffect(() => {
    if (isSuccess) {
      alert('You are loggend in!');
      store.dispatch(getActiveUser());
      navigate('/home');
    }
  }, [isSuccess, navigate]);
  
  return userDataLoading ? (
    null 
  ) : userData ? (
    <Navigate to='/home' />
  ) : (
    <div className='login'>
      <FormPage title='fesbuk.'>
        {error && error.data?.message === 'Incorrect email or password' && <p className='login__error'>{error.data.message}</p>}
        <FormInput
          id='email'
          type='email'
          label='email'
          placeholder='enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errors={errors.filter((err) => err.path === 'email')}
        />
        <FormInput
          id='password'
          type='password'
          label='password'
          placeholder='enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errors={errors.filter((err) => err.path === 'password')}
        />
        <div className='login__buttons'>
          <Button 
            text='login'
            onClick={async e => {
              e.preventDefault();
              await loginUser({
                email,
                password
              });
            }}
            disabled={loginLoading} 
          />
          <p>or</p>
          <Button
            text='sign up'
            inverted={true}
            onClick={(e) => {
              e.preventDefault();
              navigate('/signup');
            }}
          />
        </div>
      </FormPage>
    </div>
  );
};

export default Login;
