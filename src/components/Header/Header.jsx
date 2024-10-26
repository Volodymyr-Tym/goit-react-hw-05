import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import clsx from 'clsx';

const linkClass = ({ isActive }) => clsx(css.link, isActive && css.active_link);
console.log();

const Header = () => {
  return (
    <header>
      <NavLink className={linkClass} to="/">
        Home
      </NavLink>
      <NavLink className={linkClass} to="/movies">
        Find movie
      </NavLink>
    </header>
  );
};

export default Header;
