import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import { logOut } from '../../../redux/auth/auth-operations';
import styles from './UserMenu.module.css';
import defaultAvatar from '../../../icon/ava.jpg';

// const mapStateToProps = state => ({
//   name: authSelectors.getUserName(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenue);

export default function UserMenue() {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={defaultAvatar} alt="" width="32" />
      <span className={styles.name}>Welcome, {name}</span>
      <button className={styles.button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
