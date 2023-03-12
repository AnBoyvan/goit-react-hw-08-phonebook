import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
export const AuthNav = () => {
  return (
    <Box style={{ display: 'flex', gap: '15px' }}>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Log In
      </NavLink>
    </Box>
  );
};
