import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const allContacts = state => state.contacts.items;

// const getVisibleContacts = state => {
//   const contacts = allContacts(state);
//   const filter = getFilter(state);
//   const filterNormalize = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterNormalize),
//   );
// };

const getVisibleContacts = createSelector(
  [allContacts, getFilter],
  (contacts, filter) => {
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize),
    );
  },
);

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
};
