import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <div className={styles.header_div}>
      <div className={styles.login}>
        {props.isAuth ? props.login :
          <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </div>
  )
}

export default Header;