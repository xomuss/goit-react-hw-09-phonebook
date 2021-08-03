import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { register } from '../redux/auth/auth-operations';
import styles from './RegistrationPage.module.css';

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginInputId = shortid.generate();
  const loginPassword = shortid.generate();
  const loginEmail = shortid.generate();

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
        Username
        <input
          className={styles.input}
          onChange={handleChange}
          type="text"
          value={name}
          name="name"
          id={loginInputId}
        />
      </label>
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
