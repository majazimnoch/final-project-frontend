/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from 'utils/urls';
import { Pinside } from 'components/ReusableComponents/GlobalStyles';
import HorsesInFeed from './HorsesInFeed';

const UserPage = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const accessToken = localStorage.getItem('token');
  // const [responseData, setResponseData] = useState({});
  // const userId = localStorage.getItem('userId');

  const params = useParams()

  useEffect(() => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    };

    fetch(API_URL(`users/${params.userId}/posts`), fetchOptions)
      .then((response) => response.json())
      // .then((data) => setResponseData(data))
      .then((data) => {
        // setUsername(data.user.username || data.response.username); FRON SO:S KOD
        setUsername(data.user.username);
        setPosts(data.response.reverse());
      })
      .catch((e) => {
        console.error('Error:', e);
      });
  }, [accessToken, params.userId]);

  return (
    <HorseFeed>
      <HeadlineDiv>
        <ContainerHorsesText>
          <Pinside uppercase><span>All horses</span></Pinside>
          <h4>{username}</h4>
          <HorsesInFeed />
        </ContainerHorsesText>
      </HeadlineDiv>
      {posts.length > 0 && (
        <HorseList>
          {posts.map((singleHorse) => (
            <HorseContainer key={singleHorse._id}>
              {singleHorse.horse && (
                <div>
                  <SmallDiv>
                    <Link to={`/users/${singleHorse.userId}`}>{singleHorse.username}</Link>,{' '}
                    {`${new Date(singleHorse.createdAt).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false
                    })}`}
                  </SmallDiv>
                  <Link to={`/horses/${singleHorse._id}`} horseid={singleHorse._id}>
                    <Hhorsename>{singleHorse.horse.name}</Hhorsename>
                    <Pinside>{singleHorse.horse.description}</Pinside>
                  </Link>
                </div>
              )}
            </HorseContainer>
          ))}
        </HorseList>
      )}
    </HorseFeed>
  );
};

export default UserPage;

const ContainerHorsesText = styled.div`
margin: 2rem;
`

const HorseFeed = styled.div`
`;

const HeadlineDiv = styled.div`
`;

const HorseList = styled.div`
`;

const HorseContainer = styled.div`
`;

const SmallDiv = styled.div`
`;
const Hhorsename = styled.h3`
color:red;
`;