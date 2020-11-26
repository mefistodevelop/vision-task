import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserData } from '../../app/reducer';

export function Main() {
  const isAuthorized = useSelector((state) => state.isAuthorized);
  const userId = useSelector((state) => state.clientId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(userId));
  });

  return (
    <>
      {!isAuthorized ? <Redirect to="/login" /> : ''}
      <div className="main">
        <h1>Main page</h1>
      </div>
    </>
  );
}
