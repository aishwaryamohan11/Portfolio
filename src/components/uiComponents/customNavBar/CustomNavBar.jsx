import React from "react";
import styles from "./customNavBar.module.scss";
import MobileNavBar from "../mobileNavBar/MobileNavBar";
import NavBar from "../navBar/NavBar";
const CustomNavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <NavBar />
      </div>
      <div className={styles.mbnav}>
        <MobileNavBar />
      </div>
    </div>
  );
};

export default CustomNavBar;
