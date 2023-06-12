import React, { useEffect } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux'
import horseReducer from 'reducers/horses';
import { API_URL } from 'utils/utils';
import styled from 'styled-components';

import HorseCard from './HorseCard';

const HorsesInFeed = () => {
  // const [liked, setLiked] = useState([])
  const accessToken = localStorage.getItem('accessToken')
  const dispatch = useDispatch()
  const horseList = useSelector((store) => store.horses.items)

  // Fetch all horses for list
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
          batch(() => {
            dispatch(horseReducer.actions.setItems(data.response))
            dispatch(horseReducer.actions.setError(null))
          })
        } else {
          batch(() => {
            dispatch(horseReducer.actions.setItems([]))
            dispatch(horseReducer.actions.setError(data.response))
          })
        }
      })
      .catch(((e) => {
        console.error('Error:', e)
      }))
  }
  )

  return (
    <HorseFeed>
      <HorseCard horseList={horseList} />
    </HorseFeed>
  )
}
export default HorsesInFeed

const HorseFeed = styled.div`
 `;