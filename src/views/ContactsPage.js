import React, { useEffect } from 'react';
import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from '../redux/phonebook';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(phonebookSelectors.getLoading);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phone Book</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {isLoadingContacts && <h1>download...</h1>}
      <ContactsList />
    </>
  );
}
