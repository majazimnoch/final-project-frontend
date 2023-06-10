import React, { useRef } from 'react';
import './NavbarStyle.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoIcon from 'assets/horsey.jpg';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom'

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 0;
    background-color: var(--claret);
    color: var(--primaryWhite);

    @media only screen and (max-width:1024px) {
    }   
`
const Img = styled.img`
  height: 100%;
`
const Nav = styled.nav`
display: flex;
align-items: center;

@media only screen and (max-width:1024px) {
      position: fixed;
      top: -100vh;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      transition: 1s;
} 
`
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
