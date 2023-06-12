/* eslint-disable no-underscore-dangle */
import { useNavigate, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from 'utils/utils';

const UserPage = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const accessToken = localStorage.getItem('accessToken');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/publicmain');
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    if (!accessToken) {
      navigate('/publicmain');
    } else {
      const fetchOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken
        }
      };

      fetch(API_URL(`users/${params.userId}/posts`), fetchOptions)
        .then((response) => response.json())
        .then((data) => {
          setUsername(data.user.username);
          setPosts(data.response.reverse());
        })
        .catch((e) => {
          console.error('Error:', e);
        });
    }
  }, [accessToken, navigate, params.userId]);

  return (
    <HorseFeed>
      <HeadlineDiv>
        <div>
          <h1>{username}&apos;s horses</h1>
        </div>
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
                    <h3>{singleHorse.horse.name}</h3>
                    <p>{singleHorse.horse.description}</p>
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