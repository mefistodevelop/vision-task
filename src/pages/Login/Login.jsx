import React from 'react';
import './Login.css';
import { LoginForm } from './LoginForm/LoginForm';

export function Login() {
  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <LoginForm />
    </div>
  );
}
