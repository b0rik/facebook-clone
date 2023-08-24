import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar/navbar";
import Footer from "../../components/Footer/footer";

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
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
