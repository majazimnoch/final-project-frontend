import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../../../utils/urls';
import { RandomFactsBox } from './RandomFactsStyle';
// refactored a bit and added the API_KEY to connect the FE to the BE and then they are authorized
// thanks to a middleware in the BE-repo - Folder: Middlewares, File: apikey-authentication

export const RandomFacts = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // change the localhostlink to https://final-project-backend-q7mqhxeq3q-lz.a.run.app/random-fact/
        // const response = await fetch('http://localhost:8080/random-fact/');
        const response = await fetch(API_URL('random-facts'), {
          method: 'GET',
          headers: {
            'x-api-key': API_KEY
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
      {data ? <h1>{data.fact}</h1> : <p>Loading...</p>}
    </RandomFactsBox>
  );
}