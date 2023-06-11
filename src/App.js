import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicMain from 'components/BeforeLogin/PublicMain';
import WelcomePage from './components/BeforeLogin/WelcomePage';
import LandingPage from './components/Pages/LandingPage';
import Logout from './components/Pages/Logout';
import NotFound from './components/Pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicMain />} />
      <Route path="/welcomepage" element={<WelcomePage />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};