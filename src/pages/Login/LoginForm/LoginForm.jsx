import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../../app/reducer';
import { Button } from '../../../components/Button/Button';
import './LoginForm.css';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isAuthorized = useSelector((state) => state.isAuthorized);
  const dispatch = useDispatch();

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername && trimmedPassword) {
      dispatch(
        loginUser({ username: trimmedUsername, password: trimmedPassword })
      );
      // localStorage.setItem('username', trimmedUsername);
      // localStorage.setItem('password', trimmedPassword);
      // setUsername('');
      // setPassword('');
    }
  };
  return (
    <>
      {isAuthorized ? <Redirect exact to="/" /> : ''}
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-form__label">
          username
          <input
            className="login-form__field"
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
            required
            autoComplete="on"
          />
        </label>

        <label className="login-form__label">
          password
          <input
            className="login-form__field"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
            autoComplete="on"
          />
        </label>

        <Button type="submit" name="submit" />
      </form>
    </>
  );
}
