import React, { useEffect } from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserData } from '../../app/reducer';

export function Profile() {
  const isAuthorized = useSelector((state) => state.isAuthorized);
  const userId = useSelector((state) => state.clientId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(userId));
  });

  return (
    <>
      {!isAuthorized ? <Redirect to="/login" /> : ''}
      <div className="profile">profile</div>
    </>
  );
}
