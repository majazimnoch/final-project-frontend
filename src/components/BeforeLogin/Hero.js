/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled, { css } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { StyledHero, TextBlock, StyledTitle, StyledParagraph, ButtonContainer } from './HeroStyling';

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
            <StyledTitle>Saddle up for digital horsekeeping with Horsey app!</StyledTitle>
            <StyledParagraph>Track, manage, and stay in sync with your equine companions effortlessly.
            </StyledParagraph>
            <ButtonContainer>
              <ButtonLink onClick={handleButtonClick}>
                Check Horsey App
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
background-color: transparent;
color: var(--primaryBlack);
font-size: var(--fontSize);
border: 1.5px solid var(--softPurple);
border-radius: 30px;
height: 50px;
text-align: center;
display:flex;
flex-direction: column;
justify-content: center;
padding: 0 2rem!important;
margin: 0!important;

&:hover {
  background-color: var(--softPurple);
  color: var(--primaryWhite); 
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