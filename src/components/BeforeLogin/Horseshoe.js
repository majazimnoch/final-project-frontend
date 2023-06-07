import React from 'react';
import HorseshoeImg from '../../assets/horseshoe.svg'
import { HorseshoeImgBox, ImgHorseshoe } from './HorseshoeStyling';

const Horseshoe = () => {
  return (
    <HorseshoeImgBox>
      <ImgHorseshoe src={HorseshoeImg} alt="horse shoe" />
      <ImgHorseshoe down src={HorseshoeImg} alt="horse shoe" />
    </HorseshoeImgBox>
  )
};

export default Horseshoe;