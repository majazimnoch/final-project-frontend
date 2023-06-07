/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { StyledHero, TextBlock, StyledTitle, StyledParagraph, ButtonContainer } from './HeroStyling';
import Button from './Button';

const Hero = () => {
  return (
    <StyledHero>
      <div className="content">
        <div className="left" />
        <div className="right">
          <TextBlock>
            <StyledTitle>Get prepared for your next horse ride with Horsey</StyledTitle>
            <StyledParagraph>Horsey app helps you to track your horses' goals and monitor their
            routines. Sign up now and see what all the neighing is about!
            </StyledParagraph>
            <ButtonContainer>
              <Button signup>Sign up</Button>
              <Button>Log in</Button>
            </ButtonContainer>
          </TextBlock>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;