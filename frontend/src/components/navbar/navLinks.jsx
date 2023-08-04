import { Link, redirect } from 'react-router-dom'

import store from '../../utils/state/store';
import { fetchUser } from '../../utils/state/actions/userActions';

import '../../styles/navbar/navLinks.css';

const logout = async () => {
  const response = await fetch("http://localhost:9000/users/logout", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    credentials: "include",
  });

  store.dispatch(fetchUser());

  alert("You are logged out!");
  return redirect("/login");
};

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li className="nav-links__link">
        <Link to={'/home'}>Home</Link>
      </li>
      <li className="nav-links__link">
        <Link to={'/profile'}>Profile</Link>
      </li>
      <li className="nav-links__link">
        <button onClick={logout}>Logout</button>
      </li>
    </ul>
  );
};

export default NavLinks;