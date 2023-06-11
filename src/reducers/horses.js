/* eslint-disable max-len */
// import { createSlice } from '@reduxjs/toolkit';
// // import { MONGO_DB_URL } from '../utils/urls';

// export const horse = createSlice({
//   name: 'horse',
//   initialState: {
//     horseName: null,
//     horseId: null,
//     createdAt: null,
//     cards: [],
//     error: null,
//     isLoadingPost: false,
//     isLoadingGet: false,
//     isSuccessful: false,
//     horseList: [],
//     newHorse: null,
//     deleteHorse: null,
//     deleteCardFromHorse: null,
//     updateCardInHorse: null
//   },
//   reducers: {
//     setHorseName: (store, action) => {
//       store.horseName = action.payload
//     },
//     setHorseId: (store, action) => {
//       store.horseId = action.payload
//     },
//     setCreatedAt: (store, action) => {
//       store.createdAt = action.payload
//     },
//     setCards: (store, action) => {
//       store.cards = action.payload
//     },
//     setError: (store, action) => {
//       store.error = action.payload
//     },
//     setLoadingPost: (store, action) => {
//       store.isLoadingPost = action.payload;
//     },
//     setLoadingGet: (store, action) => {
//       store.isLoadingGet = action.payload;
//     },
//     setSuccess: (store, action) => {
//       store.isSuccessful = action.payload
//     },
//     setHorseList: (store, action) => {
//       console.log('Setting horseList:', action.payload);
//       if (!Array.isArray(action.payload)) {
//         console.error('setHorseList was called with a non-array value:', action.payload);
//       }
//       store.horseList = action.payload;
//     },
//     setNewHorse: (store, action) => {
//       store.newHorse = action.payload;
//     },
//     setDeleteHorse: (store, action) => {
//       store.deleteHorse = action.payload;
//     },
//     setDeleteCardFromHorse: (store, action) => {
//       store.deleteCardFromHorse = action.payload;
//     },
//     setUpdateCardInHorse: (store, action) => {
//       store.updateCardInHorse = action.payload;
//     }
//   }
// });

// // Thunk making a GET-request for all available horses from the database
// export const fetchHorses = () => {
//   return (dispatch, getState) => {
//     dispatch(horse.actions.setLoadingGet(true))

//     const options = {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: getState().user.accessToken
//       }
//     }
//     fetch(MONGO_DB_URL('horses'), options)
//       .then((response) => response.json())
//       .then((response) => {
//         console.log('API response:', response); // Log the entire response object
//         if (response.success) {
//           dispatch(horse.actions.setError(null));
//           const responseData = response.response.data; // Access the correct data
//           console.log('responseData:', responseData);
//           dispatch(horse.actions.setTripList(responseData)); // Dispatch the correct data
//         } else {
//           dispatch(horse.actions.setError(response.response));
//         }
//       })
//       .catch((error) => {
//         dispatch(horse.actions.setError(error))
//         console.log('error', error)
//       })
//       .finally(() => {
//         setTimeout(() => {
//           dispatch(horse.actions.setLoadingGet(false));
//         }, 2000);
//       })
//   };
// };

// // Thunk making a POST-request to add a new horse to the database
// export const postNewHorse = (value) => {
//   return (dispatch, getState) => {
//     dispatch(horse.actions.setLoadingPost(true))
//     dispatch(horse.actions.setSuccess(false))

//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // eslint-disable-next-line quote-props
//         'Authorization': getState().user.accessToken
//       },
//       body: JSON.stringify({ horseName: value })
//     };

