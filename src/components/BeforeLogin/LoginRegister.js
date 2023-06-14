// import React, { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './ButtonStyling';
// import Button from './Button';

// eslint-disable-next-line max-len
const LoginRegister = ({ state, username, setUsername, email, setEmail, password, setPassword, handleFormSubmit }) => {
  const handleNameChange = (event) => {
    setUsername(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        handleFormSubmit(event, state);
      }}>

      <FormContainer>
        {state === 'register' && (
          <StyledInput
            type="text"
            username="username"
            value={username}
            placeholder="Enter your name"
            onChange={handleNameChange} />
        )}
        <StyledInput
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleEmailChange} />
        <StyledInput
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          required />
      </FormContainer>
      <StyledButton signup type="submit" className={state}>
        {state === 'login' ? 'Login' : 'Register'}
      </StyledButton>
    </Form>
  );
};

export default LoginRegister;

const Form = styled.form`
display: flex;
flex-direction: column;
background-color: var(--primaryWhite);
gap: 4rem;

@media (max-width: 1023px) {
  gap: 2rem;
}
`;

const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 2.5rem;

@media (max-width: 1023px) {
  gap: 2rem;
}
`;

const StyledInput = styled.input`
height: 3rem;
padding: 0 1rem;
border-radius: 10px;

border: 1px var(--primaryBlack) solid;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;



&:focus {
  outline: 0.5px solid var(--softPurple);
}

`;