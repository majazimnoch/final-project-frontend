import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { StyledButton } from 'components/BeforeLogin/ButtonStyling';

const LandingPage = () => {
  const [token] = useState(() => localStorage.getItem('token'));
  console.log('Profile', token);
  return (
    <PageContainer>
      <h1>Hello! Welcome to the inside of Horsey App!</h1>
      <h2>Do you want to go to the next page?</h2>
      <Link to="/logout">Click to continue to Logout</Link>
      <Link to="/mypage">Click to continue to MyPage</Link>
      <Link to="/userpage">Click to continue to UserPage</Link>
      {/* <ProfileButton type="button" onClick={handleLogout}>Logout</ProfileButton> */}
    </PageContainer>
  );
}

export default LandingPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;

 h1 {
  color: blue;
 }

 h2 {
  color: green;
 }
`;

// const ProfileButton = styled.button`
//   border-radius: 5px;
//   border: 3px solid #ffffff;
//   cursor: pointer;
//   width: 7rem;
//   background-color: #ffb140;
//   color: #56282d;
//   font-size: 1rem;
//   font-weight: bold;
//   margin-top: 1.5rem;
//   margin-bottom: 1.5rem;
//   padding: 0.8rem;

//   @media (max-width: 664px) {
//     border-radius: 10px;
//     border: 1px solid #ffffff;
//     padding: 0.3rem;
//     }
//   `;
