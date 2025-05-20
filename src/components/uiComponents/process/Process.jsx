import React from "react";
import Menu from "../../customCompoents/menu/Menu";
import styles from "./process.module.scss";
import ProcessCard from "../../customCompoents/processCard/ProcessCard";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DrawIcon from "@mui/icons-material/Draw";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";

const Process = () => {
  return (
    <div className={styles.container} id="process">
      <div className={styles.top}>
        {" "}
        <Menu title={"Process"} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>
          Our Work <span className={styles.span}>Process</span>
        </div>
        <div className={styles.desc}>
          From concept to code, I guide your project through every critical
          phase. With thoughtful planning, user-centric design, and clean
          development, I build digital solutions that perform.
        </div>

        <ProcessCard
          title={"Concept"}
          desc={
            "I begin by understanding your vision and goals.Together, we shape a clear roadmap for your digital product."
          }
          icon={
            <TipsAndUpdatesIcon
              style={{ fontSize: "80px", color: " rgb(59, 46, 46) " }}
            />
          }
          position="left"
        />
        <ProcessCard
          title={"Design"}
          desc={
            "I create intuitive, user-focused designs that reflect your brand. Every pixel is crafted to enhance experience and usability."
          }
          icon={
            <DrawIcon
              style={{ fontSize: "80px", color: " rgb(59, 46, 46) " }}
            />
          }
          position="center"
        />
        <ProcessCard
          title={"Development"}
          desc={
            "Using modern web technologies, I turn designs into reality. The result is a fast, responsive, and reliable website or app."
          }
          icon={
            <DeveloperBoardIcon
              style={{ fontSize: "80px", color: " rgb(59, 46, 46) " }}
            />
          }
          position="right"
        />
      </div>
    </div>
  );
};

export default Process;
