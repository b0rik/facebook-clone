import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../components/navbar/navbar";

import "../styles/root.css";

const Root = () => {
  const { data: userData, loading } = useSelector((state) => state.user);

  return loading ? (
    null 
  ) : !userData ? (
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
