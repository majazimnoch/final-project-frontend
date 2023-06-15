/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const horseReducer = createSlice({
  name: 'horseReducer',
  initialState: {
    items: [],
    error: null,
    username: null,
    id: null
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload
    },
    setNewHorse: (store, action) => {
      store.items.unshift(action.payload)
    },
    setDetailedHorse: (store, action) => {
      store.items = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    },
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setId: (store, action) => {
      store.id = action.payload
    }
  }
});

export default horseReducer;