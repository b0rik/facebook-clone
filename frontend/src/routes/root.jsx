import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Auth from "./Auth";
import Navbar from "../components/navbar/navbar";

import "../styles/root.css";

const Root = () => {
  const userData = useSelector((state) => state.user.data);

  return !userData ? (
    <Navigate to="/login" />
  ) : (
    <Auth>
      <div className="container">
        <header className="header">
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </Auth>
  );
};

export default Root;
