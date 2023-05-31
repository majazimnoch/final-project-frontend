import React from 'react'
import Navbar from 'components/BeforeLogin/Navbar'
import { Button } from 'components/BeforeLogin/Button'
// import Navbar from 'components/BeforeLogin/Navbar';
import Contact from 'components/BeforeLogin/Contact';
import Hero from 'components/BeforeLogin/Hero';

export const App = () => {
  return (
    <>
      <Navbar />
      <Button signup>Sign up</Button>
      <Button>Submit</Button>
      <Hero />
      <Contact />
    </>
  )
}
