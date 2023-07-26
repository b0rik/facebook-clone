import FormPage from '../components/formPage/formPage';
import FormInput from '../components/formPage/formInput';
import Button from '../components/button';

import '../styles/signup.css';

const Signup = () => {
  return (
    <div className="signup">
      <FormPage title="fesbuk.">
        <FormInput 
          id="name"
          type="text"
          label="name"
          placeholder="enter your name"
        />
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
        <FormInput 
          id="password_confirm"
          type="password_confirm"
          label="confirm password"
          placeholder="enter your password again"
        />
        <FormInput 
          id="date_of_birth"
          type="date"
          label="date of birth"
          placeholder=""
        />
        <FormInput 
          id="profile_picture"
          type="file"
          label="profile picture"
          placeholder=""
        />
        <div className="signup__buttons">
          <Button text="sign up"/>
          <p>or</p>
          <Button text="login" inverted={true}/>
        </div>
      </FormPage>
    </div>
  );
};

export default Signup;