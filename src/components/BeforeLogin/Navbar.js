import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <div>
        <img className="logo-image" alt="Logo Horsey" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png" />
      </div>
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
    </header>
  )
}

export default Navbar;