import React from 'react';
import './ContactCssStyling.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from 'assets/croppedhorses.png';
import image2 from 'assets/horses-three.svg';
import image3 from 'assets/sandra.jpg';
import image4 from 'assets/ylva2.jpg';
import image5 from 'assets/maja.jpg';
import { Pinside } from 'components/ReusableComponents/GlobalStyles';
import { StyledSection, StyledTop, TopTitle, WrapperSectionContact, TopContainer, ContactDetailsBox, TopInfo, StyledSpanContact, TopEmail, IconsContainer, StyledImageDesktop, StyledImage, FlexContacts, FlexSection, StyledImageProfile, AuthorTitleBox, StyledName, StyledLine } from './ContactStyling';

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
              <TopEmail><StyledSpanContact email>infoy@horsey.se</StyledSpanContact></TopEmail>
            </ContactDetailsBox>
            <IconsContainer>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="faicon-styling" />
              </a>
              <a href="https://www.instagram.com/horseyapp/" target="_blank" rel="noopener noreferrer">
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
            <Pinside>sandra@horsey.se</Pinside>
            <StyledLine />
          </AuthorTitleBox>
        </FlexSection>
        <FlexSection>
          <StyledImageProfile src={image4} alt="Profile picture Ylva" />
          <AuthorTitleBox>
            <StyledName>Ylva</StyledName>
            <Pinside>ylva@horsey.se</Pinside>
            <StyledLine />
          </AuthorTitleBox>
        </FlexSection>
        <FlexSection>
          <StyledImageProfile src={image5} alt="Profile picture Maja" />
          <AuthorTitleBox>
            <StyledName>Maja</StyledName>
            <Pinside>maja@horsey.se</Pinside>
            <StyledLine />
          </AuthorTitleBox>
        </FlexSection>
      </FlexContacts>
    </StyledSection>
  )
};

export default Contact;