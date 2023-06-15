/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import horses from 'reducers/horses';
import styled from 'styled-components';
import { API_URL } from 'utils/urls';
import Input from './Input';
// import InputTextArea from './InputTextArea';

const Form = ({ setCollapsed }) => {
  const [horseName, setHorseName] = useState('')
  // const [characteristics, setCharacteristics] = useState([])
  const [description, setDescription] = useState('')
  // const [instructions, setInstructions] = useState([])
  const dispatch = useDispatch();

  // added useEffect below since our horses rerenders all the time and never stops in
  // our MyPage-component - from Daniels tips one Live Session /YK
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
          // characteristics,
          // instructions
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

  // const handleCharacteristics = (event) => {
  //   setCharacteristics(event.target.value)
  // }

  // const handleInstructions = (event) => {
  //   setInstructions(event.target.value)
  // }

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
          placeholder="My horse lives in... "
          value={description}
          onChange={handleDescription} />
        {/* <label>
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
            placeholder="Separate the steps by using a line-break after each step"
            value={instructions}
            onChange={handleInstructions} />
        </label> */}
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
