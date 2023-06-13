/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const HorseDetails = ({ horseInfo }) => {
  // Turning characteristics string into array (to be able to display the characteristics in a list). The string is split at each comma.
  const CharacteristicsIntoList = horseInfo.map((horse) => {
    return (
      horse.characteristics[0].split(',')
    )
  })

  // Turning the instructions string into an array (to be able to display the ingredients in a list). The string is split at each line-break.
  const InstructionsIntoList = horseInfo.map((horse) => {
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
            <div>
              <h1>{horse.name}</h1>
              <p>{horse.description}</p>
            </div>
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
        );
      })}
    </>
  );
};

export default HorseDetails;

const MainHorseDiv = styled.div`
display: flex;
flex-direction: column;
`
const HorseInstructionsDiv = styled.div`
`
const Characteristics = styled.div`
`
const Instructions = styled.div`
`
