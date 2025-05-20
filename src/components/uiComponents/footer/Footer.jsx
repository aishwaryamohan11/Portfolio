import React from "react";
import styles from "./footer.module.scss";
import { icon, menu } from "../../../data/dataSheet";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          {icon?.map((item) => (
            <div className={styles.icon}>
              <a
                href={`${item?.link}`}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.list}>{item?.icon}</div>
              </a>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          {menu.map((item) => (
            <div className={styles.item} key={item?.id}>
              <a className={styles.link} href={`${item?.link}`}>
                {item?.menu}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
