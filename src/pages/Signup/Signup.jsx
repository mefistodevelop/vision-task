import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Signup.css';
import { SignupForm } from './SignupForm/SignupForm';

export function Signup() {
  const isAuthorized = useSelector((state) => state.isAuthorized);
  return (
    <>
      {isAuthorized ? <Redirect exact to="/" /> : ''}
      <div className="signup">
        <h1 className="signup__title">Sign up</h1>
        <SignupForm />
      </div>
    </>
  );
}
