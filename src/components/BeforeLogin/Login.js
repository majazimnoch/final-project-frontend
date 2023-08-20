/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import LoginRegister from './LoginRegister';
import Horseplayful from '../../assets/horseplayful.svg'
import { API_URL } from '../../utils/urls';

const Login = () => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loginOrRegister, setLoginOrRegister] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (event, state) => {
    setShowAnimation(true);

    switch (state) {
      case 'login':
        console.log('login');
        fetch(API_URL('login'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              localStorage.setItem('token', data.response.accessToken);
              localStorage.setItem('userId', data.response.id);
              setToken(data.response.accessToken);
              setIsLoggedIn(true);
            } else {
              alert('Login error!');
            }
          })
          .catch((error) => console.log(error));
        break;
      case 'register':
        console.log('register');
        fetch(API_URL('register'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              localStorage.setItem('token', data.response.accessToken);
              localStorage.setItem('userId', data.response.id);
              setToken(data.response.accessToken);
              setIsLoggedIn(true);
            } else {
              alert('Registration error!');
            }
          })
          .catch((error) => console.log(error));
        break;
      default:
        console.log(`Unrecognized state: ${state}`);
        break;
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/welcomepage', { replace: true });
    }
  }, [token, navigate]);

  useEffect(() => {
    if (isLoggedIn) {
      const timeout = setTimeout(() => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isLoggedIn]);

  return (
    <LoginWrapper id="home">
      <LeftLogin>
        <TextLoginBox>
          <StyledPlayfulHorse src={Horseplayful} alt="Little horse" />
          <h2>Saddle up for digital horsekeeping perfection with Horsey app! </h2>
          <p>The app allows you to create a horse and add it to our database. All horses are public, so everyone can click on them and read about their characteristics and instructions. Additional features of the app include weather forecasts and random facts about horses.
          </p>
        </TextLoginBox>
      </LeftLogin>
      <RightLogin>
        {showAnimation && (
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_9cv14lsd.json"
            style={{ height: '300px', width: '300px' }} />
        )}
        {showAnimation ? null : (
          <>
            {loginOrRegister === 'login' ? (
              <>
                <WelcomeHeader>Welcome back, friend!</WelcomeHeader>
                <p>Log in and keep track of your horses!</p>
              </>
            ) : (
              <>
                <WelcomeHeader>New user? Welcome!</WelcomeHeader>
                <p>Create a user account in 10 seconds!</p>
              </>
            )}
            <LoginRegister
              state={loginOrRegister}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleFormSubmit={handleFormSubmit} />
          </>
        )}
        {showAnimation ? null : (
          <PSwitchaccount>
            {loginOrRegister === 'login' ? (
              <a href={LoginRegister} onClick={() => setLoginOrRegister('register')}>
                <StyledButtonUserSwitch type="button">I do not have an account yet</StyledButtonUserSwitch>
              </a>
            ) : (
              <a href={LoginRegister} onClick={() => setLoginOrRegister('login')}>
                <StyledButtonUserSwitch type="button">I already have an account</StyledButtonUserSwitch>
              </a>
            )}
          </PSwitchaccount>
        )}
      </RightLogin>
    </LoginWrapper>
  );
};

export default Login;

const StyledButtonUserSwitch = styled.button`
  display: block;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: var(--softPurple);
  color: var(--primaryWhite);
  font-size: 16px;
  border: 1.5px solid var(--softPurple);
  border-radius: 30px;
  height: 50px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: var(--lemon);
    color: var(--primaryBlack);
    transition: 0.2s;
  }
`

const StyledPlayfulHorse = styled.img`
  height: 100px;
`;

const WelcomeHeader = styled.h2`
  color: var(--primaryBlack);
  font-size: 40px;
  margin-bottom: 2rem;
`;

const PSwitchaccount = styled.p`
  margin-top: 2rem;
  color: var(--primaryBlack);
  text-align: center;

  @media (max-width: 1023px) {
    font-size: 18px;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem;
  gap: 3rem;
  min-height: 90vh;

  @media (max-width: 1023px) {
    padding: 1rem;
    min-height: 50vh;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const TextLoginBox = styled.div``;

const LeftLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const RightLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  color: var(--primaryBlack);
  border: 1px solid var(--softPurple);
  border-radius: 50px;
  padding: 3rem;
  flex: 1;

  a {
    font-size: 1rem;
    color: var(--primaryBlack);
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    margin: 2rem 0;

}

  @media (max-width: 1023px) {
    padding: 1rem;

    a {
      font-size: 0.8rem;
    }
  }
`;