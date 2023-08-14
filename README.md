# Project

Final project of Web Development Bootcamp. Done by Sandra Olsson, Maja Zimnoch and Ylva Karlsson.

Horsey is an app that allows users to create a horse and add it to our database. All horses are public, so everyone can click on them and read about their characteristics and instructions. Additional features of the app include weather forecasts (we fetch from openweathermap public API) and random facts about horses. 

We were working with React and styled components. 

In the iteration 2.0 we added a feature to add pictures of horses, by submitting an url to the picture in the Internet. If the user doesn't upload their own photo, the app shows a random picture from a public API with pictures of horses. This is done with useEffect hook.

# Difficulties

Using our backend endpoints in frontend code so the outcome is functional was our biggest struggle. 

## Some of the Java Script methods we used:
- split() ( HorseDetails: Turning the instructions string into an array, to be able to display the instructions in a list)

## Some of the Java Script functions we used:
- Math.floor ( WeatherBox: used to round a floating-point number down to the nearest integer)

## NPM packages installed for the frontend repo:
- npm i
- npm i react-router-dom
- npm i styled-components@latest
- npm i react-redux
- npm i @‌reduxjs/toolkit
- npm i moment
- npm i swiper
- npm install --save react-router-hash-link


