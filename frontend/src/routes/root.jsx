import { Outlet } from 'react-router-dom';

import Auth from './Auth';
import Navbar from '../components/navbar/navbar';

import '../styles/root.css';

const Root = () => {
  return (  
    <Auth>
      <div className="container">
        <header className="header">
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
        </footer>
      </div>
    </Auth>
    
  );
};

export default Root;