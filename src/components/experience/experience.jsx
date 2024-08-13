import React from "react";
import styles from "./experience.module.css";
import { getImageUrl } from "../../utili";
import skills from "../../data/skills.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.imgContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        {/* <ul></ul> */}
      </div>
    </section>
  );
};
