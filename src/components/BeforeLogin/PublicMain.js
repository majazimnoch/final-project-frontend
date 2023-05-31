import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Contact from './Contact'
import { FaqAccordion } from './Faq/FaqAccordion'

const PublicMain = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FaqAccordion />
      <Contact />
    </>
  );
};

export default PublicMain;