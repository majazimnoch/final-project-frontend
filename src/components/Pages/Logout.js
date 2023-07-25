import { ButtonPrimaryRight } from 'components/ReusableComponents/GlobalStyles';
import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  return (
    <ButtonPrimaryRight type="button" onClick={handleLogout}>Logout</ButtonPrimaryRight>
  )
}

export default Logout;
