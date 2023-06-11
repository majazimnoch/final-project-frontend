import React, { useState } from 'react';
import styled from 'styled-components';

const api = {
  key: 'd73aa5f2cfee2a35632856b10b30a458',
  base: 'https://api.openweathermap.org/data/2.5/'
};

const WeatherBox = () => {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const WeatherFunction = (temperature) => {
    if (temperature > 10) {
      return "It's a good day for horse riding!";
    } else {
      return 'The weather is not suitable for horse riding.';
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
      <header className="App-header">
        {/* HEADER */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)} />
          <button type="button" onClick={searchPressed}>
            Search
          </button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== 'undefined' ? (
          <div>
            {/* Location */}
            <p>{weather.name}</p>

            {/* Temperature Celsius */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>

            {/* Check if good for horse riding */}
            <p>{WeatherFunction(weather.main.temp)}</p>
          </div>
        ) : (
          ''
        )}
      </header>
    </WeatherBoxContainer>
  );
};

export default WeatherBox;

const WeatherBoxContainer = styled.div`
  border: 1px red solid;
`;
