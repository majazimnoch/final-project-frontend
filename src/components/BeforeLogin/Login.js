import React, { useState } from 'react';
import styled from 'styled-components';
import LoginRegister from './LoginRegister';
import Profile from './Startpage';
import Horseplayful from '../../assets/horseplayful.svg'

const token = localStorage.getItem('token');
const API_URL = process.env.API_URL || 'https://final-project-backend-q7mqhxeq3q-lz.a.run.app/';

const Home = () => {
  const [loginOrRegister, setLoginOrRegister] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event, state) => {
    switch (state) {
      case 'login':
        console.log('login');
        fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              localStorage.setItem('token', data.response.accessToken);
              window.location.reload();
            } else {
              alert('Login error!');
            }
          })
          .catch((error) => console.log(error));
        break;
      case 'register':
        console.log('register');
        fetch(`${API_URL}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              localStorage.setItem('token', data.response.accessToken);
              window.location.reload();
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

  const handleLoginOrRegister = () => (loginOrRegister === 'login'
    ? setLoginOrRegister('register')
    : setLoginOrRegister('login'));

  return (
    <LoginWrapper>
      <LeftLogin>
        <TextLoginBox>
          <StyledPlayfulHorse src={Horseplayful} alt="Little horse" />
          <h2>Giddy up and get ready for the horse ride of your life!
          </h2>
          <p>Horsey app helps you track your progress, set goals, and stay motivated.
             Sign up now and see what all the neighing is about!
          </p>
        </TextLoginBox>
      </LeftLogin>
      <RightLogin>
        {token ? (
          <Profile API_URL={API_URL} />
        ) : (
          <>
            {loginOrRegister === 'login' ? (
              <>
                <WelcomeHeader>Welcome back, friend!</WelcomeHeader>
                <p>Sign in and keep track of your horses!</p>
              </>
            ) : (
              <>
                <WelcomeHeader>New user? Welcome!</WelcomeHeader>
                <p>Create a user account in 5 seconds!</p>
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
            {loginOrRegister === 'login' ? (
              <p>
                <a href="#" onClick={handleLoginOrRegister}>
                  I do not have an account yet!
                </a>
              </p>
            ) : (
              <p>
                <a href="#" onClick={handleLoginOrRegister}>
                  I already have an account!
                </a>
              </p>
            )}
          </>
        )}
      </RightLogin>
    </LoginWrapper>
  );
};

export default Home;

const StyledPlayfulHorse = styled.img`
  height: 100px;
`

const WelcomeHeader = styled.h2`
  color: var(--primaryBlack);
  font-size: 40px;

  @media (max-width: 668px) {

  }

  @media (max-width: 1023px) {

  }
`

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem;
`

const TextLoginBox = styled.div`
  border: 2px purple solid;
`

const LeftLogin = styled.div`
display: flex;
border: 1px red solid;
align-items: center;
`

const RightLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  color: var(--primaryBlack);
  border: 1px solid var(--softPurple);
  border-radius: 50px;
  padding: 3rem;
  width: 50%;


  h1 {
    font-size: 4rem;
  }
  
  p {
    color: black;
    font-size: 1.5rem;
  }
  
  a {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: var(--primaryBlack);
  }

    // .content {
    //     display: flex;
    //     width: 100%;
    //     height: 100%;

    //     .left {
    //     flex: 1;
    //     background-color: var(--primaryWhite:);
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     }

    //     .right {
    //     flex: 1;
    //     background-color: var(--primaryWhite:);
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     }
    // }
  
  @media (max-width: 1024px) {
  
    h1 {
      font-size: 3rem;
    }
  
    p {
      font-size: 1.3rem;
    }
  
    a {
      font-size: 1.3rem;
      margin-left: 0.5rem;
    }
  }
  
  @media (max-width: 664px) {
  
    h1 {
      font-size: 1.5rem;
    }
  
    p {
      font-size: 1rem;
    }
  
    a {
      font-size: 1rem;
      margin-left: 0.4rem;
    }
  }
`;