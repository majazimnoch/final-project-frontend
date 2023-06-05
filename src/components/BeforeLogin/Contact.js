import React from 'react';
import styled from 'styled-components';
import image1 from 'assets/croppedhorses.png';
import image2 from 'assets/horsesrun.jpg';
import image3 from 'assets/sandra.jpg';
import image4 from 'assets/ylva.jpg';
import image5 from 'assets/maja.jpg';

const Contact = () => {
  return (
    <StyledSection id="contact">
      <StyledTop>
        <TopTitle>Contact</TopTitle>
        <TopContainer>
          <TopInfo>Email</TopInfo>
          <TopEmail>horsey@loremipsum.com</TopEmail>
          {/* icons insta facebook LinkedIn */}
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

const StyledSection = styled.section`
display: flex;
flex-direction: column;
text-align: center;
min-height: 100vh;
`;

const StyledTop = styled.div`
display: flex;
flex-direction: column;
height: 80vh;
// align-items: flex-end;
background-color: #f9f7ff;
`;

const TopContainer = styled.div`
justify-content: space-between;
`;

const TopTitle = styled.h1`
color: #000000;
margin-top: 5rem;
font-size: 4rem;
`;

const TopInfo = styled.h2`
color: #000000;
font-size: 1.5rem;
`;

const TopEmail = styled.h3`
color: #000000;
font-size: 1rem;
`;

const StyledImage = styled.img`
width: 100%;
margin-bottom: 0;
align-self: flex-end;

@media (min-width: 1024px) {
  display: none;
}
`;

const StyledImageDesktop = styled.img`
width: 30%;
align-self: flex-end;

@media (max-width: 1023px) {
  display: none;
}
`

const StyledImageProfile = styled.img`
clip-path: circle();
max-height: 200px;
max-width: 200px;
margin-bottom: 0;

@media (max-width: 1024px) {
  display: none;
}
`
const FlexContacts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #9685f1;
padding-top: 20px;
height: 80vh;

@media (min-width: 664px) {
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
color: #f9f6ff;
margin-bottom: 0;

@media (min-width: 664px) {
  
}
`;

const StyledEmail = styled.p`
color: #f9f6ff;
margin-bottom: 16px;
margin-top: 0;
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