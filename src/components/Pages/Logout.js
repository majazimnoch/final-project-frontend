import React from 'react';
import { BigButton } from './WelcomePage';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  return (
    <BigButton type="button" onClick={handleLogout}>Logout</BigButton>
  )
}

export default Logout;
