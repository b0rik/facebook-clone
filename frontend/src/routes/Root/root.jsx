import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar/navbar";

import "./root.css";

const Root = () => {

  return (
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
