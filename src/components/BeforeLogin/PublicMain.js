import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Contact from './Contact'
import Faq from './Faq/Faq'
import Login from './Login'

const PublicMain = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Faq />
      <Contact />
      <Login />
    </>
  );
};

export default PublicMain;