import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="https://www.instagram.com/anima_the_aero_club/?igsh=MWdnZXdvYmlsenVmNw%3D%3D" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/anima-the-aero-club-of-nit-agartala/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="footerNav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/team">Team</Link></li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <p>Copyright &copy;{new Date().getFullYear()};&nbsp;&nbsp;&nbsp;Designed by <span className="designer">Parship</span></p>
      </div>
    </>
  );
};

export default Footer;
