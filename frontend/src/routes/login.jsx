import { useNavigate } from 'react-router-dom';

import FormPage from '../components/formPage/formPage';
import FormInput from '../components/formPage/formInput';
import Button from '../components/button';

import '../styles/login.css';

const Login = () => {
const navigate = useNavigate();

  return (
    <div className="login">
      <FormPage title="fesbuk.">
        <FormInput 
          id="email"
          type="email"
          label="email"
          placeholder="enter your email"
        />
        <FormInput 
          id="password"
          type="password"
          label="password"
          placeholder="enter your password"
        />
        <div className="login__buttons" style={{ paddingLeft: '0' }}>
          <Button text="login"/>
          <p>or</p>
          <Button text="sign up" inverted={true} onClick={(e) => {
            e.preventDefault();
            navigate('/signup');
          }}/>
        </div>
      </FormPage>
    </div>
  );
};

export default Login;