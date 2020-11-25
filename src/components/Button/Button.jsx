import React from 'react';
import './Button.css';

export function Button({ type = 'button', name = 'submit' }) {
  return (
    <button className="button" type={type}>
      {name}
    </button>
  );
}
