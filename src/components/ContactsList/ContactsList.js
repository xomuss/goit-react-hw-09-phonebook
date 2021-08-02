import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';

// const mapStateToProps = state => ({
//   contactsData: phonebookSelectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

export default function ContactsList() {
  const contactsData = useSelector(phonebookSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));

  return (
    <ul className={styles.contsct__list}>
      {contactsData.map(({ name, number, id }) => (
        <li key={id} className={styles.contact__list_el}>
          <p className={styles.contact__list_text}>
            {name}: {number}
          </p>
          <button onClick={() => onDeleteContact(id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
