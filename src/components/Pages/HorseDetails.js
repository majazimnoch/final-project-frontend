/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

// EDIT HORSE
// KLAR - 1. ta PATCH-koden från min backend-version och lägg till i backend (feature/edithorse)

// lägga till knapp för att kunna redigera en häst
// göra en ny sida som liknar denna HorseDetails och CREATE /form för att skapa en ny häst
// Hämta hästen från backend och lägga till den datan i fälten som visas
// Create-sidan - alltså HorseDetails ska då uppdateras med den redigerade informationen
// Man vill komma in på Create-formet fast med fälten ifyllda med existerande värden
// och sedan ska Add-knappen på "edit"-sidan ska då skicka den form-datan till PATCH-endpointen
// istället för att uppdatera infon.
//
// MÅSTE hämta horseId - för att uppdatera rätt häst
// hämta datan från den hästen (som den gör här på HorseDetails) - sätta värdena i formen
// till dessa.

const HorseDetails = ({ horseInfo }) => {
  console.log(horseInfo);
  // Turning characteristics string into array (to be able to display the characteristics in a list). The string is split at each comma.
  const CharacteristicsIntoList = horseInfo.map((horse) => {
    if (horse.characteristics.length === 0) {
      return (
        ['EMPTY']
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
        ['EMPTY']
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