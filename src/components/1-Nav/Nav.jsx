import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import user from "../../assets/user.jpg"

const Nav = ({ bgColor = "#252641" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  // Determine if background is light (white or very light color)
  const isLightBg = bgColor === "#ffffff" || bgColor === "#fff" || bgColor === "white" || 
                     (bgColor && bgColor.toLowerCase().includes("fff")) ||
                     (bgColor && bgColor.toLowerCase().includes("white"));

  return (
    <nav
      className={`navbar ${isLightBg ? "light-nav" : ""}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Hamburger Menu Button */}
      <button
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-right ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <ul className="nav-links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link to="courses" className="link" onClick={closeMobileMenu}>
            Courses
          </Link>
          <li onClick={closeMobileMenu}>Careers</li>
          <Link className="link" to="/blog" onClick={closeMobileMenu}>
            Blog
          </Link>
          <li onClick={closeMobileMenu}>About Us</li>
        </ul>

        {isLightBg ? (
          <div className="nav-profile" ref={profileRef}>
            <div className="profile-container" onClick={toggleProfile}>
              <img src={user} alt="User avatar" className="profile-avatar" />
              <span className="profile-name">Lina</span>
              <svg
                className={`profile-dropdown ${isProfileOpen ? "open" : ""}`}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 6L11 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {isProfileOpen && (
              <div className="profile-dropdown-menu">
                <Link to="/logIn" onClick={closeMobileMenu}>
                  Profile
                </Link>
                <Link to="/logIn" onClick={closeMobileMenu}>
                  Settings
                </Link>
                <Link to="/logIn" onClick={closeMobileMenu}>
                  Logout
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="nav-buttons">
            <Link to="/logIn" className="login" onClick={closeMobileMenu}>
              Login
            </Link>
            <Link to="/logIn" className="signup" onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
