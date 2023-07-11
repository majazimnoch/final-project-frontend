/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { API_URL } from 'utils/urls';
import { useParams, Link } from 'react-router-dom';
import { StyledLinkAdd } from 'components/Pages/WelcomePage';
import styled from 'styled-components';
import HorseDetails from './HorseDetails';

const Horse = () => {
  const [horse, setHorse] = useState([])
  const accessToken = localStorage.getItem('token')
  const params = useParams();

  // Fetching single horses by Id
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL(`horses/${params.horseId}`), options)
      .then((res) => res.json())
      .then((data) => {
        setHorse(data.response)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [accessToken, params.horseId])

  return (
    <HorseDiv>
      {horse.map((horseInfo) => (
        <>
          <HorseInfoContainer key={horseInfo._id}>
            <UserInfoDiv>
              <Link to={`/users/${horseInfo.userId}`}>{horseInfo.username}</Link>
              <p>{`${new Date(horseInfo.createdAt).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
              })}`}
              </p>
            </UserInfoDiv>
            <HorseDetails horseInfo={[horseInfo.horse]} />
          </HorseInfoContainer>
          <StyledLinkAdd to="/welcomepage">Go back</StyledLinkAdd>
        </>
      ))}
    </HorseDiv>
  )
};

export default Horse;

const HorseDiv = styled.div`
  margin-top: 50px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 668px) {
      margin-top: 70px;
      width: 90%;
    }

  @media (min-width: 1024px) {
    margin-top: 100px;
    width: 60%;
  }
`

const HorseInfoContainer = styled.div`
  margin-bottom: 100px;

  @media (min-width: 1025px) {
    margin-bottom: 200px;

  }
`

const UserInfoDiv = styled.div`
    font-size: 1rem;
    
    @media (min-width: 668px) {
      margin-top: 40px;
    }
  `;