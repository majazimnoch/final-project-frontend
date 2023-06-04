import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Contact from './Contact'
import Faq from './Faq/Faq'

const PublicMain = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Faq id="#id_faq" />
      <Contact />
    </>
  );
};

export default PublicMain;