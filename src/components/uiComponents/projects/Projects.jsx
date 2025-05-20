import React from "react";
import styles from "./projects.module.scss";
import Menu from "../../customCompoents/menu/Menu";
import Button from "@mui/material/Button";
import noteLogo from "../../../assets/notesslogo.png";
import portfolioLogo from "../../../assets/Screenshot 2025-05-14 220204.png";
import sunfyreTechLogo from "../../../assets/sun.jpg";
import vaLogo from "../../../assets/va.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const projectMap = [
  {
    id: 1,
    title: "Kriha IT Solution",
    desc: "A highly responsive website built with Next.js using Server-Side Rendering (SSR) for optimal performance and SEO. The project features a smooth marquee effect, enhancing the visual appeal and user engagement.",
    img: "https://www.krihaitsolutions.com/_next/static/media/logo.a3dff8d1.png",
    link: "https://www.krihaitsolutions.com/",
  },
  {
    id: 4,
    title: "SunFyre Tech",
    desc: "This responsive website built using React.js. The project features Powering the Future with Innovation and Sustainability. specialize in electric scooter development, CCTV installation and repair, and solar energy solutions. ",
    img: sunfyreTechLogo,
    link: "https://sunfyretech.netlify.app/",
  },
  {
    id: 3,
    title: "Make A Note",
    desc: "My Notes App is a lightweight and user-friendly React Native application that allows you to create, edit, store, and manage your notes with ease.",
    img: noteLogo,
    link: "",
  },
  {
    id: 2,
    title: "Tedi India",
    desc: "A dynamic and responsive website built using Next.js with Server-Side Rendering (SSR) and SCSS for efficient styling. The project features seamless page navigation using slugs, ensuring a clean and structured user experience.",
    img: "https://tedielite.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f81a8d65.png&w=128&q=75",
    link: "https://tedielite.com/",
  },

  {
    id: 5,
    title: "VA Travels",
    desc: "A highly responsive website built with React.js. Featured this form based components. It trusted partner for safe and reliable school trip transportation.",
    img: vaLogo,
    link: "https://vatravels.netlify.app/",
  },
  {
    id: 6,
    title: "Portfolio",
    desc: "This website built using React.js. The project features a smooth marquee effect,sidle move animation, form based component enhancing the visual appeal and user engagement.",
    img: portfolioLogo,
    link: "https://aishwaryaporfolio.netlify.app/",
  },
];
const Projects = () => {
  return (
    <div className={styles.container}  id="projects">
      <div className={styles.wrapper}>
        <Menu title={"Projects"} />
        <div className={styles.top}>
          <div className={styles.title}>
            My <span className={styles.span}>Projects</span>
          </div>
          <div className={styles.desc}></div>
        </div>
        <div className={styles.bottom}>
          {projectMap?.map((item) => (
            <div className={styles.bottomContainer}>
              <div className={styles.bottomWrapper}>
                <div className={styles.bottomTop}>
                  <div className={styles.subTitle}>{item?.title}</div>
                </div>
                <div className={styles.bottomBottom}>
                  <div className={styles.logo}>
                    {" "}
                    <img
                      src={item?.img}
                      alt="projects"
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.desc}>
                    <div className={styles.subDesc}>{item?.desc}</div>
                  </div>
                  <div className={styles.buttonContainer}>
                    {" "}
                    <Button
                      variant="contained"
                      href={item?.link}
                      target="_blank"
                      className={styles.button}
                      endIcon={<ArrowOutwardIcon />}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
