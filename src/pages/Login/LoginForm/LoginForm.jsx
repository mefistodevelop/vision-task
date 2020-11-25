import React, { useState } from 'react';
import { Button } from '../../../components/Button/Button';
import './LoginForm.css';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      console.log(trimmedUsername, trimmedPassword);
      setUsername('');
      setPassword('');
    }
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-form__label">
        <input
          className="login-form__field"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleUsername}
          required
          autoComplete="on"
        />
      </label>

      <label className="login-form__label">
        <input
          className="login-form__field"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
          required
          autoComplete="on"
        />
      </label>

      <Button type="submit" name="submit" />
    </form>
  );
}
