import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import user from './reducers/user';
import thoughts from './reducers/thoughts';
import Login from './LoginComponents/Login';
import Main from './LoginComponents/Main';
import NotFound from './LoginComponents/NotFound';

const LoginRegister = () => {
  const reducer = combineReducers({
    user: user.reducer,
    thoughts: thoughts.reducer
  });
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/" element={<Main />}> </Route>
          <Route path="*" element={<NotFound />}> </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
};

export default LoginRegister;