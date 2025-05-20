import React, { useEffect, useState } from "react";
import styles from "./clients.module.scss";
import Menu from "../../customCompoents/menu/Menu";
import { clientsData } from "../../../data/dataSheet";
const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prev) =>
          prev === clientsData.length - 1 ? 0 : prev + 1
        );
      }, 3000); // change every 3 seconds

      return () => clearInterval(interval);
    }
  });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? clientsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === clientsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container} id="clients">
      <div className={styles.menu}>
        <Menu title={"Clients"} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.title}>
            What My <span className={styles.span}>Clients Says</span>
          </div>
          <div className={styles.desc}>
            Hear from those I've had the pleasure to work with — real stories of
            collaboration, creativity, and successful digital transformations.
          </div>
        </div>
        <div className={styles.bottom}>
          {!isMobile && (
            <div className={styles.buttonWrapper}>
              <button onClick={handlePrev} className={styles.navButton}>
                ←
              </button>
            </div>
          )}

          <div className={styles.bottomContainer}>
            <div className={styles.bottomTop}>
              <div className={styles.bottomLeft}>
                <img
                  src={clientsData[activeIndex]?.img}
                  alt="img"
                  className={styles.logo}
                />
              </div>
              <div className={styles.bottomRight}>
                <div className={styles.name}>
                  {clientsData[activeIndex]?.name}
                </div>
                <div className={styles.role}>
                  {clientsData[activeIndex]?.role}
                </div>
              </div>
            </div>
            <div className={styles.bottomBottom}>
              <div className={styles.says}>
                {clientsData[activeIndex]?.desc}
              </div>
              <div className={styles.star}>
                {clientsData[activeIndex]?.star}
              </div>
            </div>
            <div className={styles.bottommb}>
              <div className={styles.name}>
                {clientsData[activeIndex]?.name}
              </div>
              <div className={styles.role}>
                {clientsData[activeIndex]?.role}
              </div>
            </div>
          </div>
          {!isMobile && (
            <div className={styles.buttonWrapper}>
              <button onClick={handleNext} className={styles.navButton}>
                →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clients;
