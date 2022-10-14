import React, { useState } from 'react';
import './Login.css';
import login from '../assets/login.jpg';
import logo from '../assets/logo.png';
import SignInScreen from './SignInScreen';
const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginscreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={logo} alt="login" />

        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign in
        </button>
        <div className="loginscreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited filmn, TV programmes and more.</h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email or restart your membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="email address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignIn(true)}>
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
