import Navbar from '../components/navbar';

import '../styles/root.css';

const Root = () => {
  return (  
    <div className="container">
      <header className="header">
        <Navbar />
      </header>
    </div>
  );
};

export default Root;