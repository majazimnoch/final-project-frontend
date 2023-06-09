import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicMain from 'components/BeforeLogin/PublicMain';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicMain />} />
    </Routes>
  )
}
