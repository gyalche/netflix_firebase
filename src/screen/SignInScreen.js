import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import './Signin.css';
import { auth } from '../firebase';
const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  // onAuthStateChange(auth, (currentUser) => {
  //   console.log(currentUser);
  // });
  return (
    <div className="signupScreen">
      <form>
        <h1>SIGN IN</h1>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          SIGN IN
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>{' '}
          <Link onClick={register}>Sign up now</Link>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
