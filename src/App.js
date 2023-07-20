import React from 'react'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import horseReducer from 'reducers/horses';
import loadingReducer from 'reducers/loading';
import { Route, Routes } from 'react-router-dom';
import PublicMain from 'components/BeforeLogin/PublicMain';
import MyPage from 'components/Pages/MyPage';
import UserPage from 'components/Pages/UserPage';
import EditHorse from 'components/Pages/EditHorse';
import WelcomePage from './components/Pages/WelcomePage';
// import LandingPage from './components/Pages/LandingPage';
import HorseFeed from './components/Pages/HorseFeed';
import Horse from './components/Pages/Horse';
import Logout from './components/Pages/Logout';
import NotFound from './components/Pages/NotFound';

export const App = () => {
  const reducer = combineReducers({ horses: horseReducer.reducer, loading: loadingReducer.reducer })
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<PublicMain />} />
        <Route path="/welcomepage" element={<WelcomePage />} />
        {/* <Route path="/landingpage" element={<LandingPage />} /> */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/horsefeed" element={<HorseFeed />} />
        <Route path="/horse" element={<Horse />} />
        <Route path="/horses/:horseId" element={<Horse />} />
        <Route path="/edit/:horseId" element={<EditHorse />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  )
}