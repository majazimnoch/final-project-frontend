/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
      }
    };
    await fetch(API_URL(`horses/${horseid}`), options)
      .then((response) => response.json())
      .then(() => {
      });
  };

  return (
    <HorseList>
      {horseList.map((singleHorse) => (
        <HorseContainer key={singleHorse._id}>
          {singleHorse.horse && (
            <>
              <SmallInfo>
                {/* <Link to={`/users/${singleHorse.userId}`}> */}
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
                {/* </Link> */}
              </SmallInfo>
              <Link to={`/horses/${singleHorse._id}`}>
                <DescriptionDiv>
                  <h3>{singleHorse.horse.name}</h3>
                  <p>{singleHorse.horse.description}</p>
                </DescriptionDiv>
              </Link>
              {/* <Horse horseInfo={[singleHorses]} /> */}
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
display: flex;
flex-direction: column;
gap:1rem;
`;

const HorseContainer = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;
padding: 1rem .5rem;
color: var(--primaryBlack);
`;

const SmallInfo = styled.section`
color: var(--lemon);
`;

const DescriptionDiv = styled.div`
color: var(--primaryWhite);

h3 {
  font-size: 2.5rem;
  color: black;
}

p {
  color: var(--primaryBlack);
  font-size: 1.5rem;
}
`;

const DeleteContainer = styled.div`

`;

const Button = styled.button`
display: none;
`;