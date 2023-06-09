import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StyledButton } from 'components/BeforeLogin/ButtonStyling';

const token = localStorage.getItem('token');

const Profile = ({ API_URL }) => {
  const [responseData, setResponseData] = useState({});

  const fetchProfile = () => {
    fetch(`${API_URL}/secrets`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: token
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfileContainer>
      {responseData.user && (
        <h1>
          Hi {responseData.user.name}, {responseData.secret}
          What are we doing
        </h1>
      )}
      <StyledButton type="button" onClick={handleLogout}>Logout</StyledButton>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;
background-color: lightblue;

h1 {
  font-size: 3rem;
  color: #56282d;
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