import { ButtonPrimary } from 'components/ReusableComponents/GlobalStyles';
import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  return (
    <ButtonPrimary type="button" onClick={handleLogout}>Logout</ButtonPrimary>
  )
}

export default Logout;
