import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';
const SignInScreen = () => {
  return (
    <div className="signupScreen">
      <form>
        <h1>SIGN IN</h1>
        <input placeholder="Email" type="email" />
        <input type="password" placeholder="Password" />
        <button>SIGN IN</button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>{' '}
          <Link>Sign up now</Link>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
