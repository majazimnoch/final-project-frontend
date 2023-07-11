// /* eslint-disable no-underscore-dangle */
// import React, { useEffect } from 'react';
// import { useDispatch, batch } from 'react-redux';
// import horseReducer from 'reducers/horses';
// import { StyledLinkAdd } from 'components/Pages/WelcomePage';
// import styled from 'styled-components';
// import { API_URL } from '../../utils/urls';

// const SingleHorses = (singleHorse, horse) => {
//   const accessToken = localStorage.getItem('token')
//   const dispatch = useDispatch()
//   // const horse = useSelector((store) => store.horse.item)

//   // Fetch individual horse
//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: accessToken
//       }
//     }
//     fetch(API_URL('horses/:horseId'), options)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           batch(() => {
//             dispatch(horseReducer.actions.setItems(data.response))
//             dispatch(horseReducer.actions.setError(null))
//           })
//         } else {
//           batch(() => {
//             dispatch(horseReducer.actions.setItems([]))
//             dispatch(horseReducer.actions.setError(data.response))
//           })
//         }
//       })
//       .catch(((e) => {
//         console.error('Error:', e)
//       }))
//   }, [accessToken, dispatch, singleHorse._id])

//   return (
//     <MainHorseDiv key={horse._id}>
//       <p>{singleHorse.horse}</p>
//       {/* <h3>{singleHorse.horse.name}</h3>
//       <p>{singleHorse.horse.description}</p> */}
//       <h1>{horse.name}</h1>
//       <p>{horse.description}</p>
//       <div>Loading horse details...</div>
//       <StyledLinkAdd to="/welcomepage">Go back</StyledLinkAdd>
//     </MainHorseDiv>
//   )
// }

// export default SingleHorses;

// const MainHorseDiv = styled.div`
// color: black;
// `;

// // fetch(API_URL(`horses/${singleHorse._id}`), options)

// // const response = await fetch(API_URL(`/horses/${horseId}`), {

// // import React from 'react';
// // // import styled from 'styled-components';
// // // import { API_URL } from '../../utils/urls';

// // const SingleHorse = () => {
// //   return (
// //     //   <MainHorseDiv key={horse._id}>
// //   // <div>
// //   //   {/* <h1>{horse.name}</h1>
// //   //   <p>{horse.description}</p> */}
// //   // </div>
// //     <div>Loading horse details...</div>
// //     //   </MainHorseDiv>
// //   );
// // }

// // //   return (
// // //     <div>
// // //       <h1>{horseDetails.name}</h1>
// // //       <p>{horseDetails.description}</p>
// // //       {/* Render other horse details */}
// // //     </div>
// // //   );
// // // };

// // export default SingleHorse;

// // const MainHorseDiv = styled.div`
// // color: black;
// // `;

