export const getAllContacts = store => store.contacts.items;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return result;
};

export const getIsLoading = state => state.contacts.isLoading;
