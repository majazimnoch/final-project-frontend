import React from 'react';
import styled, { css } from 'styled-components';
import HorseshoeImg from '../../assets/horseshoe.svg'

const ImgHorseshoe = styled.img`
position: relative;
height: 130px; 
width: 20%;
top: 400px; left: 240px;

${(styling) => styling.down && css`
top: 20px; left: -100px;
rotate: 30deg;
  `
} 

@media (min-width: 668px) and (max-width:1023px) {
  height: 160px; 
  top: 90px; left: 520px;
  
  ${(styling) => styling.down && css`
  top: 20px; left: -50px;
  rotate: 30deg;
    `
}   
} 
@media (min-width:1024px) {  
  height: 200px; 
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);

  ${(styling) => styling.down && css`
  top: 20px; left: -100px;
  height: 180px; 
  padding-bottom: 50px;
  `
} 
} 
`

const HorseshoeImgBox = styled.div`
position: fixed;
`

const Horseshoe = () => {
  return (
    <HorseshoeImgBox>
      <ImgHorseshoe src={HorseshoeImg} alt="horse shoe" />
      <ImgHorseshoe down src={HorseshoeImg} alt="horse shoe" />
    </HorseshoeImgBox>
  )
};

export default Horseshoe;