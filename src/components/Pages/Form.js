/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import horses from 'reducers/horses';
import styled from 'styled-components';
import { API_URL } from 'utils/urls';
import { Pinside } from 'components/ReusableComponents/GlobalStyles';
import { Link } from 'react-router-dom';
import Input from './Input';
import InputTextArea from './InputTextArea';

const Form = ({ setCollapsed }) => {
  const [horseName, setHorseName] = useState('')
  const [characteristics, setCharacteristics] = useState([])
  const [description, setDescription] = useState('')
  const [instructions, setInstructions] = useState([])
  const [imageUrl, setImageUrl] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Inside useEffect');
  }, []);

  const accessToken = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  // Submitting new horse
  const onSubmit = () => {
    const options = {
      method: 'POST',
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
          instructions,
          imageUrl
        }
      })
    }
    fetch(API_URL('horses'), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(horses.actions.setNewHorse(data.response))
        window.location.reload();
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

  const handleImageUrl = (event) => {
    setImageUrl(event.target.value)
  }

  // eslint-disable-next-line no-unused-vars
  const closeForm = () => {
    setCollapsed(true)
  }

  return (
    <FormStyledDiv>
      <CreateHorseDiv>
        <h1>Create a horse</h1>
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
              placeholder="My horse is based in... "
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
            <Pinside>Image link:</Pinside>
            <Input
              type="text"
              srOnly="ImageUrl"
              placeholder="Add a URL to an image"
              value={imageUrl}
              onChange={handleImageUrl} />
          </ExtraInfoBox>
        </FormQuestionsBox>
        <ButtonDiv>
          <ButtonAdd type="submit">Add a horse</ButtonAdd>
          <ButtonAdd><Link to="/welcomepage">Go back</Link></ButtonAdd>
        </ButtonDiv>
      </FormAdd>
    </FormStyledDiv>
  )
};

export default Form;

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