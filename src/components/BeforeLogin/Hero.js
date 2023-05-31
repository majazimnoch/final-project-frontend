/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import heroImage from 'assets/heroImg.png'
import { Button } from './Button';

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
            <Button signup>Sign up</Button>
            <Button>Log in</Button>
          </TextBlock>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  color: red;

  @media (min-width: 1024px) {
    background: none;

    .content {
      display: flex;
      width: 100%;
      height: 100%;

      .left {
        flex: 1;
        background-image: url(${heroImage});
        background-size: cover;
        background-position: center;
      }

      .right {
        flex: 1;
        background-color: #f9f7ff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

const TextBlock = styled.div`
flex-direction: column;
padding: 4rem 2rem 4rem 2rem;

@media (max-width: 1023px) {
    background-color: rgba(249, 247, 255, 0.7);
    width: 80vw;
}
`;

const StyledTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #9685f1;

  @media (max-width: 1023px) {
    font-size: 2.5rem;
  }

  @media (max-width: 668px) {
    font-size: 1.5rem;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #141414;

  @media (max-width: 1023px) {
    font-size: 1.3rem;
  }

  @media (max-width: 668px) {
    font-size: 0.9rem;
  }
`;
