import React from "react";
import { getImageUrl } from "../../utili";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/mail.png")} alt="email icon" />
          <a href="mailto:arjunsinghpal5389@gmail.com">arjunsinghpal5389@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedln.png")} alt="linkedln icon" />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/arjun-singh-pal-366a002b5"
          >
            linkedln.com/Arjun Singh Pal
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="github icon" />
          <a target="_blank" href="https://github.com/arjunsinghpal19">
            github.com/Arjun Singh Pal
          </a>
        </li>
      </ul>
    </footer>
  );
};
