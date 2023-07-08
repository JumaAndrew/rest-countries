import classes from './Card.module.css';

const Card = (props) => {
  return (
    <main className={classes.main}>
      <div className={classes.container}>{props.children}</div>
    </main>
  );
};

export default Card;
