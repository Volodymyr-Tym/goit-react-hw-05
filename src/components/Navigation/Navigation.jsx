import { Link, NavLink, Outlet } from 'react-router-dom';
import { SiBitrise } from 'react-icons/si';

import clsx from 'clsx';
import styles from './Navigation.module.css';

const Navigation = () => {
  const linkClass = ({ isActive }) =>
    clsx(styles.link, isActive && styles.active_link);

  return (
    <header className={styles.header}>
      <div className={styles.logo_wrap}>
        <Link className={styles.logo_link} to="/">
          <SiBitrise className={styles.logo_icon} />{' '}
          <span className={styles.logo_title}>SmileTV</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <NavLink className={linkClass} to="/">
          Home
        </NavLink>

        <NavLink className={linkClass} to="/movies" end>
          Find movie
        </NavLink>

        <Outlet />
      </nav>
    </header>
  );
};

export default Navigation;
