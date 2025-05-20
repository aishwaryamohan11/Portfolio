import React, { useState } from "react";
import styles from "./contactUs.module.scss";
import emailjs from "emailjs-com";
import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import toast from "react-hot-toast";
import Menu from "../../customCompoents/menu/Menu";

const InputBox = [
  {
    id: 1,
    label: "Full name",
    inputkey: "name",
    type: "text",
    width: "637px",
    height: "73px",
  },
  {
    id: 2,
    label: "Email",
    inputkey: "email",
    type: "email",
    width: "637px",
    height: "73px",
  },
  {
    id: 3,
    label: "Phone Number",
    inputkey: "phoneNumber",
    type: "number",
    width: "637px",
    height: "73px",
  },
  {
    id: 4,
    label: "Your Message",
    inputkey: "message",
    type: "text",
    width: "637px",
    height: "211px",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log("formData", formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_7yxu1ig",
        "template_8fp1mtb",
        formData,
        "WvuXsQlh4YzhkXwab"
      )
      .then((response) => {
        toast.success("Message Sent Successfully!👏");
        // console.log("success");
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      })
      .catch((error) => {
        // toast.error("Failed to send message. Please try again.!");
      });
  };
  return (
    <div className={styles.show} id="contactus">
      <div style={{ padding: "2%" }}>
        <Menu title={"Contact Us"} />
      </div>
      <div id="contactus" className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            GET IN <span className={styles.span}>TOUCH</span>
          </div>
          <div className={styles.bottom}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {InputBox?.map((item) => (
                <FormControl
                  classes={{ root: styles?.inputContainer }}
                  key={item?.id}
                >
                  <InputLabel
                    htmlFor={`outlined-input-address-${item?.inputkey}`}
                    sx={{ color: "#F5F5F5" }}
                  >
                    {item?.label}
                  </InputLabel>
                  <OutlinedInput
                    sx={{
                      border: "1px solid white",
                      // width: item?.width,
                      height: item?.height,
                      color: "white",
                    }}
                    classes={{
                      root: styles?.input,
                      input: styles?.inputFeild,
                    }}
                    startAdornment={item?.startIcon}
                    type={item?.type}
                    id={`outlined-input-address-${item?.inputkey}`}
                    label={item?.label}
                    value={formData?.[item?.inputkey]}
                    onChange={handleChange}
                    name={item?.inputkey}
                    required
                  />
                </FormControl>
              ))}
              <div className={styles.buttonContainer}>
                <Button
                  variant="contained"
                  classes={{ root: styles.button }}
                  type="submit"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
