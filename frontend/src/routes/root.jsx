import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../components/navbar/navbar";

import "../styles/root.css";

const Root = () => {
  const userData = useSelector((state) => state.user.data);

  return !userData ? (
    <Navigate to="/login" />
  ) : (
    <div className="container">
      <header className="header">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Root;
