import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';

const Loading = () => {
  return (

    <Animation>
      <Player
        src="https://assets3.lottiefiles.com/packages/lf20_9cv14lsd.json"
        className="lottie"
        loop
        autoplay
        speed={1}
        style={{ height: '400px', width: '400px' }} />
    </Animation>
  );
};

export default Loading;

const Animation = styled.div`
background-color: black;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: 9999;
`
