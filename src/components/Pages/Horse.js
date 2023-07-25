/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { API_URL } from 'utils/urls';
import { useParams } from 'react-router-dom';
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
              {/* <Link to={`/users/${horseInfo.userId}`}>{horseInfo.username}</Link> */}
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
          <ButtonBoxHorse>
            <StyledLinkAdd to={`/edit/${horseInfo._id}`}>Edit</StyledLinkAdd>
            <StyledLinkAdd to="/welcomepage">Go back</StyledLinkAdd>
          </ButtonBoxHorse>
        </>
      ))}
    </HorseDiv>
  )
};

export default Horse;

const HorseDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 1023px) {
   margin:1rem;
  }
`

const HorseInfoContainer = styled.div`
  margin-bottom: 2rem;
`

const UserInfoDiv = styled.div`
    font-size: 1rem;
  `;

const ButtonBoxHorse = styled.div`
  display:flex;
  flex-direction: column;
  gap:1rem;
  `
