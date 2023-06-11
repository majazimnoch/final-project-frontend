import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserBox from 'components/Pages/UserBox';
import WeatherBox from 'components/Pages/WeatherBox';

const WelcomePage = () => {
  return (
    <ProfileContainer>
      <LeftColumn>
        <UserBox />
        <WeatherBox />
      </LeftColumn>
      <MiddleColumn>
        <p>sdsf</p>
      </MiddleColumn>
      {/* <ContinueButton type="button" onClick={<LandingPage />}>Continue</ContinueButton> */}
      <RightColumn>
        <Link to="/landingpage">Click to continue</Link>
      </RightColumn>
    </ProfileContainer>
  );
};

export default WelcomePage;

const ProfileContainer = styled.div`
background-color: var(--primaryWhite);
color: var(--primaryBlack);
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
min-height: 100vh;

h1 {
  font-size: 3rem;
  text-align: center;
}

@media (max-width: 1024px) {

  h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 664px) {

  h1 {
    font-size: 1.5rem;
  }
}
`
const LeftColumn = styled.div`
grid-area: 1 / 1 / 2 / 2;
`
const MiddleColumn = styled.div`
grid-area: 1 / 4 / 2 / 5; 
background-color: lavender;
`
const RightColumn = styled.div`
grid-area: 1 / 2 / 2 / 4; 
background-color: beige;
`