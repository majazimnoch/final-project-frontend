/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { ButtonPrimary, Pinside } from 'components/ReusableComponents/GlobalStyles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { API_URL } from 'utils/urls';

const HorseCard = ({ horseList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleHorses = horseList.slice(0, endIndex).reverse();

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
        // Handle response if needed
      });
  };

  const handleNextPage = () => {
    if (endIndex < horseList.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <HorseList>
      {visibleHorses.map((singleHorse) => (
        <HorseContainer key={singleHorse._id}>
          {singleHorse.horse && (
            <>
              <SmallInfo>
                <Pinside>{/* <Link to={`/users/${singleHorse.userId}`}> */}
                  {singleHorse.username},{' '}
                  {`${new Date(singleHorse.createdAt).toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                  })}`}
                </Pinside>
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
      {horseList.length > itemsPerPage && (
        <Pagination>
          {currentPage > 1 && (
            <ButtonPrimary onClick={handlePreviousPage}>Previous</ButtonPrimary>
          )}
          {endIndex < horseList.length && (
            <ButtonPrimary onClick={handleNextPage}>Next</ButtonPrimary>
          )}
        </Pagination>
      )}
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
padding: 0;
margin: 0;
`;

const DescriptionDiv = styled.div`
color: var(--primaryWhite);

h3 {
  font-size: 1.5rem;
  color: black;
}

p {
  color: var(--primaryBlack);
  font-size: 1rem;
}
`;

const DeleteContainer = styled.div`

`;

const Button = styled.button`
display: none;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;
