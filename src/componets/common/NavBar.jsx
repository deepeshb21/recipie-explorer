// import { Menu } from 'semantic-ui-react';
// import { logo } from '../../constants/constant';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <Menu borderless fixed="top">
//       <Menu.Item style={{ padding: '4px' }}>
//         <img src={logo} alt="logo" style={{ width: '90px' }} />
//       </Menu.Item>
//       <Menu.Item name="Home" as={Link} to="/" />
//       <Menu.Item name="Recipes" as={Link} to="/recipes" />
//       <Menu.Item name="Saved Recipes" as={Link} to="/saved" />
//     </Menu>
//   )
// }

// export default NavBar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './NavBar.css'; // Import the CSS file

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

        {/* Main Menu */}
        {/* <nav className={isMobileMenuOpen ? "navbar-links open" : "navbar-links"}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/recipes" onClick={() => setIsMobileMenuOpen(false)}>Recipes</Link>
            </li>
            <li>
              <Link to="/saved" onClick={() => setIsMobileMenuOpen(false)}>Saved Recipes</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav> */}

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
      <Link to="/saved" onClick={() => setIsMobileMenuOpen(false)}>
        <i className="fas fa-heart"></i> Saved Recipes
      </Link>
    </li>
    <li>
      <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
        <i className="fas fa-info-circle"></i> About
      </Link>
    </li>
    <li>
      <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
        <i className="fas fa-envelope"></i> Contact
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