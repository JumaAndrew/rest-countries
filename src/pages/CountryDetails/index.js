import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import classes from './countryDetails.module.css';

const CountryDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state.prop;

  const currencies = country.currencies.map((currency) => (
    <span>{currency.name}</span>
  ));

  const languages = country.languages.map((language) => (
    <span>{language.name}</span>
  ));

  const goHome = () => {
    navigate('/');
  };

  return (
    <Card>
      <button onClick={goHome} className={classes.button}>
        Back
      </button>
      <div className={classes.country}>
        <img className={classes.country__image} src={country.flags.png}></img>
        <div className={classes.country__details}>
          <p className={classes.country__name}>{country.name}</p>
          <div className={classes.country__details_items}>
            <div>
              <div className={classes.country__details_item}>
                <span>Native Name:</span>
                <span>{country.nativeName}</span>
              </div>
              <div className={classes.country__details_item}>
                <span>Population:</span>
                <span>{country.population}</span>
              </div>
              <div className={classes.country__details_item}>
                <span>Region:</span>
                <span>{country.region}</span>
              </div>
              <div className={classes.country__details_item}>
                <span>Sub Region:</span>
                <span>{country.subregion}</span>
              </div>
              <div className={classes.country__details_item}>
                <span>Capital:</span>
                <span>{country.capital}</span>
              </div>
            </div>
            <div>
              <div className={classes.country__details_item}>
                <span>Top Level Domain:</span>
                <span>{country.topLevelDomain}</span>
              </div>
              <div className={classes.country__details_item}>
                <span>Currencies:</span>
                <div>{currencies}</div>
              </div>
              <div className={classes.country__details_item}>
                <span>Languages:</span>
                <div>{languages}</div>
              </div>
            </div>
          </div>
          <div className={classes.country__neighbours}>
            <span>Border Countries:</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CountryDetails;
