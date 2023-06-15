import React from 'react';
import image6 from 'assets/horses-three.svg';
import styled from 'styled-components';
import { Pinside } from 'components/ReusableComponents/GlobalStyles';

const Horseheader = () => {
  return (
    <Horseheaderdiv img={image6} alt="Three horses">
      <Pinside lemon>Horsey</Pinside>
    </Horseheaderdiv>
  )
}

const Horseheaderdiv = styled.div`
background-image: url(${(props) => props.img});
background-size: cover;
background-color: var(--claret);
color: var(--primaryWhite);
height:20vh;
display: flex;
align-items: center;
justify-content: center;
background-size: cover;
background-position: center;
box-shadow: 0 5px 0px rgba(183, 253, 073);

&:hover {
    opacity: 0.5;
  }

`
export default Horseheader