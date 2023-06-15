/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Pinside } from 'components/ReusableComponents/GlobalStyles';
import { API_URL, API_KEY } from '../../../utils/urls';
import { RandomFactsBox } from './RandomFactsStyle';

const RandomFacts = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL('random-fact'), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <RandomFactsBox>
      {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>} */}
      <Pinside bold> Did you know that..?</Pinside>
      {data ? <Pinside>{data.fact}</Pinside> : <p>Loading...</p>}
    </RandomFactsBox>
  );
}

export default RandomFacts;