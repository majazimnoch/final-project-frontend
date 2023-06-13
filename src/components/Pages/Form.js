/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import horses from 'reducers/horses';
import styled from 'styled-components';
import { API_URL } from 'utils/urls';
import Input from './Input';
import InputTextArea from './InputTextArea';

const Form = ({ setCollapsed }) => {
  const [horseName, setHorseName] = useState('')
  const [characteristics, setCharacteristics] = useState([])
  const [description, setDescription] = useState('')
  const dispatch = useDispatch();
  const [instructions, setInstructions] = useState([])
  // const [rating, setRating] = useState(0)
  // const [tags, setTags] = useState({})

  const accessToken = localStorage.getItem('token');

  // Submitting new horse
  const onSubmit = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      body: JSON.stringify({
        recipe: {
          name: horseName,
          description,
          characteristics,
          instructions
          // userRating: rating,
          // tags: convertTagsToArray(tags)
        }
      })
    }
    fetch(API_URL('horses'), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(horses.actions.setNewHorse(data.response))
      })
  }

  // const convertTagsToArray = (tagsObject) => {
  //   const tagsArray = [];
  //   Object.keys(tagsObject).forEach(key => {
  //     if (tagsObject[key] === true) {
  //       tagsArray.push(key);
  //     }
  //   })
  //   return tagsArray;
  // }

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

  const closeForm = () => {
    setCollapsed(true)
  }

  // const handleOnChange = (event) => {
  //   const key = event.target.name;
  //   const currentValue = tags[key];
  //   setTags((tags) => ({
  //     ...tags,
  //     [key]: !currentValue
  //   }));
  // }

  return (
    <FormStyledDiv>
      <CreateHorseDiv>
        <h1>Create horse</h1>
        <button type="button" onClick={closeForm} />
      </CreateHorseDiv>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          srOnly="Name of horse"
          placeholder="My horse is called..."
          value={horseName}
          onChange={handleHorseName} />
        <Input
          type="text"
          srOnly="Description"
          placeholder="Say something about your horse"
          value={description}
          onChange={handleDescription} />
        <label>
          Characteristics:
          <InputTextArea
            srOnly="Characteristics"
            placeholder="Separate your horses characteristics with a comma"
            value={characteristics}
            onChange={handleCharacteristics} />
        </label>
        <label>
        Instructions:
          <InputTextArea
            srOnly="Instructions"
            placeholder="Separate the steps by using a line-break after each step"
            value={instructions}
            onChange={handleInstructions} />
        </label>
        <ButtonDiv>
          <AddNewHorseButton type="submit">Add horse</AddNewHorseButton>
        </ButtonDiv>
      </form>
    </FormStyledDiv>
  )
};

export default Form;

const FormStyledDiv = styled.div`
`;

const CreateHorseDiv = styled.div`
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  `;

const AddNewHorseButton = styled.button`
   text-align: center;
   padding: 10px;
  `;
