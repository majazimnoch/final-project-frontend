import React, { useRef } from 'react';
import './NavbarStyle.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoIcon from 'assets/horsey.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { Header, Img, Nav } from './NavbarStyling';

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const handleLinkClick1 = () => {
    navigate('/#faq');
  };

  const handleLinkClick2 = () => {
    navigate('/#contact');
  };

  return (
    <Header>
      <div className="logo-container">
        <Img alt="Logo Horsey" src={LogoIcon} />
      </div>
      <div>
        <Nav ref={navRef}>
          <Link to="#faq" onClick={handleLinkClick1}>
            FAQ
          </Link>
          <Link to="#contact" onClick={handleLinkClick2}>
            Contact
          </Link>
          <button
            type="button"
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </Nav>
        <button
          type="button"
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </Header>
  );
};

export default Navbar;
