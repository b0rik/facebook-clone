import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { useAddNewUserMutation } from '../utils/state/apiSlice';

import FormPage from '../components/formPage/formPage';
import FormInput from '../components/formPage/formInput';
import Button from '../components/button';
import FormError from '../components/formPage/formError';

import '../styles/signup.css';

const Signup = () => {
  const { data: userData, loading: userDataLoading } = useSelector((state) => state.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [addUser, { error, isSuccess, isLoading: signupLoading }] =
    useAddNewUserMutation();
  const navigate = useNavigate();
  
  const errors = error?.data?.data?.errors ? error.data.data.errors : [];

  return userDataLoading ? (
    null
  ) : userData ? (
    <Navigate to='/home' />
  ) : isSuccess ? (
    <Navigate to='/login' />
  ) : (
    <div className='signup'>
      <FormPage title='fesbuk.'>
        <FormInput
          id='name'
          type='text'
          label='name'
          placeholder='enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          errors={errors.filter((err) => err.path === 'name')}
        />
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
        <FormInput
          id='passwordConfirm'
          type='password'
          label='confirm password'
          placeholder='enter your password again'
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          errors={errors.filter((err) => err.path === 'passwordConfirm')}
        />
        <FormInput
          id='dateOfBirth'
          type='date'
          label='date of birth'
          placeholder=''
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          errors={errors.filter((err) => err.path === 'dateOfBirth')}
        />
        <FormInput
          id='profilePicture'
          type='file'
          label='profile picture'
          placeholder=''
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          />
        <div className='signup__buttons'>
          <Button
            text='sign up'
            onClick={async e => {
              e.preventDefault();
              await addUser({
                name,
                email,
                password,
                passwordConfirm,
                dateOfBirth,
                profilePicture,
              });
            }}
            disabled={signupLoading}
          />
          <p>or</p>
          <Button
            text='login'
            inverted={true}
            onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }}
            />
        </div>
        {error && !errors.length && <FormError>Something went wront...please try again later.</FormError>}
      </FormPage>
    </div>
  );
};

export default Signup;
