import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/urls';
import { StyledLinkAdd } from 'components/BeforeLogin/WelcomePage';
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HorseCard from './HorseCard';
// import HorseFeed from './HorseFeed';
import Form from './Form';
import SearchForUser from './UserSearch';

const MyPage = () => {
  const [myPosts, setMyPosts] = useState([]);
  const accessToken = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  // fetch the user's posts
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken || ''
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL(`users/${userId}/posts`), options);
        const data = await response.json();
        setMyPosts(data.response.reverse());
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPosts();
  }, [accessToken, userId]);

  return (
    <HorseyUser>
      <HeadlineDiv>
        <StyledLinkAdd to="/welcomepage">Go back</StyledLinkAdd>
        <h1>My Horses</h1>
        <Form />
      </HeadlineDiv>
      <HorseCard horseList={myPosts} />
      {/* <HorseFeed /> */}
      <SearchForUser />
    </HorseyUser>
  );
};

export default MyPage;

const HorseyUser = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 2rem 1rem;

  @media (min-width: 668px) {
    width: 95%;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }
`;

const HeadlineDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px red solid;

  @media (min-width: 668px) {
    width: 95%;
  }

  @media (min-width: 1024px) {
  align-items: center;
  border: 5px solid;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 2p;
  }

`;