import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from './assets/logo.png';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img className="nav_logo" src={logo} alt="" />
        <img
          onClick={() => {
            navigate('/profile');
          }}
          className="nav_avatar"
          src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
