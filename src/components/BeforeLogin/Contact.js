import React from 'react';
import './ContactCssStyling.css'
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from 'assets/croppedhorses.png';
import image2 from 'assets/horses-three.svg';
import image3 from 'assets/sandra.jpg';
import image4 from 'assets/ylva.jpg';
import image5 from 'assets/maja.jpg';
import { StyledSection } from './ContactStyling';

const Contact = () => {
  library.add(faFacebookF, faInstagram, faLinkedinIn);

  return (
    <StyledSection id="contact">
      <StyledTop>
        <TopTitle>Contact</TopTitle>
        <TopContainer>
          <TopEmail>horsey@loremipsum.com</TopEmail>
          <IconsContainer>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="faicon-styling" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="faicon-styling" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="faicon-styling" />
            </a>
          </IconsContainer>
        </TopContainer>
        <StyledImage src={image1} alt="Horses" />
        <StyledImageDesktop src={image2} alt="Horses running" />
      </StyledTop>
      <FlexContacts>
        <FlexSection>
          <StyledImageProfile src={image3} alt="Profile picture Sandra" />
          <StyledName>Sandra</StyledName>
          <StyledLine />
          <StyledEmail>sandra@loremipsum.com</StyledEmail>
        </FlexSection>
        <FlexSection>
          <StyledImageProfile src={image4} alt="Profile picture Ylva" />
          <StyledName>Ylva</StyledName>
          <StyledLine />
          <StyledEmail>ylva@loremipsum.com</StyledEmail>
        </FlexSection>
        <FlexSection>
          <StyledImageProfile src={image5} alt="Profile picture Maja" />
          <StyledName>Maja</StyledName>
          <StyledLine />
          <StyledEmail>maja@loremipsum.com</StyledEmail>
        </FlexSection>
      </FlexContacts>
    </StyledSection>
  )
};

export default Contact;

const StyledTop = styled.div`
display: flex;
flex-direction: column;
min-height: 50vh;
background-color: var(--primaryWhite);
position: relative;
border: solid 2px blue;
`;

const TopContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-grow: 1;
`;

const TopTitle = styled.h1`
color: var(--primary);
margin-top: 3rem;
font-size: 2rem;

@media (min-width: 668px) {
  font-size: 3rem;
  margin-top: 4rem;
}

@media (min-width: 1024px) {
  font-size: 2.5rem;
  margin-top: 8rem;
}
`;

const TopEmail = styled.h3`
color: var(--primaryBlack);
margin-top: 0;
font-size: .5rem;

@media (min-width: 668px) {
  font-size: 1rem;
}

@media (min-width: 1024px) {
  font-size: 1.3rem;
}
`;

const IconsContainer = styled.div`
display: flex;
gap: 1.5rem;
justify-content: center;
margin-top: 4rem;
margin-bottom: 0;

@media (min-width: 668px) {
  font-size: 1.5rem;
}
`;

const StyledImage = styled.img`
width: 100%;
height: 8rem;
margin-bottom: 0;
margin-top: 0;
align-self: flex-end;
position: absolute;
bottom: 0;
border: solid 2px yellow;

@media (min-width: 668px) {
  height: 12rem;
}

@media (min-width: 1024px) {
  display: none;
}
`;

const StyledImageDesktop = styled.img`
position: relative;

width: 30%;
top: 110px; left: 35%;

@media (max-width: 1023px) {
  display: none;
}
`;

const StyledImageProfile = styled.img`
clip-path: circle();
max-height: 200px;
max-width: 200px;
margin-bottom: 0;

@media (max-width: 1023px) {
  display: none;
}
`;

const FlexContacts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--softPurple);
padding-top: 20px;
min-height: 50vh;
// margin-bottom: 0;

@media (min-width: 668px) {
  flex-direction: row;
  // align-self: center;
  justify-content: space-between;

}

@media (min-width: 1024px) {
  // flex-direction: row;
}
`;

const FlexSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
position: relative;
`;

const StyledName = styled.h4`
position: relative;
font-size: 1rem;
color: #f9f6ff;
margin-bottom: 0;

@media (min-width: 668px) {
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  font-size: 2rem;
}
`;

const StyledEmail = styled.p`
color: #f9f6ff;
font-size: 0.8rem;
margin-bottom: 2rem;
margin-top: 0;

@media (min-width: 668px) {
  font-size: 1rem;
}

@media (min-width: 1024px) {
  font-size: 2rem;
}
`;

const StyledLine = styled.span`
display: block;
align-self: center;
width: 20%;
height: 4px;
background-color: #e9Fe81;
position: relative;
top: -45px;

@media (min-width: 664px) {
  top: -30px;
}
`;

