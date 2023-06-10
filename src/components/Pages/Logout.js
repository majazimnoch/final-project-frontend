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
border-radius: 5px;
border: 3px solid #ffffff;
cursor: pointer;
width: 7rem;
background-color: #ffb140;
color: #56282d;
font-size: 1rem;
font-weight: bold;
margin-top: 1.5rem;
margin-bottom: 1.5rem;
padding: 0.8rem;

@media (max-width: 664px) {
   border-radius: 10px;
   border: 1px solid #ffffff;
   padding: 0.3rem;
   }
    `;