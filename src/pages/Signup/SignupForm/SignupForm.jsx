import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { registerNewUser } from '../../../app/reducer';
import { Button } from '../../../components/Button/Button';
import './SignupForm.css';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [countryKey, setCountryKey] = useState('');
  const [redirect, setRedirect] = useState(false);

  const updateState = (event, type) => {
    const value = event.target.value;
    const trimmedValue = value.trim();

    switch (type) {
      case 'email':
        setEmail(trimmedValue);
        break;
      case 'password':
        setPassword(trimmedValue);
        break;
      case 'name':
        setName(trimmedValue);
        break;
      case 'surname':
        setSurname(trimmedValue);
        break;
      case 'inviteCode':
        setInviteCode(trimmedValue);
        break;
      case 'countryKey':
        setCountryKey(trimmedValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      surname,
      user: { email, password },
      invited_by: inviteCode,
      country_key: countryKey,
    };

    const response = await registerNewUser(data);
    setRedirect(response);
  };

  return (
    <>
      {redirect ? <Redirect to="/login" /> : ''}
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-form__label">
          email
          <input
            className="signup-form__field"
            type="email"
            name="email"
            value={email}
            onChange={(e) => updateState(e, 'email')}
            required
            autoComplete="on"
          />
        </label>

        <label className="signup-form__label">
          password
          <input
            className="signup-form__field"
            type="password"
            name="password"
            value={password}
            onChange={(e) => updateState(e, 'password')}
            required
            autoComplete="on"
          />
        </label>

        <label className="signup-form__label">
          name
          <input
            className="signup-form__field"
            type="text"
            name="name"
            value={name}
            onChange={(e) => updateState(e, 'name')}
            required
          />
        </label>

        <label className="signup-form__label">
          surname
          <input
            className="signup-form__field"
            type="text"
            name="surname"
            value={surname}
            onChange={(e) => updateState(e, 'surname')}
            required
          />
        </label>

        <div className="signup-form__fieldgroup">
          <label className="signup-form__label signup-form__label_small">
            invitational code
            <input
              className="signup-form__field"
              type="text"
              name="invited_by"
              value={inviteCode}
              onChange={(e) => updateState(e, 'inviteCode')}
              required
            />
          </label>

          <label className="signup-form__label signup-form__label_small">
            country key
            <input
              className="signup-form__field"
              type="text"
              name="country_key"
              value={countryKey}
              onChange={(e) => updateState(e, 'countryKey')}
              required
            />
          </label>
        </div>

        <Button type="submit" name="submit" />
      </form>
    </>
  );
}
