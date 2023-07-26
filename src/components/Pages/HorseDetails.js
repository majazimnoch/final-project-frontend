/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const HorseDetails = ({ horseInfo }) => {
  console.log(horseInfo);

  // useState to handle the image URL state
  const [horseImage, setHorseImage] = useState('');

  useEffect(() => {
    setHorseImage(horseInfo.imageUrl)
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
    if (horse.characteristics.length === 0) {
      return (
        ['No characteristics yet - use the Edit-button below to add some']
      )
    }
    return (
      horse.characteristics[0].split(',')
    )
  })

  // Turning the instructions string into an array (to be able to display the instructions in a list). The string is split at each line-break.
  const InstructionsIntoList = horseInfo.map((horse) => {
    if (horse.instructions.length === 0) {
      return (
        ['No instructions yet - use the Edit-button below to add some']
      )
    }
    return (
      horse.instructions[0].split('\n')
    )
  })

  return (
    <>
      {horseInfo.map((horse, index) => {
        const characteristicsList = CharacteristicsIntoList[index];
        const instructionsList = InstructionsIntoList[index];

        return (
          <MainHorseDiv key={horse._id}>
            <HorseIntro>
              <h1>{horse.name}</h1>
              <p>{horse.description}</p>
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
                {/* Show a loading message while the image is being fetched */}
                {!horse.imageUrl ? (
                  <><DetailsPicture src={horseImage} alt="Random horse" /><p>You can add a picture of your horse here, just click edit and place a link in the form!</p></>
                ) : (
                  <DetailsPicture src={horse.imageUrl} alt="Photo of this horse" />
                )}
              </Instructions>
            </HorseInstructionsDiv>
          </MainHorseDiv>
        );
      })}
    </>
  );
};

export default HorseDetails;

const MainHorseDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-items: center;
`
const HorseIntro = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`
const HorseInstructionsDiv = styled.div`
`
const Characteristics = styled.div`
`
const Instructions = styled.div`
`
const DetailsPicture = styled.img`

@media (max-width: 1023px) {
   max-width: 300px;
  }
`