import { Outlet } from 'react-router-dom';
import { Navbar } from 'modules/Navbar/Navbar';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <Navbar />
      <Outlet />
    </div>
  );
};
