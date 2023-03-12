import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import { getIsLoading } from '../../../redux/contacts/contacts-selectors';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={css.item}>
      <div className={css.wrapper}>
        <a href={`tel: ${number}`} className={css.link}>
          <PhoneAndroidIcon />
        </a>
        <span className={css.name}>{name}: </span>
        <span className={css.number}>{number}</span>
        <div className={css.contact}></div>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => handleDeleteContact(id)}
        disabled={isLoading}
      >
        <DeleteForeverIcon />
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
