import React from "react";
import { getImageUrl } from "../../utili";
import styles from "./projectCard.module.css";

export const ProjectCard = ({
  project: { imageSrc, title, description, demo, source, skills },
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={getImageUrl(imageSrc)} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>
          Demo
        </a>
        <a className={styles.link} href={source}>
          Source
        </a>
      </div>
    </div>
  );
};
