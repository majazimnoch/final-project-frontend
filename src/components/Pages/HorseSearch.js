/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from 'utils/urls';
import { Link } from 'react-router-dom';

const SearchForHorses = () => {
  const [horses, setHorses] = useState([])
  const [searchedHorses, setSearchedHorses] = useState([])

  const accessToken = localStorage.getItem('token')

  // get-request to get all horse names
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('horses'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setHorses(data.response)
        }
      })
      .catch(((e) => {
        console.error('Error:', e)
      }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  // function to filter all users which names includes the searched word
  const handleSearchChange = (event) => {
    // eslint-disable-next-line max-len
    const filteredHorses = horses.filter((horse) => horse.username.toLowerCase().includes(event.target.value.toLowerCase()))
    if (event.target.value === '') {
      setSearchedHorses('')
    } else {
      setSearchedHorses(filteredHorses)
    }
  }
  const handleClick = () => {
    handleSearchChange('')
  }

  return (
    <>
      <SearchForHorseForm onSubmit={handleSubmit}>
        <label>Search for horse
          <input
            type="text"
            placeholder="Search for horse by name.."
            onChange={handleSearchChange} />
          <button
            type="button">Click
          </button>
        </label>
      </SearchForHorseForm>
      {searchedHorses.length !== 0 && (
        <SearchResDiv>
          {searchedHorses.map((singleHorse) => <Link to={`/horses/${singleHorse._id}`} onClick={handleClick}>{singleHorse.username}</Link>)}
        </SearchResDiv>)}
    </>
  )
}

export default SearchForHorses;

const SearchForHorseForm = styled.form`

    label {
        display: flex;
        background: white;
        border-radius: 10px;
        padding: 5px 10px;
        justify-content: space-between;
    }

    input {
        border: none;
        width: 100%;
    }

    button {
        border: none;
        background-color: inherit;
    }

    @media (min-width: 1024px) {
        position: absolute;
        right: 2.5%;
        top: 30px;
    }

`

const SearchResDiv = styled.div`
    margin-top: 5px;
    height: 200px;
    background-color: white;
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    @media (min-width: 1024px) {
        position: absolute;
        right: 2.5%;
        top: 80px;
        width: 340px;
        align-items: flex-start;
    }
`