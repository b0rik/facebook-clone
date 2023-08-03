import {
  useNavigate,
  useActionData,
  redirect,
  Navigate,
} from "react-router-dom";

import store from "../utils/state/store";
import { fetchUser } from "../utils/state/actions/userActions";
import { useSelector } from "react-redux";

import FormPage from "../components/formPage/formPage";
import FormInput from "../components/formPage/formInput";
import Button from "../components/button";

import "../styles/login.css";

const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const postBody = Object.fromEntries(formData);
  const postBodyJSON = await JSON.stringify(postBody);

  // Send form data to server to login user
  const response = await fetch("http://localhost:9000/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    credentials: "include",
    body: postBodyJSON,
  });

  const responseJSON = await response.json();

  // display errors
  if (responseJSON.errors) {
    return responseJSON.errors;
  }

  // if details are wrong
  if (!responseJSON.ok) {
    return [{ error: "Incorrect email or password." }];
  }

  // save logged in user state
  store.dispatch(fetchUser());

  alert("You are logged in!");
  return redirect("/home");
};
const Login = () => {
  const errors = useActionData() || [];
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.data);

  return userData ? (
    <Navigate to="/home" />
  ) : (
    <div className="login">
      <FormPage title="fesbuk.">
        {errors.length > 0 && errors[0]?.error && (
          <p className="login__error">{errors[0]?.error}</p>
        )}
        <FormInput
          id="email"
          type="email"
          label="email"
          placeholder="enter your email"
          errors={errors.filter((err) => err.path === "email")}
        />
        <FormInput
          id="password"
          type="password"
          label="password"
          placeholder="enter your password"
          errors={errors.filter((err) => err.path === "password")}
        />
        <div className="login__buttons">
          <Button text="login" />
          <p>or</p>
          <Button
            text="sign up"
            inverted={true}
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
          />
        </div>
      </FormPage>
    </div>
  );
};

export { loginAction };
export default Login;
