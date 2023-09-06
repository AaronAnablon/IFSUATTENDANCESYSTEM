import { Avatar } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContext } from '../../context';
import { StudentMenu } from './';
import './StudentSiderNavbar.css';
import { APP_LOGO_URL } from '../../assets';

export default () => {
  const { collapsed } = useContext(NavbarContext);
  return (
    <div className='studentSiderNavbar'>
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
        <div
          className={
            !collapsed
              ? 'studentSiderNavbar__text'
              : 'studentSiderNavbar__text__hidden'
          }
        >
          <span className='studentSiderNavbar__text__item'>Student</span>
        </div>

      </Link>

      <div className='studentSiderNavbar__menu'>
        <StudentMenu />
      </div>
    </div>
  );
};
