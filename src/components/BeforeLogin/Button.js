import React from 'react';
import StyledButton from './ButtonStyling';

const Button = ({ handleClick, text }) => {
  return (
    <StyledButton onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;