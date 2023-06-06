import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <p>
        <Link to="/login">GOT TO LOGIN</Link>
      </p>
      <p>
        <Link to="/">GO TO MAIN</Link>
      </p>
      <p> Sorry, nothing here </p>
    </>
  )
};

export default NotFound;