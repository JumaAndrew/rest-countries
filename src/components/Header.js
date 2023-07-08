import { Outlet } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
  // const darkModeHandler = () => {
  //   const mainEl = document.querySelector('main');
  //   mainEl.style.setProperty('--color-light-gray', 'blue');

  //   const headerEl = document.getElementById('header');
  //   headerEl.style.setProperty('--color-light-gray-2', 'blue');

  //   const countryEl = document.querySelectorAll('#country');
  //   countryEl.forEach((countryEl) => {
  //     countryEl.style.setProperty('--color-white', 'blue');
  //   });
  // };

  return (
    <>
      <div className={classes.header} id="header">
        <p className={classes.header__heading}>Where in the world?</p>
        <div className={classes.header__dark_mode}>
          <ion-icon
            name="moon-outline"
            id="moon-outline"
            className={classes.moon__outline}
          ></ion-icon>
          <p>Dark Mode</p>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
