import React, { useState } from 'react';
import styled from 'styled-components';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import LandingPage from '../AfterLogin/LandingPage'
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  console.log(history)

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
    <div>
      {/* <Router>
        <Route path="/" component={LandingPage} />
      </Router> */}
      <LoginWrapper>
        <LeftLogin>
          <TextLoginBox>
            <StyledPlayfulHorse src={Horseplayful} alt="Little horse" />
            <h2>Giddy up and get ready for the horse ride of your life!
            </h2>
            <p>Horsey app helps you track your progress, set goals, and stay motivated.
            Hurry up and join us.
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
                  <p>Log in and keep track of your horses!</p>
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
                <PSwitchaccount>
                  <a href="#" onClick={handleLoginOrRegister}>
                  I do not have an account yet
                  </a>
                </PSwitchaccount>
              ) : (
                <PSwitchaccount>
                  <a href="#" onClick={handleLoginOrRegister}>
                  I already have an account
                  </a>
                </PSwitchaccount>
              )}
            </>
          )}
        </RightLogin>
      </LoginWrapper>
    </div>

  );
};

export default Home;

const StyledPlayfulHorse = styled.img`
  height: 100px;
`

const WelcomeHeader = styled.h2`
  color: var(--primaryBlack);
  font-size: 40px;
  margin-bottom:2rem;

  @media (max-width: 668px) {

  }

  @media (max-width: 1023px) {

  }
`
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
  min-height: 100vh;
  
  @media (max-width: 1023px) {
    padding: .5rem 1.5rem;
    min-height: 50vh;
  }
`

const TextLoginBox = styled.div`
`

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
  
  @media (max-width: 1023px) {
    padding: 1rem;

    a {
      font-size: .8rem;
    }
  }
`;

