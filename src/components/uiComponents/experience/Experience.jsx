import React from "react";
import styles from "./experience.module.scss";
import { styled } from "@mui/material/styles";
import { Box, Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`& .MuiStepConnector-line`]: {
    height: "150px",
  },
}));

const steps = [
  {
    id: 1,
    year: "2024-2025",
    label: "Role: Project Director and Web Developer",
    role: "Company: Kriha IT Solution",
  },
  {
    id: 2,
    year: "2024",
    label: "Role: Software Developer",
    role: "Company: RKV INSTITUTE",
  },
  {
    id: 3,
    year: "2022-2023",
    label: "Role: Web developer",
    role: "Company: Hexaware Technologies",
  },
];
const Experience = () => {
  return (
    <div className={styles.container} id="experience">
      <div className={styles.wrapper}>
        <div className={styles.top}>
          {" "}
          Work <span className={styles.span}>Experience</span>
        </div>
        <div className={styles.bottom}>
          <Box>
            <Box>
              <Stepper
                activeStep={3}
                orientation="vertical"
                connector={<CustomConnector />}
              >
                {steps.map((item) => (
                  <Step key={item?.id}>
                    <StepLabel
                      StepIconComponent={() => (
                        <AdsClickIcon style={{ color: "orange" }} />
                      )}
                    >
                      <div className={styles.cardWrapper}>
                        <div className={styles.year}>{item?.year}</div>
                        <div className={styles.label}>{item?.label}</div>
                        <div className={styles.label}>{item?.role}</div>
                      </div>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Experience;
