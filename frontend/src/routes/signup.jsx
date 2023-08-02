import { useActionData, redirect, useNavigate } from 'react-router-dom';

import FormPage from '../components/formPage/formPage';
import FormInput from '../components/formPage/formInput';
import Button from '../components/button';

import '../styles/signup.css';

const signupAction = async ({ request }) => {
  const formData = await request.formData();
  const postBody = Object.fromEntries(formData);
  const postBodyJSON = await JSON.stringify(postBody);

  // Send form data to server to create user
  const response = await fetch('http://localhost:9000/users/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: postBodyJSON,
  });

  const responseJSON = await response.json();

  // Show error if any on the signup form
  if (responseJSON.errors) {
    return responseJSON.errors;
  }

  // If user created successfuly then redirect to the login page
  alert('You are signed up! Please log in.');
  return redirect('/login');
}

const Signup = () => {
  const errors = useActionData() || [];
  const navigate = useNavigate();

  return (
    <div className="signup">
      <FormPage title="fesbuk.">
        <FormInput 
          id="name"
          type="text"
          label="name"
          placeholder="enter your name"
          errors={errors.filter(err => err.path === 'name')}
        />
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
        <FormInput 
          id="passwordConfirm"
          type="password"
          label="confirm password"
          placeholder="enter your password again"
          errors={errors.filter(err => err.path === 'passwordConfirm')}
        />
        <FormInput 
          id="dateOfBirth"
          type="date"
          label="date of birth"
          placeholder=""
          errors={errors.filter(err => err.path === 'dateOfBirth')}
        />
        <FormInput 
          id="profilePicture"
          type="file"
          label="profile picture"
          placeholder=""
        />
        <div className="signup__buttons">
          <Button text="sign up"/>
          <p>or</p>
          <Button text="login" inverted={true} onClick={(e) => {
            e.preventDefault();
            navigate('/login');
          }}/>
        </div>
      </FormPage>
    </div>
  );
};

export { signupAction };
export default Signup;