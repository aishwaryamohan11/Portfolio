import React from "react";
import styles from "./processCard.module.scss";

const ProcessCard = ({ icon, title, desc, position }) => {
  return (
    // <div className={`${styles.container} ${styles[position]}`}>
    <div
      className={styles.container}
      style={{ display: "flex", justifyContent: position }}
    >
      <div className={styles.bottomWrapper}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.concept}>
          <div className={styles.title}>{title}</div>
          <div className={styles.desc}>{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
