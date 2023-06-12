import React, { useEffect, useState } from 'react';

export const RandomFacts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/random-fact/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>} */}
      {data ? <h1>{data.fact}</h1> : <p>Loading...</p>}
    </div>
  );
}