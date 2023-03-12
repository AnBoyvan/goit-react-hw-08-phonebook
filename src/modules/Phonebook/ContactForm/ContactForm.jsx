import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading } from '../../../redux/contacts/contacts-selectors';
import { addContact } from '../../../redux/contacts/contacts-operations';
import { Box } from '@mui/material';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (contact, { resetForm }) => {
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Box
      margin={1}
      marginLeft="auto"
      marginRight="auto"
      width="400px"
      backgroundColor="#ffff"
      borderRadius="5px"
    >
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form} autoComplete="off">
          <label className={css.formElement} htmlFor="name">
            <span>Name</span>
            <Field
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={css.formElement} htmlFor="number">
            <span>Number</span>
            <Field
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.btn} type="submit" disabled={isLoading}>
            Add contact
          </button>
        </Form>
      </Formik>
    </Box>
  );
};

export default ContactForm;
