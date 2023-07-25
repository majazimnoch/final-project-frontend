import React from 'react';
import './ContactCssStyling.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image3 from 'assets/sandra.jpg';
import image4 from 'assets/ylva2.jpg';
import image5 from 'assets/maja.jpg';
import { Pinside } from 'components/ReusableComponents/GlobalStyles';
import { StyledSection, StyledTop, TopTitle, WrapperSectionContact, TopContainer, ContactDetailsBox, StyledSpanContact, TopEmail, IconsContainer, FlexContacts, FlexSection, StyledImageProfile, AuthorTitleBox, StyledName, StyledLine } from './ContactStyling';

const Contact = () => {
  library.add(faFacebookF, faInstagram, faLinkedinIn);

  return (
    <StyledSection id="contact">
      <StyledTop>
        <TopTitle><StyledSpanContact contact>Contact</StyledSpanContact></TopTitle>
        <WrapperSectionContact>
          <TopContainer>
            <ContactDetailsBox>
              <TopEmail><StyledSpanContact email>info@horsey.se</StyledSpanContact></TopEmail>
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
            </ContactDetailsBox>
          </TopContainer>
        </WrapperSectionContact>
      </StyledTop>
      <FlexContacts>
        <FlexSection>
          <StyledImageProfile src={image3} alt="Profile picture Sandra" />
          <AuthorTitleBox>
            <StyledName>Sandra</StyledName>
            <StyledLine />
            <Pinside>Frontend developer & ex horse-enthusiast</Pinside>
          </AuthorTitleBox>
        </FlexSection>
        <FlexSection>
          <StyledImageProfile src={image4} alt="Profile picture Ylva" />
          <AuthorTitleBox>
            <StyledName>Ylva</StyledName>
            <StyledLine />
            <Pinside>Frontened developer & horse-riding teacher </Pinside>
          </AuthorTitleBox>
        </FlexSection>
        <FlexSection>
          <StyledImageProfile src={image5} alt="Profile picture Maja" />
          <AuthorTitleBox>
            <StyledName>Maja</StyledName>
            <StyledLine />
            <Pinside>Frontend developer & curious about horses</Pinside>
          </AuthorTitleBox>
        </FlexSection>
      </FlexContacts>
    </StyledSection>
  )
};

export default Contact;