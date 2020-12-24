import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar_div}>
      <div className={styles.item}>
        <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/friends' activeClassName={styles.activeLink}>Friends</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
      </div>
      <div>
        <NavLink to='/music'>Music</NavLink>
      </div>
    </div>
  )
}
    
export default Navbar;


