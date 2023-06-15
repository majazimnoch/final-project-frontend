/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from 'utils/urls';
import { Link } from 'react-router-dom';

const SearchForUser = () => {
  const [users, setUsers] = useState([])
  const [searchedUsers, setSearchedUsers] = useState([])

  const accessToken = localStorage.getItem('token')

  // get-request to get all usernames
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('users'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.response)
        }
      })
      .catch(((error) => {
        console.error('Error:', error)
      }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  // function to filter all users which names includes the searched word
  const handleSearchChange = (event) => {
    // eslint-disable-next-line max-len
    const filteredUsers = users.filter((user) => user.username.toLowerCase().includes(event.target.value.toLowerCase()))
    if (event.target.value === '') {
      setSearchedUsers('')
    } else {
      setSearchedUsers(filteredUsers)
    }
  }
  const handleClick = () => {
    handleSearchChange('')
  }

  return (
    <>
      <SearchForUserForm onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Name..."
            onChange={handleSearchChange} />
          <button
            type="button"
            onClick={handleClick}>Search
          </button>
        </label>
      </SearchForUserForm>
      {searchedUsers.length !== 0 && (
        <SearchResultsDiv>
          {searchedUsers.map((singleUser) => <Link to={`/users/${singleUser._id}`} onClick={handleClick}>{singleUser.username}</Link>)}
        </SearchResultsDiv>)}
    </>
  )
};

export default SearchForUser;

const SearchForUserForm = styled.form`

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
        
    }

`

const SearchResultsDiv = styled.div`
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