import { useSelector } from 'react-redux';

import classes from './Home.module.css';
import Country from '../../components/Country';

const Home = () => {
  const { countries } = useSelector((state) => state.countries);

  const countriesToDisplay = countries.slice(0, 8);

  const countryList = countriesToDisplay.map((country) => (
    <Country key={country.area} country={country}></Country>
  ));

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.header}>
          <input placeholder="Search for a country..." />
          <select>
            <option value="" selected>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className={classes.content}>{countryList}</div>
      </div>
    </main>
  );
};

export default Home;
