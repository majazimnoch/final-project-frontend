import React from 'react'
import { RandomFacts } from 'components/ReusableComponents/RandomFacts'
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
      <RandomFacts />
    </>
  );
};

export default PublicMain;