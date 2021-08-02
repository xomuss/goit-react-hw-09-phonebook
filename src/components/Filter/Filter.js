import React from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors, filterContscts } from '../../redux/phonebook';

export default function Filter() {
  const value = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        onChange={e => dispatch(filterContscts(e.target.value))}
        value={value}
        name="filter"
      />
    </label>
  );
}
