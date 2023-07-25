/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  height: 150px;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid var(--primaryBlack);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  resize: none;
  ::placeholder {
    font-family: var(--fontParagraph);
    font-size: 14px;
    font-weight: 400;
  }

  &:focus {
    outline: 0.5px solid var(--softPurple);
  }
`;

const InputTextArea = ({ placeholder, value, onChange }) => {
  return (
    <label>
      <StyledTextArea
        placeholder={placeholder}
        value={value}
        onChange={onChange} />
    </label>
  );
};

export default InputTextArea;
