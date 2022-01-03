import styles from "./Card.module.css";

const Card = (props) => {
  const clickHandler = () => {
    props.onClick(props.id);
  }

  return (
    <div className={styles.card} onClick={clickHandler}>
      {props.icon}
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
