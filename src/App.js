import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';


function App() {
  return (
    <Router>
     <Header/>
      <div className="container">
        <Routes>
        <Route path="/" element={<Dashboard/>} />
          
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
