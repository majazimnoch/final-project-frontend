import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Contact from './Contact'
import Faq from './Faq/Faq'
import Login from './Login'
// import LandingPage from '../AfterLogin/LandingPage'

const PublicMain = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Faq />
      <Contact />
      <Login />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default PublicMain;