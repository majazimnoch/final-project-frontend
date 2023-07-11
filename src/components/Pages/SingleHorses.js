/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { API_URL } from '../../utils/urls';

const SingleHorses = ({ horseId, horse }) => {
  const [horseDetails, setHorseDetails] = useState(null);
  useEffect(() => {
    const fetchHorseDetails = async () => {
      try {
        const response = await fetch(('https://final-project-backend-q7mqhxeq3q-lz.a.run.app/horses/:horseId'), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (data.success) {
          setHorseDetails(data.response);
        } else {
          // Handle error response
          console.error(data.response);
        }
      } catch (error) {
        // Handle fetch error
        console.error(error);
      }
    };

    fetchHorseDetails();
  }, [horseId]);

  if (!horseDetails) {
    return (
      <MainHorseDiv key={horse._id}>
        <div>
          <h1>{horse.name}</h1>
          <p>{horse.description}</p>
        </div>
        <div>Loading horse details...</div>
      </MainHorseDiv>
    );
  }

//   return (
//     <div>
//       <h1>{horseDetails.name}</h1>
//       <p>{horseDetails.description}</p>
//       {/* Render other horse details */}
//     </div>
//   );
};

export default SingleHorses;

const MainHorseDiv = styled.div`
`;

// const response = await fetch(API_URL(`/horses/${horseId}`), {

// import React from 'react';
// // import styled from 'styled-components';
// // import { API_URL } from '../../utils/urls';

// const SingleHorse = () => {
//   return (
//     //   <MainHorseDiv key={horse._id}>
//   // <div>
//   //   {/* <h1>{horse.name}</h1>
//   //   <p>{horse.description}</p> */}
//   // </div>
//     <div>Loading horse details...</div>
//     //   </MainHorseDiv>
//   );
// }

// //   return (
// //     <div>
// //       <h1>{horseDetails.name}</h1>
// //       <p>{horseDetails.description}</p>
// //       {/* Render other horse details */}
// //     </div>
// //   );
// // };

// export default SingleHorse;

// const MainHorseDiv = styled.div`
// color: black;
// `;

