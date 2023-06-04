import React, { useRef } from 'react';
import './NavbarStyle.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoIcon from 'assets/horsey.jpg';
import styled from 'styled-components';

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
const StyledLink = styled.a`
margin: 0 1rem;
color: var(--primaryWhite);
text-decoration: none;
border-bottom: 4px solid var(--lemon);
padding-bottom: 3px;

&:hover {
color: var(--primaryWhite);
border-bottom: 4px solid var(--softPurple);
transition: 0.2s;
}

@media only screen and (max-width:1024px) {
  font-size: 1.5rem;
}
`
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <Header>
      <div className="logo-container">
        <Img alt="Logo Horsey" src={LogoIcon} />
      </div>
      <div>
        <Nav ref={navRef}>
          <StyledLink href="#id_faq">FAQ</StyledLink>
          <StyledLink href="/contact">Contact</StyledLink>
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
  )
}

export default Navbar;