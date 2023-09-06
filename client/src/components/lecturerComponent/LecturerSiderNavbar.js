import { Avatar } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../context';
import { LecturerMenu } from './';
import './LecturerSiderNavbar.css';
import { APP_LOGO_URL } from '../../assets';

export default () => {
  const { collapsed } = useContext(NavbarContext);

  return (
    <div className='lecturerSiderNavbar'>
      <Link to='/dashboard'>
        <div className={!collapsed ? "logo_size_big" : "logo_size_small"}>
          <Avatar
            shape="square"
            className={
              !collapsed ?
                'studentSiderNavbar_logo_big' : 'studentSiderNavbar_logo'}
            size='large'
            alt='Face In'
            title='Face in (Student Version)'
            src={APP_LOGO_URL.link}
            onError={(err) => {
              console.log(err);
            }}
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div
            className={
              !collapsed
                ? 'lecturerSiderNavbar__text'
                : 'lecturerSiderNavbar__text__hidden'
            }
          >
            <span className='lecturerSiderNavbar__text__item'>ADMIN</span>
            <span className='lecturerSiderNavbar__text__item'>CONTROLS</span>
          </div>
        </div>
      </Link>

      <div className='lecturerSiderNavbar__menu'>
        <LecturerMenu />
      </div>
    </div>
  );
};
