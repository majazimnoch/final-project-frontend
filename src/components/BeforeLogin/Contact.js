import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <StyledSection>
      <h1>Contact</h1>
      <h2>Email</h2>
      <h3>horsey@loremipsum.com</h3>
      {/* icons insta facebook LinkedIn */}
      {/* Image */}
      <FlexContacts>
        <FlexSection>
          <StyledName>Sandra</StyledName>
          <StyledLine />
          <StyledEmail>sandra@loremipsum.com</StyledEmail>
        </FlexSection>
        <FlexSection>
          <StyledName>Ylva</StyledName>
          <StyledLine />
          <StyledEmail>ylva@loremipsum.com</StyledEmail>
        </FlexSection>
        <FlexSection>
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
`;

const FlexContacts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #9685f1;
padding-top: 20px;
`;

const FlexSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;

const StyledName = styled.h4`
position: relative;
color: #f9f6ff;
margin-bottom: 8px;
`;

const StyledEmail = styled.p`
color: #f9f6ff;
margin-bottom: 16px;
`;

const StyledLine = styled.span`
display: block;
align-self: center;
width: 20%;
height: 4px;
background-color: #e9Fe81;
position: relative;
top: -45px;
`;