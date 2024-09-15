import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import Header from './components/Header';


function App() {
  return (
    <Router>
     <Header/>
      <div className="container">
        <Routes>
        <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
