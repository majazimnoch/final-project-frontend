/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { StyledLinkAdd } from './WelcomePage';

const HorseDetails = ({ horseInfo }) => {
  console.log(horseInfo);

  // useState to handle the image URL state
  const [horseImage, setHorseImage] = useState('');

  useEffect(() => {
    setHorseImage(horseInfo[0].horse.imageUrl)
    fetch('https://source.unsplash.com/500x500/?horses')
      .then((response) => {
        setHorseImage(response.url);
      })
      .catch((error) => {
        console.error('Error fetching horse image:', error);
      });
  }, [horseInfo]);

  // Turning characteristics string into array (to be able to display the characteristics in a list). The string is split at each comma.
  const CharacteristicsIntoList = horseInfo.map((horse) => {
    console.log(horse)
    if (horse.horse.characteristics.length === 0) {
      return (
        ['No characteristics yet - use the Edit-button below to add some']
      )
    }
    return (
      horse.horse.characteristics[0].split(',')
    )
  })

  // Turning the instructions string into an array (to be able to display the instructions in a list). The string is split at each line-break.
  const InstructionsIntoList = horseInfo.map((horse) => {
    if (horse.horse.instructions.length === 0) {
      return (
        ['No instructions yet - use the Edit-button below to add some']
      )
    }
    return (
      horse.horse.instructions[0].split('\n')
    )
  })

  return (
    <>
      {horseInfo.map((horse, index) => {
        const characteristicsList = CharacteristicsIntoList[index];
        const instructionsList = InstructionsIntoList[index];

        return (
          <TwoParts>
            <LeftHorsedetail>
              <MainHorseDiv key={horse.horse._id}>
                <HorseIntro>
                  <h1>{horse.horse.name}</h1>
                  <p>{horse.horse.description}</p>
                </HorseIntro>
                <HorseInstructionsDiv>
                  <Characteristics>
                    <h2>Characteristics</h2>
                    <ul>
                      {characteristicsList.map((li) => (
                        <li key={uuidv4()}>{li}</li>
                      ))}
                    </ul>
                  </Characteristics>
                  <Instructions>
                    <h2>Instructions</h2>
                    <ol>
                      {instructionsList.map((li) => (
                        <li key={uuidv4()}>{li}</li>
                      ))}
                    </ol>
                  </Instructions>
                </HorseInstructionsDiv>
              </MainHorseDiv>
            </LeftHorsedetail>
            <RightHorsedetail>
              {/* Show a loading message while the image is being fetched */}
              {!horse.imageUrl ? (
                  <><DetailsPicture src={horseImage} alt="Random horse" /><p>You can add a picture of your horse here</p></>
                ) : (
                  <DetailsPicture src={horse.horse.imageUrl} alt="Photo of this horse" />
                )}
              <ButtonBoxHorse>
                <StyledLinkAdd to={`/edit/${horseInfo[0]._id}`}>Edit</StyledLinkAdd>
                <StyledLinkAdd to="/welcomepage">Go back</StyledLinkAdd>
              </ButtonBoxHorse>
            </RightHorsedetail>
          </TwoParts>
        );
      })}
    </>
  );
};

export default HorseDetails;

const TwoParts = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 2rem;
grid-row-gap: 2rem;
@media (max-width: 1023px) {
  width: 80vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  }
`
const LeftHorsedetail = styled.div`
grid-area: 1 / 1 / 2 / 3; 
`
const RightHorsedetail = styled.div`
grid-area: 1 / 3 / 2 / 4;
`
const MainHorseDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-items: center;
gap:2rem;
`
const HorseIntro = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;
padding: 1rem .5rem;
width: 50vw;

@media (max-width: 1023px) {
  width: 80vw;
  }
`
const HorseInstructionsDiv = styled.div`
display: flex;
flex-direction: column;
gap:2rem;
`
const Characteristics = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;
padding: 1rem .5rem;
width: 50vw;

@media (max-width: 1023px) {
  width: 80vw;
  }
`
const Instructions = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;
padding: 1rem .5rem;
width: 50vw;

@media (max-width: 1023px) {
  width: 80vw;
  }
`
const DetailsPicture = styled.img`
max-width:30vw;
max-height:30vh;
border-radius:10px;

@media (max-width: 1023px) {
  width: 100%;
  min-width: 200px;
  height: auto;
  margin: 0 auto;
  }
`
const ButtonBoxHorse = styled.div`
  display:flex;
  flex-direction: column;
  gap:1rem;

  @media (max-width: 1023px) {
  margin-bottom: 2rem;
  }
  `