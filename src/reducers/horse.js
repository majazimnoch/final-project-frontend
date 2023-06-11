import { createSlice } from '@reduxjs/toolkit';
import { MONGO_DB_URL } from '../utils/urls';

export const horse = createSlice({
  name: 'horse',
  initialState: {
    horseName: null,
    horsePrevious: false,
    horseUpcoming: false,
    horseActiveUser: null,
    horseId: null,
    createdAt: null,
    squares: [],
    error: null,
    isLoadingPost: false,
    isLoadingGet: false,
    isSuccessful: false,
    horseList: [],
    newHorse: null,
    deleteHorse: null,
    deleteSquareFromHorse: null,
    updateSquareInHorse: null
  },
  reducers: {
    setHorseName: (store, action) => {
      store.horseName = action.payload
    },
    setHorsePrevious: (store, action) => {
      store.horsePrevious = action.payload
    },
    setHorseActiveUser: (store, action) => {
      store.horseActiveUser = action.payload
    },
    setHorseId: (store, action) => {
      store.horseId = action.payload
    },
    setCreatedAt: (store, action) => {
      store.createdAt = action.payload
    },
    setSquares: (store, action) => {
      store.squares = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    },
    setLoadingPost: (store, action) => {
      store.isLoadingPost = action.payload;
    },
    setLoadingGet: (store, action) => {
      store.isLoadingGet = action.payload;
    },
    setSuccess: (store, action) => {
      store.isSuccessful = action.payload
    },
    setHorseList: (store, action) => {
      console.log('Setting horseList:', action.payload);
      if (!Array.isArray(action.payload)) {
        console.error('setHorseList was called with a non-array value:', action.payload);
      }
      store.horseList = action.payload;
    },
    setNewHorse: (store, action) => {
      store.newHorse = action.payload;
    },
    setDeleteHorse: (store, action) => {
      store.deleteHorse = action.payload;
    },
    setDeleteSquareFromHorse: (store, action) => {
      store.deleteSquareFromHorse = action.payload;
    },
    setUpdateSquareInHorse: (store, action) => {
      store.updateSquareInHorse = action.payload;
    }
  }
});

// Thunk making a GET-request for all available horses from the database
export const fetchHorses = () => {
  return (dispatch, getState) => {
    dispatch(horse.actions.setLoadingGet(true))

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getState().user.accessToken
      }
    }
    fetch(MONGO_DB_URL('horses'), options)
      .then((response) => response.json())
      .then((response) => {
        console.log('API response:', response); // Logging the response object
        if (response.success) {
          dispatch(horse.actions.setError(null));
          const responseData = response.response.data; // Access the correct data
          console.log('responseData:', responseData);
          dispatch(horse.actions.setHorseList(responseData)); // Dispatch the correct data
        } else {
          dispatch(horse.actions.setError(response.response));
        }
      })
      .catch((error) => {
        dispatch(horse.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(horse.actions.setLoadingGet(false));
        }, 2000);
      })
  };
};

// Thunk making a POST-request to add a new horse to the database
export const postNewHorse = (value) => {
  return (dispatch, getState) => {
    dispatch(horse.actions.setLoadingPost(true))
    dispatch(horse.actions.setSuccess(false))

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({ horseName: value })
    };

    fetch(MONGO_DB_URL('horses'), options)
      // postNewHorse
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(horse.actions.setError(null));
          const responseData = response.response.data; // this is expected to be a single horse
          console.log('responseData:', responseData);
          dispatch(horse.actions.setNewHorse(responseData));
        } else {
          dispatch(horse.actions.setHorseList([]));
          dispatch(horse.actions.setError(response));
        }
        console.log('response:', response)
      })

      .catch((error) => {
        dispatch(horse.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        // dispatch(horse.actions.setLoading(false));
        setTimeout(() => {
          dispatch(horse.actions.setLoadingPost(false));
          dispatch(horse.actions.setSuccess(true));
        }, 2000);
        setTimeout(() => {
          dispatch(fetchHorses());
        }, 2000);
      })
  };
};

// Thunk making a PATCH-request to add a new square to the square array in a horse in the database
export const patchHorseWithNewSquare = (horseId) => {
  return (dispatch, getState) => {
    dispatch(horse.actions.setLoadingPost(true))

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({
        // need to adjust these accordingly - just trying to make things work right now
        squareIcon: horse.icon,
        squareName: horse.name,
        squareRating: horse.rating,
        squareVicinity: horse.vicinity
      })
    };

    fetch(MONGO_DB_URL(`horses/${horseId}/squares`), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          // eslint-disable-next-line no-underscore-dangle
          dispatch(horse.actions.setError(null));
          // const responseData = response.response.data; // Access the correct data
          console.log('response from patch request:', response);
        } else {
          // dispatch(horse.actions.setTripList([]));
          dispatch(horse.actions.setError(response));
        }
      })
      .catch((error) => {
        dispatch(horse.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        dispatch(horse.actions.setLoadingPost(false));
      })
  };
};

// Thunk making a DELETE-request to delete a horse from the database
export const deleteTrip = (horseId) => {
  return (dispatch, getState) => {
    dispatch(horse.actions.setLoadingPost(true))

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({ horseId })
    };

    fetch(MONGO_DB_URL(`horses/${horseId}`), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(horse.actions.setError(null));
          const responseData = response.response.data;
          console.log('responseData:', responseData);
          dispatch(horse.actions.setDeleteTrip(horseId));
        } else {
          dispatch(horse.actions.setError(response));
        }
        console.log('response:', response)
      })

      .catch((error) => {
        dispatch(horse.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        dispatch(horse.actions.setLoadingPost(false));
      })
  };
};

// Thunk making a DELETE-request to delete a single square from a horse from the database
export const deleteSingleCard = (horseId, squareId) => {
  return (dispatch, getState) => {
    dispatch(horse.actions.setLoadingPost(true))

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({ horseId, squareId })
    };

    fetch(MONGO_DB_URL(`horses/${horseId}/squares/${squareId}`), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(horse.actions.setError(null));
          const responseData = response.response.data;
          console.log('responseData:', responseData);
          dispatch(horse.actions.setDeleteCardFromTrip(squareId));
        } else {
          dispatch(horse.actions.setError(response));
        }
        console.log('response:', response)
      })

      .catch((error) => {
        dispatch(horse.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        dispatch(horse.actions.setLoadingPost(false));
      })
  };
};

// Thunk making a PATCH-request to update a single square in a horse from the database
export const updateSingleCard = (horseId, squareId, squareComment, squareStars) => {
  return (dispatch, getState) => {
    dispatch(horse.actions.setLoadingPost(true))

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({ squareComment, squareStars })
    };

    fetch(MONGO_DB_URL(`horses/${horseId}/squares/${squareId}`), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(horse.actions.setError(null));
          const responseData = response.response.data;
          console.log('responseData:', responseData);
          dispatch(horse.actions.setUpdateCardInTrip(responseData));
          dispatch(fetchHorses());
        } else {
          dispatch(horse.actions.setError(response));
        }
        console.log('response:', response)
      })

      .catch((error) => {
        dispatch(horse.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        dispatch(horse.actions.setLoadingPost(false));
      })
  };
};