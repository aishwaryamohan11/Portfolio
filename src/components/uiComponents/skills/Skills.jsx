import React from "react";
import styles from "./skills.module.scss";
import { skills } from "../../../data/dataSheet";
import Marquee from "react-fast-marquee";
import Menu from "../../customCompoents/menu/Menu";
const Skills = () => {
  return (
    <div className={styles.container} id="skills">
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Menu title={"Skills"} />
        </div>
        <div className={styles.title}>
          My Work<span className={styles.span}> Skills</span>
        </div>
        <Marquee>
          <div className={styles.bottom}>
            {skills?.map((item) => (
              <div className={styles.imgWrapper}>
                <img src={item?.img} alt="icon" className={styles.img} />
              </div>
            ))}
          </div>
        </Marquee>
        <div className={styles.mbBottom}>
          <Marquee>
            <div className={styles.mbBottomWrapper}>
              {skills?.map((item) => (
                <div className={styles.imgWrapper}>
                  <img src={item?.img} alt="icon" className={styles.img} />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
