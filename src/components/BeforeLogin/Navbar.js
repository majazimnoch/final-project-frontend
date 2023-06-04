import React, { useRef } from 'react';
import './NavbarStyle.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoIcon from 'assets/horsey.jpg';
import styled, { css } from 'styled-components';

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

const NavBtn = styled.button`
padding: 5px;
cursor: pointer;
background: transparent;
border: none;
outline: none;
visibility: hidden;
opacity: 0;
font-size: 1.8rem;

@media only screen and (max-width: 1024px)  {
      visibility: visible;
      opacity: 1;
      color: var(--primaryWhite);
      margin-right: 10px;
}

${(styling) => styling.navclosebtn && css`
  `
} 
@media only screen and (max-width:1024px) {
    position: absolute;
    top: 1rem;
    right: 0;
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
          <StyledLink href="#id_contact">FAQ</StyledLink>
          <StyledLink href="/contact">Contact</StyledLink>
          <button
            type="button"
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </Nav>
        <NavBtn
          type="button"
          onClick={showNavbar}>
          <FaBars />
        </NavBtn>
      </div>
    </Header>
  )
}

export default Navbar;