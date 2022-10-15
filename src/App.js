import React, { useEffect } from 'react';

import './App.css';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screen/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
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
