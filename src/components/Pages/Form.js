/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { StyledButton } from 'components/BeforeLogin/ButtonStyling';
import { useDispatch } from 'react-redux';
import horses from 'reducers/horses';
import styled from 'styled-components';
import { API_URL } from 'utils/urls';
import Input from './Input';

const Form = ({ setCollapsed }) => {
  const [horseName, setHorseName] = useState('')
  const [description, setDescription] = useState('')
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
          description

        }
      })
    }
    fetch(API_URL('horses'), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(horses.actions.setNewHorse(data.response))
      })
  }

  const handleHorseName = (event) => {
    setHorseName(event.target.value)
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
        <h1>Create a horse</h1>
      </CreateHorseDiv>
      <FormAdd onSubmit={(e) => onSubmit(e)}>
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
        <ButtonDiv>
          <StyledButton type="submit">Add a horse</StyledButton>
        </ButtonDiv>
      </FormAdd>
    </FormStyledDiv>
  )
};

export default Form;

const FormStyledDiv = styled.div`
display: flex;
flex-direction: column;
min-width: 200px;
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
  `;