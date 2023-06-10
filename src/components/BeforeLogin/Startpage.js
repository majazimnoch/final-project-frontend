import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from '../../utils/urls';
// import LandingPage from '../Pages/LandingPage';

// const token = localStorage.getItem('token');

const Profile = () => {
  const [token] = useState(() => localStorage.getItem('token'));
  console.log('Profile', token);
  const [responseData, setResponseData] = useState({});

  const fetchProfile = () => {
    fetch(API_URL('secrets'), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: token
      }
    })
      .then((response) => response.json())
      .then((data) => setResponseData(data));
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   window.location.reload();
  // }

  useEffect(() => {
    fetchProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProfileContainer>
      {responseData.user && (
        <h1>
          Hi {responseData.user.name}, {responseData.secret}
        </h1>
      )}
      {/* <ContinueButton type="button" onClick={<LandingPage />}>Continue</ContinueButton> */}
      <Link to="/landingpage">Click to continue</Link>
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
background-color: rgba(167, 205, 189, 0.9);

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
// const ContinueButton = styled.button`
// border-radius: 5px;
// border: 3px solid #ffffff;
// cursor: pointer;
// width: 7rem;
// background-color: #ffb140;
// color: #56282d;
// font-size: 1rem;
// font-weight: bold;
// margin-top: 1.5rem;
// margin-bottom: 1.5rem;
// padding: 0.8rem;

// @media (max-width: 664px) {
//   border-radius: 10px;
//   border: 1px solid #ffffff;
//   padding: 0.3rem;
//   }
// `;