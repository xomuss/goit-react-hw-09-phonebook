import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { authSelectors } from '../../redux/auth';

export default function Header() {
  const isLogined = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={styles.list}>
      <Navigation />
      {isLogined ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
