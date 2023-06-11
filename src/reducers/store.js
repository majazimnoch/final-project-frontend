import { configureStore } from '@reduxjs/getTokenBeforeClosingBracket';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    user: userReducer
  }
});