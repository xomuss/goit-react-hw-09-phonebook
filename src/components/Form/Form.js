import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import operations from '../../redux/phonebook/phonebook-operations';
import { phonebookSelectors } from '../../redux/phonebook';
import styles from './Form.module.css';
import shortid from 'shortid';

export default function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(phonebookSelectors.allContacts);

  const nameInputId = shortid.generate();
  const telInputId = shortid.generate();

  const handleChange = useCallback(e => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const foundName = contacts.find(el => el.name.includes(name));
      if (!foundName) {
        dispatch(operations.addContact({ name, number }));
        reset();
        return;
      }
      alert('this name already exist');

      reset();
    },
    [name, number, contacts, dispatch],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          className={styles.input}
          id={nameInputId}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor={telInputId}>
        Telephone
        <input
          className={styles.input}
          id={telInputId}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}
