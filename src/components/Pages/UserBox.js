import React, { useEffect, useState } from 'react';
import { API_URL } from 'utils/urls';
import styled from 'styled-components';
import rideruser from '../../assets/horse-rider-icon.svg';

const UserBox = () => {
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

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <UserBoxContainer>
      <Circle>
        <UserImage src={rideruser} alt="horse rider icon" />
      </Circle>
      <HiUserBox>
        {responseData.user && (
          <h6>
        Hi {responseData.user.name}, {responseData.secret}
          </h6>
        )}
      </HiUserBox>
    </UserBoxContainer>
  )
}

export default UserBox;

const UserBoxContainer = styled.div`
border: 1px red solid;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem 0;

`
const HiUserBox = styled.div`
border: 1px green solid;
`

const Circle = styled.div`
  background: var(--snowWhite);
  border-radius: 50%;
  border: 1px black solid;
  width: 120px;
  height: 120px;
`
const UserImage = styled.img`
position: relative;
top: 5px; left: 12px;
height: 80%;
  
`