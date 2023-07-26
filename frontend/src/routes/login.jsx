import '../styles/login.css';

const Login = () => {
  return (
    <div className="form-page">
      <div className="login">
        <h1 className="login__title">facebook</h1>
        <form action="" className="login__form">
          <label className="login__label" htmlFor="email">email</label>
          <input type="email" className="login__input-field" placeholder="enter your email"/>
          <label className="login__label" htmlFor="password">PASSWORD</label>
          <input type="password" className="login__input-field" placeholder="enter your password"/>
          <div className="login__buttons">
            <button id="login_button" className="login__button">Login</button>
            <p>or</p>
            <button id="signup_button" className="login__button login__button--inverted">Sign-Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;