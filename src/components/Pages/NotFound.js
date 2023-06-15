/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import image3 from 'assets/sandra.jpg';
import { Pinside } from 'components/ReusableComponents/GlobalStyles';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [navigate])
  return (
    <NotfoundBox img={image3}>
      <Pinside white>404 - Page not found, hold your reins and you will be redirected to the homepage!</Pinside>
    </NotfoundBox>
  )
}

export default NotFound;

const NotfoundBox = styled.div`
background-image: url(${(props) => props.img});
background-size: cover;
background-color: var(--claret);
color: var(--primaryWhite);
height:100vh;
display: flex;
  align-items: center;
  justify-content: center;

`