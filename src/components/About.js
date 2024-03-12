import React from "react";
import myImage from "../assets/layer/about.png";
import "../styles/About.css";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="about-text wow animate__animated animate__fadeInUp">
        <h2
          className="about-head wow animate__animated animate__fadeInUp"
          data-wow-delay="0.4s"
        >
          {t("aboutUs")}
        </h2>
        <p
          className="text wow animate__animated animate__fadeInUp"
          data-wow-delay="0.6s"
        >
          {t("aboutDescription")}
        </p>
      </div>
      <img
        src={myImage}
        alt="about"
        className="wow about_img  animate__animated animate__fadeIn"
        data-wow-delay="0.2s"
      />
    </div>
  );
};

export default About;
