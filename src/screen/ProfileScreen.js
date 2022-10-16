import React from 'react';
import Nav from '../Nav';
import './profile.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
const ProfileScreen = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const auth = getAuth();
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                onClick={() =>
                  signOut(auth).then(() => {
                    console.log('Signed out');
                  })
                }
                className="profileScreen_signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
