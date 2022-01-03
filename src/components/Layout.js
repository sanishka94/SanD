import {
  FcHome,
  FcBriefcase,
  FcGraduationCap,
  FcCommandLine,
} from "react-icons/fc";

import Card from "../components/Card";

import styles from "./Layout.module.css";

const Layout = (props) => {
  const onCardClick = (cardName) => {
    props.pageHandler(cardName);
  };
  return (
    <div className={`${styles.layout_card} ${styles.main_container}`}>
      <div className={`${styles.layout_card} ${styles.header}`}>
        <h2>SanD</h2>
      </div>
      <div className={`${styles.layout_card} ${styles.page_wrapper}`}>{props.children}</div>
      <div className={styles.nav_bar}>
        <Card
          id="home"
          icon={<FcHome size={40} />}
          name="Home"
          onClick={onCardClick}
        />
        <Card
          id="work"
          icon={<FcBriefcase size={40} />}
          name="Work Experience"
          onClick={onCardClick}
        />
        <Card
          id="education"
          icon={<FcGraduationCap size={40} />}
          name="Education"
          onClick={onCardClick}
        />
        <Card
          id="projects"
          icon={<FcCommandLine size={40} />}
          name="Personal Projects"
          onClick={onCardClick}
        />
      </div>
    </div>
  );
};

export default Layout;
