import React, { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { SERVER_URL } from './constants';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  const checkLoginState = useCallback(async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/logged_in`);

      console.log('response:  ', response);
      if (response.data.loggedIn === false) {
        // Handle when the user is not logged in
        setLoggedIn(false);
        setUser(null);
      } else {
        const { loggedIn: loggedInValue, user } = response.data;
        setLoggedIn(loggedInValue);
        if (user) setUser(user);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    checkLoginState();
  }, [checkLoginState]);

  return (
    <AuthContext.Provider value={{ loggedIn, checkLoginState, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
