/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { Pinside } from 'components/ReusableComponents/GlobalStyles';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

const api = {
  key: 'b17222dd46452704ba0397a0e2981f5f',
  base: 'https://api.openweathermap.org/data/2.5/'
};

const WeatherBox = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}`)
          .then((res) => res.json())
          .then((result) => {
            setWeather(result);
            setIsLoading(false);
          });
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const WeatherFunction = (temperature) => {
    if (temperature > 10) {
      return `It's a good day for horse riding in ${weather.name}!`;
    } else {
      return 'There is no such thing as bad weather, only unsuitable clothing! Go for it.';
    }
  };

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <WeatherBoxContainer>
      <Weatherheader>
        <Pinside bold><StyledSpanWeather test>Check the weather before you go horse riding</StyledSpanWeather></Pinside>
        {isLoading ? (
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_rwq6ciql.json"
            style={{ height: '90px', width: '90px' }}
            animationSettings={{
              loop: 2, // Adjust the number of loops as needed
              autoplay: true,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }} />
        ) : typeof weather.main !== 'undefined' ? (
          <WeatherInfoBox>
            <Pinside uppercase>{weather.name}</Pinside>
            <ImgWeather
              src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description} />
            <Pinside obs>{Math.floor(weather.main.temp)}°C</Pinside>
            <Pinside>{WeatherFunction(Math.floor(weather.main.temp), weather.weather[0].main)}</Pinside>
          </WeatherInfoBox>
        ) : (
          <Pinside>It looks like we don&apos;t know such place. Are you planning to horse ride on the Moon? Horsey gives recommendations only for Earth.</Pinside>
        )}
        <WeatherInputBox>
          <Pinside details>If you plan to change the location, enter the desired city/town.</Pinside>
          <InputWeather
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
            required />
          <ButtonWeather type="button" onClick={searchPressed}>
            Search
          </ButtonWeather>
        </WeatherInputBox>
      </Weatherheader>
    </WeatherBoxContainer>
  );
};

export default WeatherBox;

const WeatherBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 1.5rem;
  text-align:center;
`;

const Weatherheader = styled.header`
`;

const WeatherInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const WeatherInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgWeather = styled.img`
height: 64px;
`;

const ButtonWeather = styled.button`
background-color: var(--primaryWhite);
color: var(--primaryBlack);
font-size: var(--fontSize);
border: 1.5px solid var(--softPurple);
border-radius: 30px;
height: 40px;

&:hover {
  background-color: var(--softPurple);
  color: var(--primaryWhite);
  transition: 0.2s;
}

@media (min-width: 668px) {
  padding: 0 1.5rem;
}
`
export const InputWeather = styled.input`
height: 3rem;
padding: 0 1rem;
border-radius: 10px;

border: 1px var(--primaryBlack) solid;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

&:focus {
  outline: 0.5px solid var(--softPurple);
}

`;

export const StyledSpanWeather = styled.span`
padding: 3px;
${(styling) => styling.test && css`
background-color: var(--softPurple);`
}
`;