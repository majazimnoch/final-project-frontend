/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { API_URL } from 'utils/urls';
import { Pinside } from 'components/ReusableComponents/GlobalStyles';
import Input from './Input';
import InputTextArea from './InputTextArea';

const EditHorse = ({ setCollapsed }) => {
  const accessToken = localStorage.getItem('token')
  const params = useParams();

  const [horseName, setHorseName] = useState('')
  const [characteristics, setCharacteristics] = useState([])
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState([])
  const navigate = useNavigate();

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
        console.log(data.response[0].horse);
        setHorseName(data.response[0].horse.name)
        setDescription(data.response[0].horse.description)
        setInstructions(data.response[0].horse.instructions)
        setCharacteristics(data.response[0].horse.characteristics)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // This message above that dependencies are missing was nothing to worry about - it works anyway

  useEffect(() => {
    console.log('Inside useEffect');
  }, []);

  const userId = localStorage.getItem('userId');

  // Submitting edited horse
  const onSubmit = (e) => {
    e.preventDefault()
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
        userId
      },
      body: JSON.stringify({
        horse: {
          name: horseName,
          description,
          characteristics,
          instructions
        }
      })
    }
    fetch(API_URL(`horses/${params.horseId}`), options)
      .then((res) => res.json())
      .then(() => {
        navigate(`/horses/${params.horseId}`);
      })
  }

  const handleHorseName = (event) => {
    setHorseName(event.target.value)
  }

  const handleCharacteristics = (event) => {
    setCharacteristics(event.target.value)
  }

  const handleInstructions = (event) => {
    setInstructions(event.target.value)
  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  // eslint-disable-next-line no-unused-vars
  const closeForm = () => {
    setCollapsed(true)
  }

  return (
    <FormStyledDiv>
      <CreateHorseDiv>
        <h1>Edit your horse</h1>
      </CreateHorseDiv>
      <FormAdd onSubmit={(e) => onSubmit(e)}>
        <FormQuestionsBox>
          <BasicInfoBox>
            <Input
              type="text"
              srOnly="Name of horse"
              placeholder="My horse is called..."
              value={horseName}
              onChange={handleHorseName} />
            <Input
              type="text"
              srOnly="Description"
              placeholder="Fact about my horse... "
              value={description}
              onChange={handleDescription} />
          </BasicInfoBox>
          <ExtraInfoBox>
            <label>
              <Pinside>Characteristics:</Pinside>
              <InputTextArea
                srOnly="Characteristics"
                placeholder="Separate your horses characteristics with a comma"
                value={characteristics}
                onChange={handleCharacteristics} />
            </label>
            <label>
              <Pinside>Instructions:</Pinside>
              <InputTextArea
                srOnly="Instructions"
                placeholder="Separate the instructions by using a new line for each new one"
                value={instructions}
                onChange={handleInstructions} />
            </label>
          </ExtraInfoBox>
        </FormQuestionsBox>
        <ButtonDiv>
          <ButtonAdd type="submit">Save your horse</ButtonAdd>
          <ButtonAdd><Link to="/welcomepage">Go back</Link></ButtonAdd>
        </ButtonDiv>
      </FormAdd>
    </FormStyledDiv>
  )
};

export default EditHorse;

const FormQuestionsBox = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;

@media (max-width: 1023px) {
    flex-direction: column;
}
`;

const BasicInfoBox = styled.div`
display:flex;
flex-direction:column;
gap: 2rem;
margin-top: .7rem;
margin-right: 2rem;

@media (max-width: 1023px) {
    margin-right: 0;
}`;

const ExtraInfoBox = styled.div`
display:flex;
flex-direction:row;
gap: 2rem;

@media (max-width: 1023px) {
    flex-direction: column;
}

`;

const FormStyledDiv = styled.div`
display: flex;
flex-direction: column;
min-width: 200px;
`;

const CreateHorseDiv = styled.div`
text-align: center;
`;

const FormAdd = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap:2rem;
`;
const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
gap: 1rem;

@media (max-width: 1023px) {
    flex-direction: column;
}
`;

const ButtonAdd = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1rem 1.5rem;
background-color: var(--softPurple);
color: var(--primaryWhite);
font-size: var(--fontSize);
border: 1.5px solid var(--softPurple);
border-radius: 30px;
height: 50px;
text-decoration: none;
cursor: pointer;
&:hover {
  background-color: var(--lemon);
  color: var(--primaryBlack);
  transition: 0.2s;
}

@media (max-width: 1023px) {
    font-size: 24px;
}
`