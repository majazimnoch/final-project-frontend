import styled, { css } from 'styled-components'

export const Button = styled.button`
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

  ${(styling) => styling.signup && css`
background-color: var(--softPurple); 
color: var(--primaryWhite);
border: 1px var(--softPurple) solid;
padding: 0 45px;

&:hover {
    background-color: var(--lemon); 
    border: 1px var(--softPurple) solid;
    color: var(--primaryBlack);
  }
  `
} 
  `
