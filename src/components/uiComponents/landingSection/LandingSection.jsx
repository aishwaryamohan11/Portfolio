import React from "react";
import styles from "./landingSection.module.scss";
import Menu from "../../customCompoents/menu/Menu";
import Button from "@mui/material/Button";

const LandingSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Menu title={"Hello"} />
        </div>
        <div className={styles.middle}>
          I'm{" "}
          <span className={styles.span}>
            Aishwarya ,<br />
            Frond end developer , Web developer
          </span>{" "}
        </div>
        <div className={styles.desc}>
          I build sleek, scalable web solutions using the latest technologies to
          bring your vision online.
        </div>
        <div className={styles.bottom}>
          <Button
            variant="contained"
            href="https://www.linkedin.com/in/aishwarya-m-591834246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            classes={{ root: styles.button }}
          >
            Hire Me
          </Button>
          {/* <Button
            variant="contained"
            href="https://www.linkedin.com/in/aishwarya-m-591834246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            classes={{ root: styles.button }}
          >
            Contact Me
          </Button> */}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default LandingSection;
