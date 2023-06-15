import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UserBox from 'components/Pages/UserBox';
import WeatherBox from 'components/Pages/WeatherBox';
import Logout from 'components/Pages/Logout';
import UserPage from 'components/Pages/UserPage';
import { ButtonPrimary } from 'components/ReusableComponents/GlobalStyles';
import RandomFacts from './Facts/RandomFacts';
import Horseheader from './Horseheader';

const WelcomePage = () => {
  return (
    <ProfileContainer>
      <LeftColumn>
        <UserBox />
        <WeatherBox />
      </LeftColumn>
      <MiddleColumn>
        <Horseheader />
        <UserPage />
      </MiddleColumn>
      <RightColumn>
        <LinksBox>
          <ButtonPrimary><Link to="/mypage">Add horses</Link></ButtonPrimary>
          <RandomFacts />
        </LinksBox>
        <DivSearchLogout>
          <Logout />
        </DivSearchLogout>
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
  font-size: var(--fontSize);
  border: 1.5px solid var(--softPurple);
  border-radius: 30px;
  height: 50px;
  padding: 0 40px;

  &:hover {
    background-color: var(--lemon);
    color: var(--primaryBlack);
    padding: 0 40px;
    height: 50px;
    box-shadow: none!important;
   
  }
`;

const LinksBox = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;
margin-top: 1rem;

@media (max-width: 1023px) {
min-width: 100%;
}

`
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
`
const LeftColumn = styled.div`
grid-area: 1 / 1 / 2 / 2;
`
const MiddleColumn = styled.div`
grid-area: 1 / 2 / 2 / 4;; 
background-color: var(--softPurple);
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
`;

const DivSearchLogout = styled.div`
display:flex;
flex-direction: column;
gap: 1rem;`