import React from 'react';
import './Signup.css';
import { SignupForm } from './SignupForm/SignupForm';

export const Signup = () => (
  <div className="signup">
    <h1 className="signup__title">Sign up</h1>
    <SignupForm />
  </div>
);
