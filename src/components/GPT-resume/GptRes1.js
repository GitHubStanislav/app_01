import React from "react";
import styles from "./Gptes1.module.css";

const Resume = () => {
  return (
    <div className={styles.resume}>
      <h1 className={styles.name}>John Doe</h1>
      <p className={styles.subtitle}>Frontend Developer</p>

      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.experienceItem}>
        <h3>ABC Company</h3>
        <p className={styles.date}>January 2018 - Present</p>
        <p>
          Developed and maintained responsive web applications using React and
          Redux.
        </p>
      </div>

      <h2 className={styles.sectionTitle}>Education</h2>
      <div className={styles.educationItem}>
        <h3>University of XYZ</h3>
        <p className={styles.date}>September 2014 - June 2018</p>
        <p>Bachelor's Degree in Computer Science</p>
      </div>

      <h2 className={styles.sectionTitle}>Skills</h2>
      <ul className={styles.skillList}>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  );
};

export default Resume;
