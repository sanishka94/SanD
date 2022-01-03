import { useState } from "react";

import styles from "./Ball.module.css";

const Ball = (props) => {
  const [seeDetails, setSeeDetails] = useState(false);

  const clickHandler = () => {
    setSeeDetails(!seeDetails);
  };
  return (
    <div
      key={props.id}
      className={seeDetails ? styles.square : styles.ball}
      onClick={clickHandler}
    >
      <div className={styles.heading}>
        {props.icon}
        {props.name}
      </div>
      {seeDetails && (
        <div className={styles.details}>
          {props.details.map((entry) => (
            <div className={styles.detail}><p>{entry}</p></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ball;
