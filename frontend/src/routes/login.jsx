import { useNavigate, useActionData, redirect } from 'react-router-dom';

import FormPage from '../components/formPage/formPage';
import FormInput from '../components/formPage/formInput';
import Button from '../components/button';

import '../styles/login.css';

const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const postBody = Object.fromEntries(formData);
  const postBodyJSON = await JSON.stringify(postBody);

  // Send form data to server to login user
  const response = await fetch('http://localhost:9000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // credentials: 'include',
    body: postBodyJSON,
  });

  const responseJSON = await response.json();

  if (responseJSON.errors) {
    return responseJSON.errors;
  }

  console.log(responseJSON)
  if (!responseJSON.ok) {
    return [{ error: 'Incorrect email or password.' }];
  }

  alert('You are logged in!');
  return null;
}
const Login = () => {
  const errors = useActionData() || [];
  const navigate = useNavigate();

  return (
    <div className="login">
      <FormPage title="fesbuk.">
        {errors.length > 0 && errors[0]?.error && 
          <p className="login__error">{errors[0]?.error}</p>
        }
        <FormInput 
          id="email"
          type="email"
          label="email"
          placeholder="enter your email"
          errors={errors.filter(err => err.path === 'email')}
        />
        <FormInput 
          id="password"
          type="password"
          label="password"
          placeholder="enter your password"
          errors={errors.filter(err => err.path === 'password')}
        />
        <div className="login__buttons">
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

export { loginAction };
export default Login;