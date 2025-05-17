import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import animiaLogo from '../assets/media/animialogo.png';
import hamburgerIcon from '../assets/media/hamburger (2).png';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    // Close menu when location changes
    closeMenu();
  }, [location]);

  return (
    <nav>
      <img src={animiaLogo} alt="ANIMA Logo" />
      <div className="navigation">
        <ul className={menuActive ? 'active' : ''}>
          <i id="menu-close" className="fa-sharp fa-regular fa-circle-xmark" onClick={closeMenu}></i>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>
              Resources
            </Link>
          </li>
          <li>
            <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>
              Team
            </Link>
          </li>
        </ul>
        <img id="menu-btn" src={hamburgerIcon} alt="Menu" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
