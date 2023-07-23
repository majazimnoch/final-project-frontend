import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Contact from './Contact'
import Faq from './Faq/Faq'
import Login from './Login'
import Footer from './Footer'

const PublicMain = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Faq />
      <Contact />
      <Login />
      <Footer />
    </>
  );
};

export default PublicMain;