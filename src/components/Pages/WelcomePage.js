import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import UserBox from 'components/Pages/UserBox';
import WeatherBox from 'components/Pages/WeatherBox';
import Logout from 'components/Pages/Logout';
import UserPage from 'components/Pages/UserPage';
import RandomFacts from './Facts/RandomFacts';
import Horseheader from './Horseheader';

const WelcomePage = () => {
  return (
    <ProfileContainer>
      <LeftColumn>
        <UserBox />
        <WeatherBox />
        <MobileOnlyAddHorseDiv>
          <BigButton mobilebutton><Link to="/mypage">Add horses</Link></BigButton>
        </MobileOnlyAddHorseDiv>
      </LeftColumn>
      <MiddleColumn>
        <Horseheader />
        <UserPage />
      </MiddleColumn>
      <RightColumn>
        <LinksBox>
          <ButtonsCorner>
            <BigButton><Link to="/mypage">Add horses</Link></BigButton>
            <Logout />
          </ButtonsCorner>
          <RandomFacts />
        </LinksBox>
        <DivSearchLogout />
      </RightColumn>
    </ProfileContainer>
  );
};

export default WelcomePage;

export const StyledLinkAdd = styled(Link)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-decoration: none;
  background-color: var(--softPurple);
  color: var(--primaryWhite);
  border: 1.5px solid var(--softPurple);
  border-radius: 30px;
  height: 50px;
  padding: 0 40px;

  &:hover {
    background-color: var(--lemon);
    color: var(--primaryBlack);
    transition: 0.2s;
  }

  &:visited {
  color: var(--primaryBlack);
} 
`;

const LinksBox = styled.div`
display: flex;
flex-direction: column;
gap: .3rem;
margin-top: 1rem;

@media (max-width: 1023px) {
min-width: 100%;
}

`;
const ButtonsCorner = styled.div`
`;

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

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
   
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 664px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
const LeftColumn = styled.div`
grid-area: 1 / 1 / 2 / 2;
justify-content: center;
align-items: center;

@media (max-width: 1023px) {
  
}
`
const MiddleColumn = styled.div`
grid-area: 1 / 2 / 2 / 4;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
const RightColumn = styled.div`
grid-area: 1 / 4 / 2 / 5; 
background-color: var(--primaryWhite);
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 4rem;
align-items: center;
margin: 1rem 1.5rem 3rem 1.5rem;
text-align: center;

 @media (min-width: 1024px) {
  position: sticky;
    right: 0;
  }
`;

const DivSearchLogout = styled.div`
display:flex;
flex-direction: column;
gap: 1rem;`

const MobileOnlyAddHorseDiv = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0;
 @media (min-width: 1024px) {
  display: none;
  }`

export const BigButton = styled.button`
width:100%;
display:block;
text-align:center;
height: 100px;
background-color: var(--softPurple);
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;
padding: 1rem .5rem;
color: var(--primaryWhite);
border: none;
margin-bottom: 2rem;
font-size: 24px;
cursor: pointer;
transition: 0.2s;

${(styling) => styling.mobilebutton && css`
margin: 1.5rem;
`}

&:hover {
  background-color: var(--lemon);
  color: var(--primaryBlack);
}

&::after {
  color: var(--primaryWhite);
}

&::before {
  color: var(--primaryWhite);
}
`