import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/urls';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HorseCard from './HorseCard';
import HorsesInList from './HorsesInList';
import Form from './Form';
import SearchForUser from './UserSearch';

const MyPage = () => {
  const [myPosts, setMyPosts] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('userId');

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate('/');
  //   }
  // }, [accessToken, navigate]);

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
        <div>
          <h1>My Horses</h1>
        </div>
        <Form />
      </HeadlineDiv>
      <HorseCard horseList={myPosts} />
      <HorsesInList />
      <SearchForUser />
    </HorseyUser>
  );
};

export default MyPage;

const HorseyUser = styled.div`
  width: 95%;

  @media (min-width: 668px) {
    width: 95%;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }
`;

const HeadlineDiv = styled.div`
`;