import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Contact from './Contact'
import Faq from './Faq/Faq'
import LoginRegister from './LoginRegister'

const PublicMain = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Faq />
      <Contact />
      <LoginRegister />
    </>
  );
};

export default PublicMain;