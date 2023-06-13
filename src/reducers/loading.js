import { createSlice } from '@reduxjs/toolkit'

const loading = createSlice({
  name: 'loading',
  initialState: {
    load: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.load = action.payload
    }
  }
})

export default loading;