import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function Main() {
  const isAuthorized = useSelector((state) => state.isAuthorized);

  return (
    <>
      {!isAuthorized ? <Redirect to="/login" /> : ''}
      <div className="main">
        <h1>Main page</h1>
      </div>
    </>
  );
}
