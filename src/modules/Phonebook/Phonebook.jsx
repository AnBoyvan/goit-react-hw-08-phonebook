import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './Phonebook.module.css';
import { Box } from '@mui/material';

const Phonebook = () => {
  const allContacts = useSelector(getAllContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box
      margin={1}
      marginLeft="auto"
      marginRight="auto"
      width="400px"
      backgroundColor="#ffff"
      borderRadius="5px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {!Boolean(allContacts.length) && (
        <p className={css.notification}>
          There are no contacts in the phonebook
        </p>
      )}
      <ContactList />
    </Box>
  );
};

export default Phonebook;
