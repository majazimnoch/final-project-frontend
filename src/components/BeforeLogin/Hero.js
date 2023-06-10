/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled, { css } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { StyledHero, TextBlock, StyledTitle, StyledParagraph, ButtonContainer } from './HeroStyling';
// import Button from './Button';

const Hero = () => {
  const handleButtonClick = () => {
    const loginWrapperElement = document.getElementById('home');
    if (loginWrapperElement) {
      loginWrapperElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledHero>
      <div className="content">
        <div className="left" />
        <div className="right">
          <TextBlock>
            <StyledTitle>Get prepared for your next horse ride with Horsey</StyledTitle>
            <StyledParagraph>Horsey app helps you to track your horses' goals
              and monitor their routines.
              Sign up now and see what all the neighing is about!
            </StyledParagraph>
            <ButtonContainer>
              <ButtonLink onClick={handleButtonClick}>
                Hold your horses
              </ButtonLink>
            </ButtonContainer>
          </TextBlock>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;

const ButtonLink = styled(Link)`
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
`;