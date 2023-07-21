/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { API_URL } from 'utils/urls';
import { ButtonPrimary, Pinside } from 'components/ReusableComponents/GlobalStyles';
import Input from './Input';
import InputTextArea from './InputTextArea';
import plusicon from '../../assets/add.png';

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
      <div>
        <h1>Edit your horse</h1>
      </div>
      <FormCreateHorseBox>
        <FormAdd onSubmit={(e) => onSubmit(e)}>
          <FormCreateFieldsBox>
            <FormCreateHorseLeft>
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
            </FormCreateHorseLeft>
            <FormCreateHorseRight>
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
            </FormCreateHorseRight>
          </FormCreateFieldsBox>
          <ButtonDiv>
            <ButtonAdd type="submit">
              <PlusSign src={plusicon} alt="Icon" />
              <div>
              Save your horse
              </div>
            </ButtonAdd>
            <ButtonPrimary><Link to="/welcomepage">Go back</Link></ButtonPrimary>
          </ButtonDiv>
        </FormAdd>
      </FormCreateHorseBox>
    </FormStyledDiv>
  )
};

export default EditHorse;

const FormStyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin: 0 auto;
`;

const FormCreateHorseBox = styled.div`
display: flex;
flex-direction: column;
`;

const FormCreateFieldsBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

const FormAdd = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
`;

const FormCreateHorseLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
`;

const FormCreateHorseRight = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 2rem;
`;

const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
align-content: left;
width: 100%;
margin-top: 2rem;
`;

const PlusSign = styled.img`
top: 100px; left: 0px;
height: 80%;
`;

export const ButtonAdd = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;
  background-color: var(--primaryWhite);
  color: var(--primaryBlack);
  font-size: var(--fontSize);
  border: 1.5px solid var(--softPurple);
  border-radius: 30px;
  height: 50px;
  padding: 0 40px;
  
  &:hover {
    background-color: var(--softPurple);
    color: var(--primaryWhite);
    transition: 0.2s;
  }
`;