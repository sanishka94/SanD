import styles from "./Education.module.css";

const edu_data = [
  {
    title: "ReactJs - The Complete Guide (incl Hooks, React Router, Redux)",
    place: "Udemy",
    year: "2021",
  },
  {
    title: "Flutter & Dart - The Complete Guide",
    place: "Udemy",
    year: "2021",
  },
  {
    title: "Master of Engineering in Transportation",
    place: "Asian Institute of Technology, Thailand",
    year: "2016-2018",
    details: "GPA: 3.71",
  },
  {
    title: "Bachelors: B.S.E. (Hons) Civil and Infrastructure Engineering",
    place: "Asian Institute of Technology, Thailand",
    year: "2012-2016",
  },
  {
    title: "Oracle Certified Professional Java Programmer",
    year: "2012",
  },
];

const Education = () => {
  const entry = edu_data[0];
  return (
    <div className={styles.content_wrapper}>
      {edu_data.map((entry) => (
        <div className={styles.edu}>
          <p>
            <b>{entry.title}</b>
          </p>
          {entry.place && <p>{entry.place}</p>}
          <p>{entry.year}</p>
          {entry.details && <p>{entry.details}</p>}
        </div>
      ))}
    </div>
  );
};

export default Education;
