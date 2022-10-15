import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screen/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screen/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      dispatch(
        login({
          uid: currentUser.uid,
          email: currentUser.email,
        })
      );
    });
    return () => {
      unsubscribe();
      dispatch(logout);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <HomeScreen /> : <Login />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
