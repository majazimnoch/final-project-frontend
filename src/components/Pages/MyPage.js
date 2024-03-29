import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/urls';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HorseCard from './HorseCard';
import Form from './Form';

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
        // const response = await fetch(API_URL(`users/${userId}/posts`), options);
        // const data = await response.json(); DETTA ÄR FRÅN SO:S KOD
        const url = API_URL(`users/${userId}/posts`);
        console.log('API URL:', url);
        const response = await fetch(url, options);
        const data = await response.json();
        console.log('Response:', data);

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
        {/* <ButtonPrimary><Link to="/welcomepage">Go back</Link></ButtonPrimary> */}
        {/* <StyledLinkAdd to="/welcomepage">Go back</StyledLinkAdd> */}
        <Form />
      </HeadlineDiv>
      <HorseCard horseList={myPosts} />
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
  }

  @media (min-width: 1024px) {
  }
`;

const HeadlineDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 668px) {
   
  }

  @media (min-width: 1024px) {
  }

`;