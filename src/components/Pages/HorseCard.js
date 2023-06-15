/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Button from 'components/BeforeLogin/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/BeforeLogin/Button';
import { API_URL } from 'utils/urls';

const HorseCard = ({ horseList }) => {
  const userId = localStorage.getItem('userId');
  const accessToken = localStorage.getItem('token');

  const onDeleteClick = async (horseid) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
        // userId here too?
      }
    };
    await fetch(API_URL(`horses/${horseid}`), options)
      .then((response) => response.json())
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <HorseList>
      {horseList.map((singleHorse) => (
        <HorseContainer key={singleHorse._id}>
          {singleHorse.horse && (
            <>
              <SmallInfo>
                <Link to={`/users/${singleHorse.userId}`}>
                  {singleHorse.username},
                  {`${new Date(singleHorse.createdAt).toLocaleDateString(
                    'en-us',
                    {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false
                    }
                  )}`}
                </Link>
              </SmallInfo>
              <Link to={`/horses/${singleHorse._id}`}>
                <DescriptionDiv>
                  <h3>{singleHorse.horse.name}</h3>
                  <p>{singleHorse.horse.description}</p>
                </DescriptionDiv>
              </Link>
            </>
          )}
          <DeleteContainer>
            {singleHorse.userId === userId && (
              <Button
                type="button"
                onClick={() => onDeleteClick(singleHorse._id)}
                data-horseid={singleHorse._id} />
            )}
          </DeleteContainer>
        </HorseContainer>
      ))}
    </HorseList>
  );
};

export default HorseCard;

const HorseList = styled.div`

`;

const HorseContainer = styled.div`

`;

const SmallInfo = styled.section`

`;

const DescriptionDiv = styled.div`

`;

const DeleteContainer = styled.div`

`;