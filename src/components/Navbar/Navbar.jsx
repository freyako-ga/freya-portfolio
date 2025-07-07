import { Link } from 'react-router-dom'; // Import Link component from React Router
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        FREYA KO
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/pages/Portfolio">Portfolio</Link></li> 
        <li><Link to="/about">About</Link></li> 
      </ul>
      <div className="navbar-contact">
        <button>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;