import React from 'react'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import horseReducer from 'reducers/horses';
import { Route, Routes } from 'react-router-dom';
import PublicMain from 'components/BeforeLogin/PublicMain';
import MyPage from 'components/Pages/MyPage';
import UserPage from 'components/Pages/UserPage';
import WeatherBox from 'components/Pages/WeatherBox';
import WelcomePage from './components/BeforeLogin/WelcomePage';
import LandingPage from './components/Pages/LandingPage';
import Logout from './components/Pages/Logout';
import NotFound from './components/Pages/NotFound';

export const App = () => {
  const reducer = combineReducers({ horses: horseReducer.reducer })
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<PublicMain />} />
        <Route path="/welcomepage" element={<WelcomePage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
        {/* ew routes fr sidebar */}
        <Route path="weather" element={<WeatherBox />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </Provider>
  )
};