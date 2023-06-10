import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicMain from 'components/BeforeLogin/PublicMain';
import LandingPage from './components/Pages/LandingPage';
import Logout from './components/Pages/Logout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicMain />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  )
};
