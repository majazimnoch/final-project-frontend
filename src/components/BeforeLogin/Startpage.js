import React, { useState, useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components'
import Button from './Button';

const Startpage = ({ API_URL }) => {
  const [responseData, setResponseData] = useState({});
  const fetchProfile = () => {
    fetch(`${API_URL}/secrets`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => response.json())
      .then((data) => setResponseData(data));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <ProfileContainer>
      {responseData.user && (
        <h1>
          Hi {responseData.user.name}, {responseData.secret}
        </h1>
      )}
      <Button type="button" onClick={handleLogout}>Logout</Button>
    </ProfileContainer>
  );
};

export default Startpage;

const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;
background-color: rgba(167, 205, 189, 0.9);
`;