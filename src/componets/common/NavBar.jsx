import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu on/off
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="https://png.pngtree.com/template/20191015/ourmid/pngtree-chef-abstract-kitchener-cooky-icon-logo-image_317353.jpg" alt="Website Logo" className="logo-image" />
          </Link>
        </div>

        <nav className={isMobileMenuOpen ? "navbar-links open" : "navbar-links"}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-utensils"></i> Recipes
              </Link>
            </li>
            <li>
              <Link to="/famous-recipe" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-smile"></i> Famous Recipes
              </Link>
            </li>
            <li>
              <Link to="/saved" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-heart"></i> Saved Recipes
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
          </ul>
        </nav>


        {/* Hamburger icon for mobile */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </header>
  );
};

export default NavBar;





// ------------------------------------------------------------------------------------------------------------------------------------------