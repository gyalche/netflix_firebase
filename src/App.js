import React from 'react';

import './App.css';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screen/Login';
function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <HomeScreen /> : <Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
