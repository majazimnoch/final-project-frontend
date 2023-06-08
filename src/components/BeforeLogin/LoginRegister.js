// import React, { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './ButtonStyling';
// import Button from './Button';

// eslint-disable-next-line max-len
const LoginRegister = ({ state, name, setName, email, setEmail, password, setPassword, handleFormSubmit }) => {
  const handleNameChange = (event) => {
    setName(event.target.value)
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
            name="name"
            value={name}
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
      <StyledButton type="submit" className={state}>
        {state === 'login' ? 'Login!' : 'Register!'}
      </StyledButton>
    </Form>
  );
};

export default LoginRegister;

const Form = styled.form`
display: flex;
flex-direction: column;
background-color: var(--primaryWhite);
`;

const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 2rem;
`;

const StyledInput = styled.input`
height: 3rem;
border-radius: 10px;
font-size: 1rem;
font-weight: bold;

`;