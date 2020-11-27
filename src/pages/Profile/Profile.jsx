import React, { useEffect } from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserData } from '../../app/reducer';
import instagram from './images/instagram.svg';
import telegram from './images/telegram.svg';
import vk from './images/vk.svg';
import whatsapp from './images/whatsapp.svg';

export function Profile() {
  const isAuthorized = useSelector((state) => state.isAuthorized);
  const userId = localStorage.getItem('clientId');
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);
  const userpic = userData.avatar;
  const userFullName = `${userData.name} ${userData.surname}`;
  const city = userData.city;
  const birthday = userData.birth_date;
  const email = userData.email;
  const phone = userData.phone;
  useEffect(() => {
    dispatch(getUserData(userId));
  }, []);

  return (
    <>
      {!isAuthorized ? <Redirect to="/login" /> : ''}
      <div className="profile">
        <div className="profile__userpic-wrapper">
          <img
            src={userpic}
            width="200"
            height="auto"
            alt="userpic"
            className="profile__userpic"
          />
        </div>

        <div className="profile__info">
          <h3 className="profile__name">{userFullName}</h3>

          <div className="profile__abouts">
            <p className="profile__abouts-item">birthday: {birthday}</p>
            <p className="profile__abouts-item">city: {city}</p>
          </div>

          <ul className="profile__contacts-list">
            <li className="profile__contacts-item">email: {email}</li>
            <li className="profile__contacts-item">phone: {phone}</li>
          </ul>
          <ul className="profile__socials-list">
            <li className="profile__socials-item">
              <a
                href={userData.instagram || 'blank.link'}
                className="profile__socials-link"
              >
                <img width="25" height="30" src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="profile__socials-item">
              <a
                href={userData.telegram || 'blank.link'}
                className="profile__socials-link"
              >
                <img width="25" height="30" src={telegram} alt="telegram" />
              </a>
            </li>
            <li className="profile__socials-item">
              <a
                href={userData.vk || 'blank.link'}
                className="profile__socials-link"
              >
                <img width="25" height="30" src={vk} alt="vk" />
              </a>
            </li>
            <li className="profile__socials-item">
              <a
                href={userData.whatsapp || 'blank.link'}
                className="profile__socials-link"
              >
                <img width="25" height="30" src={whatsapp} alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
