import React from "react";
import styles from "./menu.module.scss";
const Menu = ({title}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default Menu;
