import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../utili";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.miniCon}>
        <img
          className={styles.aboutImg}
          src={getImageUrl("about/about.png")}
          alt="him siiting on floor"
        />
        <ul className={styles.aboutInfo}>
          <li>
            <img src={getImageUrl("about/arrow.png")} alt="arrow" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I am a front-end developer, with experience in building
                responsive and optimized sites.
              </p>
            </div>
          </li>
          {/* <li>
            <img src={getImageUrl("about/cpu.png")} alt="cpu" />
            <div>
              <h3>Backend Developer</h3>
              <p>
                I have experience with Node.js, Express.js and connecting
                webapps with APIs.
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
