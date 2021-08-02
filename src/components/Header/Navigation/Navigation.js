import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routs from '../../../routs';
import { authSelectors } from '../../../redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isLogined = useSelector(authSelectors.getIsAuthenticated);

  return (
    <ul className={styles.list}>
      <li>
        <NavLink className={styles.item} to={routs.home}>
          Home
        </NavLink>
      </li>
      {isLogined && (
        <li>
          <NavLink className={styles.item} to={routs.contacts}>
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
}
