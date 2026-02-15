import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ bgColor }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" style={{ backgroundColor: bgColor }}>
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-right ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-links">
          <li onClick={closeMobileMenu}>Home</li>
          <li onClick={closeMobileMenu}>Courses</li>
          <li onClick={closeMobileMenu}>Careers</li>
          <li onClick={closeMobileMenu}>Blog</li>
          <li onClick={closeMobileMenu}>About Us</li>
        </ul>

        <div className="nav-buttons">
          <Link to='/logIn' className="login" onClick={closeMobileMenu}>Login</Link>
          <Link to='/logIn' className="signup" onClick={closeMobileMenu}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
