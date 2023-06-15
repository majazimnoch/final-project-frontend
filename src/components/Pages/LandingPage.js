import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
