import React from "react";
// import styles from "./heroSection.module.scss";

import bgVideo from "../../../assets/video.mp4";
import LandingSection from "../landingSection/LandingSection";
const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        zIndex: 99,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <LandingSection />
    </div>
  );
};

export default HeroSection;
