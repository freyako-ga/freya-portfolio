import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        FREYA KO
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
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
