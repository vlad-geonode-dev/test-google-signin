import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';

const Home = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path='/'
        element={loggedIn === true ? <Dashboard /> : <LoginPage />}
      />
    </Routes>
  );
};

export default Home;
