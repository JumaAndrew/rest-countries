import { useNavigate } from 'react-router-dom';
import classes from './Country.module.css';

const Country = (props) => {
  const navigate = useNavigate();

  const { country } = props;

  const showCountryDetails = () => {
    navigate('/countryDetails', { state: { prop: country } });
  };

  return (
    <div className={classes.country} id="country" onClick={showCountryDetails}>
      <img
        className={classes.country__image}
        src={country.flags.png}
        alt={`Flag of ${country.name}`}
      ></img>
      <div className={classes.country__details}>
        <p className={classes.country__name}>{country.name}</p>
        <div className={classes.country__details_item}>
          <span>Population:</span>
          <span>{country.population}</span>
        </div>
        <div className={classes.country__details_item}>
          <span>Region:</span>
          <span>{country.region}</span>
        </div>
        <div className={classes.country__details_item}>
          <span>Capital:</span>
          <span>{country.capital}</span>
        </div>
      </div>
    </div>
  );
};

export default Country;
