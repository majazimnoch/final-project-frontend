import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicMain from 'components/BeforeLogin/PublicMain';
import LandingPage from './components/Pages/LandingPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicMain />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
  )
}
