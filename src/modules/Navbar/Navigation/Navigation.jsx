import { NavLink } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import HomeIcon from '@mui/icons-material/Home';

import css from './Navigation.module.css';
import { Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box style={{ display: 'flex', gap: '15px' }}>
      <NavLink to="/" className={css.link}>
        <HomeIcon />
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Phonebook
        </NavLink>
      )}
    </Box>
  );
};
