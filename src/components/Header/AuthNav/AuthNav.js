import routs from '../../../routs';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink className={styles.item} to={routs.registration}>
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.item} to={routs.login}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
