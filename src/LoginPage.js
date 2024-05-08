import React from 'react';
import axios from 'axios';
import { SERVER_URL } from './constants';

const LoginPage = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/AuthPage`);
      const { url } = response.data;
      window.location.assign(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Login to Dashboard</h3>
      <button className='btn' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
