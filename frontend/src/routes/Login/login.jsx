import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useLoginUserMutation } from '../../utils/state/apiSlice';

import FormPage from '../../components/FormPage/FormPage/formPage';
import FormInput from '../../components/FormPage/FormInput/formInput';
import Button from '../../components/Button/button';

import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { error, isLoading: loginLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const errors = error?.data?.data?.errors ? error.data.data.errors : [];

  return (
    <div className="login">
      <FormPage title="fesbuk.">
        {error && error.data?.message === "Incorrect email or password" && (
          <p className="login__error">{error.data.message}</p>
        )}
        <FormInput
          id="email"
          type="email"
          label="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errors={errors.filter((err) => err.path === "email")}
        />
        <FormInput
          id="password"
          type="password"
          label="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errors={errors.filter((err) => err.path === "password")}
        />
        <div className="login__buttons">
          <Button
            text="login"
            onClick={async (e) => {
              e.preventDefault();
              await loginUser({
                email,
                password,
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
