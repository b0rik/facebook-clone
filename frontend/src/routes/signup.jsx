import '../styles/signup.css';

const Signup = () => {
  return (
    <div className="form-page">
      <div className="signup">
        <h1 className="signup__title">facebook</h1>
        <form action="" className="signup__form">
          <label className="signup__label" htmlFor="username">USERNAME</label>
          <input type="text" className="signup__input-field" placeholder="enter your username"/>
          <label className="signup__label" htmlFor="password">PASSWORD</label>
          <input type="password" className="signup__input-field" placeholder="enter your password"/>
          <label className="signup__label" htmlFor="password_confirm">CONFIRM PASSWORD</label>
          <input type="password" className="signup__input-field" placeholder="enter your password again"/>
          <label className="signup__label" htmlFor="date_of_birth">DATE OF BIRTH</label>
          <input type="date" className="signup__input-field"/>
          <label className="signup__label" htmlFor="profile_picture">PROFILE PICTURE</label>
          <input type="file" className="signup__input-field"/>
          <div className="signup__buttons">
            <button id="signup_button" className="signup__button">Sign-Up</button>
            <p>or</p>
            <button id="signup_button" className="signup__button signup__button--inverted">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;