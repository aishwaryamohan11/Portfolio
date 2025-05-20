import React from "react";
import Menu from "../../customCompoents/menu/Menu";
import styles from "./aboutUs.module.scss";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const detailMap = [
  { id: 1, label: "Name", value: "Aishwarya Mohanraj" },
  { id: 2, label: "Phone Number", value: "7339102942", link: "tel:7339102942" },
  {
    id: 3,
    label: "Email",
    value: "aishwaryarj11@gmail.com",
    link: "mailto:aishwaryarj11@gmail.com",
  },
  {
    id: 4,
    label: "GitHub",
    value: "link",
    link: "https://github.com/aishwaryamohan11?tab=repositories",
  },
];
const AboutUs = () => {
  return (
    <div className={styles.container} id="aboutUs">
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Menu title="About Me" />
        </div>

        <div className={styles.desc}>
          Get a website that will make a lasting impression on your audience!!!
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomTop}>
            {detailMap?.map((item) => (
              <div className={styles.bottomWrapper}>
                {" "}
                <div className={styles.label}>{item?.label}</div>
                <div className={styles.value}>
                  <a
                    href={item?.link}
                    rel="noreferrer"
                    target="_blank"
                    className={styles.link}
                  >
                    {item?.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.bottomEnd}>
            <Button
              variant="contained"
              classes={{ root: styles.button }}
              endIcon={<ArrowOutwardIcon />}
              target="_blank"
              href="https://www.linkedin.com/in/aishwarya-mohanraj-591834246/"
            >
              Contact me
            </Button>
            <Button
              variant="outlined"
              classes={{ root: styles.buttonDownload }}
              endIcon={<CloudDownloadIcon />}
              target="_blank"
              href={
                "https://acrobat.adobe.com/id/urn:aaid:sc:AP:0c15f13b-f613-4f70-b402-e721759878f5"
              }
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
