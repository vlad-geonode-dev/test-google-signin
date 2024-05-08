import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import { AuthContextProvider } from './AuthContext';

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <AuthContextProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/loginpage' element={<LoginPage />} />
            </Routes>
          </Router>
        </AuthContextProvider>
      </header>
    </div>
  );
}

export default App;