//     fetch(MONGO_DB_URL('horses'), options)
//     // postNewHorse
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.success) {
//           dispatch(horse.actions.setError(null));
//           const responseData = response.response.data; // this is expected to be a single horse
//           console.log('responseData:', responseData);
//           dispatch(horse.actions.setNewTrip(responseData));
//         } else {
//           dispatch(horse.actions.setTripList([]));
//           dispatch(horse.actions.setError(response));
//         }
//         console.log('response:', response)
//       })

//       .catch((error) => {
//         dispatch(horse.actions.setError(error))
//         console.log('error', error)
//       })
//       .finally(() => {
//         setTimeout(() => {
//           dispatch(horse.actions.setLoadingPost(false));
//           dispatch(horse.actions.setSuccess(true));
//         }, 2000);
//         setTimeout(() => {
//           dispatch(fetchHorses());
//         }, 2000);
//       })
//   };
// };

// // Thunk making a PATCH-request to add a new card to the card array in a horse in the database
// export const patchHorseWithNewCard = (horseId, place) => {
//   // const { cardIcon, cardName, cardPhotoRef, cardPlaceId, cardRating, cardVicinity } = req.body;
//   return (dispatch, getState) => {
//     dispatch(horse.actions.setLoadingPost(true))

//     const options = {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         // eslint-disable-next-line quote-props
//         'Authorization': getState().user.accessToken
//       },
//       body: JSON.stringify({
//         cardIcon: place.icon,
//         cardName: place.name,
//         cardPhotoRef: place.photos[0].photo_reference,
//         cardPlaceId: place.place_id
//       })
//     };

//     fetch(MONGO_DB_URL(`horses/${horseId}/cards`), options)
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.success) {
//           // eslint-disable-next-line no-underscore-dangle
//           dispatch(horse.actions.setError(null));
//           // const responseData = response.response.data; // Access the correct data
//           console.log('response from patch request:', response);
//           // dispatch(horse.actions.setHorseList(responseData));
//         } else {
//           // dispatch(horse.actions.setHorseList([]));
//           dispatch(horse.actions.setError(response));
//         }
//       })
//       .catch((error) => {
//         dispatch(horse.actions.setError(error))
//         console.log('error', error)
//       })
//       .finally(() => {
//         dispatch(horse.actions.setLoadingPost(false));
//       })
//   };
// };

// // Thunk making a DELETE-request to delete a horse from the database
// export const deleteTrip = (horseId) => {
//   return (dispatch, getState) => {
//     dispatch(horse.actions.setLoadingPost(true))

//     const options = {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         // eslint-disable-next-line quote-props
//         'Authorization': getState().user.accessToken
//       },
//       body: JSON.stringify({ horseId })
//     };

//     fetch(MONGO_DB_URL(`horses/${horseId}`), options)
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.success) {
//           dispatch(horse.actions.setError(null));
//           const responseData = response.response.data;
//           console.log('responseData:', responseData);
//           dispatch(horse.actions.setDeleteTrip(horseId));
//         } else {
//           dispatch(horse.actions.setError(response));
//         }
//         console.log('response:', response)
//       })

//       .catch((error) => {
//         dispatch(horse.actions.setError(error))
//         console.log('error', error)
//       })
//       .finally(() => {
//         dispatch(horse.actions.setLoadingPost(false));
//       })
//   };
// };

// // Thunk making a DELETE-request to delete a single card from a horse from the database
// export const deleteSingleCard = (horseId, cardId) => {
//   return (dispatch, getState) => {
//     dispatch(horse.actions.setLoadingPost(true))

//     const options = {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         // eslint-disable-next-line quote-props
//         'Authorization': getState().user.accessToken
//       },
//       body: JSON.stringify({ horseId, cardId })
//     };

//     fetch(MONGO_DB_URL(`trips/${horseId}/cards/${cardId}`), options)
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.success) {
//           dispatch(horse.actions.setError(null));
//           const responseData = response.response.data;
//           console.log('responseData:', responseData);
//           dispatch(horse.actions.setDeleteCardFromTrip(cardId));
//         } else {
//           dispatch(horse.actions.setError(response));
//         }
//         console.log('response:', response)
//       })

//       .catch((error) => {
//         dispatch(horse.actions.setError(error))
//         console.log('error', error)
//       })
//       .finally(() => {
//         dispatch(horse.actions.setLoadingPost(false));
//       })
//   };
// };

// // Thunk making a PATCH-request to update a single card in a horse from the database
// export const updateSingleCard = (tripId, cardId, cardComment, cardStars) => {
//   return (dispatch, getState) => {
//     dispatch(horse.actions.setLoadingPost(true))

//     const options = {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         // eslint-disable-next-line quote-props
//         'Authorization': getState().user.accessToken
//       },
//       body: JSON.stringify({ cardComment, cardStars })
//     };

//     fetch(MONGO_DB_URL(`horses/${horseId}/cards/${cardId}`), options)
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.success) {
//           dispatch(horse.actions.setError(null));
//           const responseData = response.response.data;
//           console.log('responseData:', responseData);
//           dispatch(horse.actions.setUpdateCardInHorse(responseData));
//           dispatch(fetchHorses());
//         } else {
//           dispatch(horse.actions.setError(response));
//         }
//         console.log('response:', response)
//       })

//       .catch((error) => {
//         dispatch(horse.actions.setError(error))
//         console.log('error', error)
//       })
//       .finally(() => {
//         dispatch(horse.actions.setLoadingPost(false));
//       })
//   };
// };
