import React from 'react';
import styled from 'styled-components';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  return (
    <ProfileButton type="button" onClick={handleLogout}>Logout</ProfileButton>
  )
}

export default Logout;

const ProfileButton = styled.button`
  background-color: var(--primaryWhite);
  color: var(--primaryBlack);
  font-size: var(--fontSize);
  border: 1.5px solid var(--softPurple);
  border-radius: 30px;
  height: 50px;
  padding: 0 40px;
  
  &:hover {
    background-color: var(--softPurple);
    color: var(--primaryWhite);
    transition: 0.2s;
  }

  @media (min-width: 668px) {
    padding: 0 5rem;
  }

@media (max-width: 664px) {
   border-radius: 10px;
   border: 1px solid #ffffff;
   padding: 0.3rem;
   }
    `;