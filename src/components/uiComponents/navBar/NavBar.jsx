import React from "react";
import styles from "./navBar.module.scss";

const NavBar = ({ onclick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a className={styles.link} href="/">
            Portfolio
          </a>
        </div>
        <div className={styles.right}>
          <ul className={styles.list}>
            <li className={styles.menu}>
              <a className={styles.link} href="/">
                Home
              </a>
            </li>
            <li className={styles.menu}>
              <a className={styles.link} href="#aboutUs" onClick={onclick}>
                About Us
              </a>
            </li>
            <li className={styles.menu}>
              <a className={styles.link} href="#skills">
                Skills
              </a>
            </li>
            <li className={styles.menu}>
              <a className={styles.link} href="#process">
                Process
              </a>
            </li>
            <li className={styles.menu}>
              <a className={styles.link} href="#projects">
                Projects
              </a>
            </li>
            <li className={styles.menu}>
              <a href="#clients" className={styles.link}>
                Clients
              </a>
            </li>

            <li className={styles.menu}>
              <a href="#contactus" className={styles.link}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
