import React, { useEffect, useState } from 'react';
import { API_URL } from 'utils/urls';
import styled from 'styled-components';
import { Pinside } from 'components/ReusableComponents/GlobalStyles';
import rideruser from '../../assets/helmet.png';

const UserBox = () => {
  const accessToken = localStorage.getItem('token');
  console.log('Profile', accessToken);
  const [responseData, setResponseData] = useState({});

  const fetchProfile = () => {
    fetch(API_URL('secrets'), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: accessToken
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
          <Pinside>
        Hi {responseData.user.name}, {responseData.secret}
          </Pinside>
        )}
      </HiUserBox>
    </UserBoxContainer>
  )
}

export default UserBox;

const UserBoxContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem 1.5rem;
text-align: center;

box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;
padding: 1rem .5rem;
background-color: var(--lemon);

@media (max-width: 1023px) {
  margin: 1rem 1.5rem;
  }
`
const HiUserBox = styled.div`
`

const Circle = styled.div`
 background: var(--snowWhite);
  border-radius: 50%;
  border: 1px black solid;
  width: 90px;
  height: 90px;
`
const UserImage = styled.img`
position: relative;
top: 5px; left: 0px;
height: 80%;
`;