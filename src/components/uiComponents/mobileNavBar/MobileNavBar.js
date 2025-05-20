import React, { useState } from "react";
import styles from "./mobileNavBar.module.scss";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const navData = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "#aboutUs" },
  {
    id: 3,
    title: "Skills",
    link: "#skills",
  },
  {
    id: 4,
    title: "Process",
    link: "#process",
  },
  { id: 5, title: "projects", link: "#projects" },
  {
    id: 6,
    title: "Clients",
    link: "#clients",
  },
  { id: 7, title: "Contact Us", link: "#contactus" },
];

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mobileContainer}>
      <div className={styles.mobileWrapper}>
        <div className={styles.left}>Portfolio</div>
        <div className={styles.right}>
          <MenuIcon
            onClick={() => setOpen(true)}
            classes={{ root: styles.button }}
          />
        </div>

        {open && (
          <div className={styles.menuOverLay}>
            <div className={styles.menuOverLayContainer}>
              <div className={styles.menuOverLayWrapper}>
                <div className={styles.top}>
                  <div className={styles.right}>
                    <CancelOutlinedIcon
                      className={styles.closeButton}
                      onClick={() => setOpen(false)}
                    />
                  </div>
                </div>
                <div className={styles.bottom}>
                  <ul className={styles.navWrapper}>
                    {navData.map((nav) => (
                      <li
                        className={styles.nav}
                        key={nav.id}
                        onClick={() => setOpen(false)}
                      >
                        <a href={nav.link} className={styles.link}>
                          {nav.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.blurCard} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
