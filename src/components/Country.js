import classes from './Country.module.css';

const Country = (props) => {
  const { country } = props;

  return (
    <div className={classes.country}>
      <img
        className={classes.country__image}
        src={country.flags.png}
        alt={`Flag of ${country.name}`}
      ></img>
      <div className={classes.country__details}>
        <p className={classes.country__name}>{country.name}</p>
        <div>
          <span>Population:</span>
          <span>{country.population}</span>
        </div>
        <div>
          <span>Region:</span>
          <span>{country.region}</span>
        </div>
        <div>
          <span>Capital:</span>
          <span>{country.capital}</span>
        </div>
      </div>
    </div>
  );
};

export default Country;
