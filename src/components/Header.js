import { Outlet } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <p className={classes.header__heading}>Where in the world?</p>
        <p className={classes.header__dark_mode}>Dark Mode</p>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
