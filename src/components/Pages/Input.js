/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 3rem;
  padding: 0 1rem;
  width: 200px;
  border-radius: 10px;
  border: 1px var(--primaryBlack) solid;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-family: var(--fontParagraph);
  font-size: 14px;
  ::placeholder {
    font-family: var(--fontParagraph);
    font-size: 14px;
    font-weight: 400;
  }

  &:focus {
    outline: 0.5px solid var(--softPurple);
  }

  @media (max-width: 1023px) {
  width: 70vw;
  }
`;

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </label>
  );
};

export default Input;
