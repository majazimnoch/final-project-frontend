import React from 'react';
import './ContactCssStyling.css'
import styled, { css } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from 'assets/croppedhorses.png';
import image2 from 'assets/horses-three.svg';
import image3 from 'assets/sandra.jpg';
import { StyledSection } from './ContactStyling';

const Contact = () => {
  library.add(faFacebookF, faInstagram, faLinkedinIn);

  return (
    <StyledSection id="contact">
      <StyledTop>
        <TopTitle>Contact</TopTitle>
        <WrapperSectionContact>
          <TopContainer>
            <ContactDetailsBox>
              <TopInfo><StyledSpanContact contact>Email:</StyledSpanContact></TopInfo>
              <TopEmail><StyledSpanContact email>horsey@app.com</StyledSpanContact></TopEmail>
            </ContactDetailsBox>
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
          <StyledImageDesktop src={image2} alt="Horses" />
        </WrapperSectionContact>
        <StyledImage src={image1} alt="Horses" />
      </StyledTop>
      <FlexContacts>
        <FlexSection>
          <StyledImageProfile src={image3} alt="Profile picture Sandra" />
          <AuthorTitleBox>
            <StyledName>Sandra</StyledName>
            <StyledLine />
            <StyledEmail>sandra@loremipsum.com</StyledEmail>
          </AuthorTitleBox>
        </FlexSection>
        <FlexSection>
          <StyledImageProfile src={image3} alt="Profile picture Ylva" />
          <AuthorTitleBox>
            <StyledName>Ylva</StyledName>
            <StyledLine />
            <StyledEmail>sandra@loremipsum.com</StyledEmail>
          </AuthorTitleBox>
        </FlexSection>
        <FlexSection>
          <StyledImageProfile src={image3} alt="Profile picture Maja" />
          <AuthorTitleBox>
            <StyledName>Maja</StyledName>
            <StyledLine />
            <StyledEmail>sandra@loremipsum.com</StyledEmail>
          </AuthorTitleBox>
        </FlexSection>
      </FlexContacts>
    </StyledSection>
  )
};

export default Contact;

const StyledTop = styled.div`
display: flex;
flex-direction: column;
background-color: var(--primaryWhite);
justify-content: space-between;
`;

const TopContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

@media (min-width: 668px) {
  font-size: 3rem;
}

@media (min-width: 1024px) {
  flex-direction: row;
  gap: 6rem;
  align-items: center;
}
`;

const ContactDetailsBox = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 668px) {
  font-size: 3rem;
}

@media (min-width: 1024px) {
  flex-direction: column;
  align-items: center;
 
}
`;

const TopTitle = styled.h1`
margin: 3rem 0;
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

const TopInfo = styled.h2`
color: var(--primaryBlack);
font-size: 1rem;
margin-top: 1rem;
margin-bottom: .5rem;
padding:3px;

@media (min-width: 668px) {
  font-size: 1rem;
  margin-top: 1.5rem;
}

@media (min-width: 1024px) {
  font-size: 1.3rem;
}
`;

const TopEmail = styled.h3`
color: var(--primaryBlack);
margin-top: 0;
font-size: 1.5rem;
padding:5px;

@media (min-width: 668px) {
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  font-size: 2rem;
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

@media (min-width: 1024px) {
  font-size: 1.5rem;
  margin-top: 0rem;
}
`;

const StyledImage = styled.img`
width: 100%;
height: 8rem;
margin-bottom: 0;
margin-top: 2rem;
align-self: flex-end;
bottom: 0;

@media (min-width: 668px) {
  height: 12rem;
}

@media (min-width: 1024px) {
  display: none;
}
`;

const StyledImageDesktop = styled.img`
width: 50%;
margin: 2rem 0 7rem 0;


@media (max-width: 1023px) {
  display: none;
}
`;

const StyledImageProfile = styled.img`
clip-path: circle();
max-height: 180px;
max-width: 180px;

@media (max-width: 1023px) {
  display: none;
}
`;

const FlexContacts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 8rem 2rem;
background-color: var(--softPurple);

@media (min-width: 668px) {
flex-direction: row;
justify-content: space-between;

}

@media (min-width: 1024px) {
}
`;

const FlexSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


@media (min-width: 1024px) {
flex-direction: row;
}
`;

const AuthorTitleBox = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

const StyledName = styled.h4`
position: relative;
font-size: 1rem;
color: var(--primaryWhite);
margin-bottom: 0;

@media (min-width: 668px) {
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  font-size: 1.5rem;
}
`;

const StyledEmail = styled.p`
color: var(--primaryWhite);
font-size: 16px;

@media (min-width: 668px) {
  font-size: 1rem;
}

@media (min-width: 1024px) {
  font-size: 14px;
}
`;

const StyledLine = styled.span`
display: block;
align-self: left;
width: 40%;
height: 4px;
background-color: var(--lemon);
margin-top: 1rem;

@media (min-width: 664px) {
  top: -30px;
}
`;

const WrapperSectionContact = styled.div`
display: flex;
flex-direction: column;


@media (min-width: 1024px) {
flex-direction: column;
align-items: center;

}
`;

const StyledSpanContact = styled.span`
padding: 3px;
${(styling) => styling.contact && css`
background-color: var(--softPurple);`
}

${(styling) => styling.email && css`
background-color: var(--lemon);`
}
`;

