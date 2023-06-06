/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import LoginRegister from './LoginRegister';
import Notification from '../lib/Notification';
import Startpage from './Startpage';

const Login = ({ API_URL }) => {
  const [loginOrRegister, setLoginOrRegister] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({});
  const token = localStorage.getItem('token');

  const handleFormSubmit = (event, state) => {
    switch (state) {
      case 'login':
        fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, password })
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              localStorage.setItem('token', data.response.accessToken, {
                path: '/'
              });
              window.location.href = '/';
            } else {
              setNotification({
                message: 'error logging in',
                variant: 'error'
              });
            }
          })
          .catch((error) => {
            setNotification({
              message: error,
              variant: 'error'
            });
          });

        break;
      case 'register':
        fetch(`${API_URL}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              localStorage.setItem('token', data.response.accessToken, {
                path: '/'
              });
              window.location.href = '/';
            } else {
              setNotification({
                message: 'error registering',
                variant: 'error'
              });
            }
          })
          .catch((error) => {
            setNotification({
              message: error,
              variant: 'error'
            });
          });
        break;
      default:
        setNotification({
          message: 'Invalid state',
          variant: 'error'
        });
    }
  };

  const handleLoginOrRegister = () => {
    loginOrRegister === 'login'
      ? setLoginOrRegister('register')
      : setLoginOrRegister('login');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <>
      {notification && (
        <Notification
          variant={notification.variant}
          message={notification.message} />
      )}

      {token ? (
        <>
          <Startpage API_URL={API_URL} />
          <button type="button" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
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
              No account?{' '}
              <a href="#" onClick={handleLoginOrRegister}>
                Register!
              </a>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <a href="#" onClick={handleLoginOrRegister}>
                Login!
              </a>
            </p>
          )}
        </>
      )}
    </>
  );
};

export default Login;