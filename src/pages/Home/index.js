import { useSelector, useDispatch } from 'react-redux';

import classes from './Home.module.css';
import Country from '../../components/Country';
import { useEffect, useState } from 'react';
import { countriesActions } from '../../store/base';
import Card from '../../components/Card';

const Home = () => {
  const [inputState, setInputState] = useState('');
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  // any tine search input empty restore displayed countries
  useEffect(() => {
    if (inputState.trim() === '') {
      dispatch(countriesActions.restore());
    }
  }, [inputState]);

  const countriesToDisplay = countries.slice(0, 50);

  const countryList = countriesToDisplay.map((country) => (
    <Country key={country.area} country={country}></Country>
  ));

  const inputHandler = (e) => {
    setInputState(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();

    if (inputState.trim() === '') return;

    dispatch(countriesActions.searchCountry(inputState));
  };

  const filterHandler = (e) => {
    dispatch(countriesActions.filterByRegion(e.target.value));
  };

  return (
    <Card>
      <div className={classes.header}>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={inputHandler}
          />
        </form>
        <select onChange={filterHandler} className={classes.select}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="All">All</option>
        </select>
      </div>
      <div className={classes.content}>{countryList}</div>
    </Card>
  );
};

export default Home;
