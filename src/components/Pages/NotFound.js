import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1500)
  }, [])
  return (
    <h1>404 - Page not found, hold your reins and you will be redirected to the homepage!</h1>
  )
}

export default NotFound;