import { Fragment } from "react";




import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <Fragment>
      <div className={styles.home}>
        <h1 className={styles.name}>
          I AM <br />
          SANISHKA JAYASENA
        </h1>
        <h1 className={styles.occupation}>WEB DEVELOPER</h1>
      </div>
      
    </Fragment>
  );
};

export default Home;
