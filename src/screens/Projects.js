import styles from "./Projects.module.css";

const Projects = () => {
    return <div className={styles.content_wrapper}>
        <div className={styles.prj}>
            <h3>Money by SanD</h3>
            <img src="/app_screen.jpg" />
            <p>Developed a money management app for android using Flutter</p>
            <p>The app is available on the google play store</p>
            <a href="https://play.google.com/store/apps/details?id=com.sand.apps.MoneyLite&hl=en_US&gl=US" target="_blank">See App</a>
        </div>
    </div>;
}

export default Projects;