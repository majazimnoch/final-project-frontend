/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ButtonPrimary } from 'components/ReusableComponents/GlobalStyles';
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
              <ButtonPrimary onClick={handleButtonClick}>
                Check Horsey App
              </ButtonPrimary>
            </ButtonContainer>
          </TextBlock>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
