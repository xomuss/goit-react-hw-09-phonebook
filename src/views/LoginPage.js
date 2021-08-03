import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { login } from '../redux/auth/auth-operations';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginPassword = shortid.generate();
  const loginEmail = shortid.generate();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(login({ email, password }));

    setPassword('');
    setEmail('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input
          className={styles.input}
          onChange={handleChange}
          type="email"
          value={email}
          name="email"
          id={loginEmail}
        />
      </label>
      <label>
        Password
        <input
          className={styles.input}
          onChange={handleChange}
          type="password"
          value={password}
          name="password"
          id={loginPassword}
        />
      </label>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
