import html from "../assets/icon/html.png";
import scss from "../assets/icon/scss.png";
import css from "../assets/icon/css.png";
import github from "../assets/icon/github.png";
import gitlab from "../assets/icon/gitlab.png";
import react from "../assets/icon/react.png";
import next from "../assets/icon/nextjs.png";
import figma from "../assets/icon/Figma.png";
import wordpress from "../assets/icon/wordpress.png";
import va from "../assets/va_logo.png";
import sun from "../assets/sun.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export const skills = [
  { id: 1, img: wordpress },
  { id: 2, img: react },
  { id: 2, img: next },
  { id: 3, img: html },
  { id: 4, img: figma },
  { id: 5, img: css },
  { id: 6, img: scss },
  { id: 7, img: github },
  { id: 8, img: gitlab },
];

export const clientsData = [
  {
    id: 1,
    img: sun,
    name: "Logeshwaran",
    role: "CEO",
    desc: "Working with them was effortless — they took our ideas and turned them into a beautifully designed, high-performing website. The attention to detail, smooth user experience, and responsive design truly exceeded our expectations.",
    star: "",
  },
  {
    id: 2,
    img: va,
    name: "Mohan Raj",
    role: "Owner",
    desc: "From start to finish, the process was smooth and professional. They delivered a modern, user-friendly website that truly represents our brand",
    star: "",
  },
];

export const icon = [
  {
    id: 1,
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/aishwarya-m-591834246/",
  },
  {
    id: 2,
    icon: <GitHubIcon />,
    link: "https://github.com/aishwaryamohan11",
  },
  {
    id: 3,
    icon: <WhatsAppIcon />,
    link: "https://wa.me/7339102942?text=Hello%20there!",
  },
  {
    id: 4,
    icon: <EmailIcon />,
    link: "mailto:aishwaryarj11@gmail.com",
  },
];

export const menu = [
  {
    id: 1,
    menu: "Home",
    link: "/",
  },
  {
    id: 2,
    menu: "About Us",
    link: "#aboutUs",
  },
  {
    id: 3,
    menu: "Experience",
    link: "#experience",
  },
  // {
  //   id: 4,
  //   menu: "Process",
  //   link: "#process",
  // },
  {
    id: 5,
    menu: "Projects",
    link: "#projects",
  },
  // {
  //   id: 6,
  //   menu: "Clients",
  //   link: "#clients",
  // },
  {
    id: 7,
    menu: "Contact Us",
    link: "#contactus",
  },
];
