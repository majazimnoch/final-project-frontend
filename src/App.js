import React from 'react'
import Navbar from 'components/BeforeLogin/Navbar'
import { Button } from 'components/BeforeLogin/Button'

export const App = () => {
  return (
    <>
      <Navbar />
      <Button signup>Sign up</Button>
      <Button>Submit</Button>
    </>
  )
}
