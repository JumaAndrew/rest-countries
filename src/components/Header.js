import { Outlet } from 'react-router-dom';

import classes from './Header.module.css';
import { useState } from 'react';
const rootEl = document.getElementById('root');

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  if (!darkMode) {
    rootEl.style.setProperty('--color-light-gray', 'hsl(0, 0%, 98%)');
    rootEl.style.setProperty('--color-white', 'hsl(0, 0%, 100%)');
    rootEl.style.setProperty('--color-box-shadow', 'rgba(0, 0, 0, 0.1)');
    rootEl.style.color = 'hsl(209, 23%, 22%)';
  } else {
    rootEl.style.setProperty('--color-light-gray', 'hsl(209, 23%, 22%)');
    rootEl.style.setProperty('--color-white', 'hsl(209, 23%, 22%)');
    rootEl.style.setProperty('--color-box-shadow', 'rgba(0, 0, 0, 0.6)');
    rootEl.style.color = 'hsl(0, 0%, 100%)';
  }

  const toggleDarkMode = () => {
    setDarkMode((previousState) => !previousState);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header} id="header">
          <p className={classes.header__heading}>Where in the world?</p>
          <div className={classes.header__dark_mode} onClick={toggleDarkMode}>
            <ion-icon
              name="moon-outline"
              id="moon-outline"
              className={classes.moon__outline}
            ></ion-icon>
            <p>Dark Mode</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
