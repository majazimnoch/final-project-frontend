import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoIcon from 'assets/logo-icon.svg';
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
  height: 80px;
`

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <Header>
      <div>
        <Img alt="Logo Horsey" src={LogoIcon} />
      </div>
      <div>
        <nav ref={navRef}>
          <a href="/faq">FAQ</a>
          <a href="/conatct">Contact</a>
          <button
            type="button"
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
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