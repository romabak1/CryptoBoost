// components/HeroSection.js
import React from "react";
import { useTranslation } from "react-i18next";
import myImage from "../assets/layer/Herolayer1.png";
import { ReactComponent as Logo } from "../assets/logo.svg";
import scrollToTop from "../helpers/scrollToTopHelper";
import useModalStore from "../store/modal";
import "../styles/hero.css";

const HeroSection = () => {
  const { t } = useTranslation();
  const setIsModal = useModalStore((store) => store.setIsModal);

  return (
    <div className="hero-section">
      {window.innerWidth < 800 && (
        <div
          className="mobile-logo-container wow animate__animated animate__fadeIn"
          data-wow-delay="0.8s"
        >
          <Logo className="mobile-logo logo-cursor" onClick={scrollToTop} />
        </div>
      )}
      <div className="cont_mobile animate__animated  animate__fadeIn ">
        <img src={myImage} alt="" className="hero_img_mobile" />
        <div className="gradient_on_img"></div>
      </div>
      <div className="hero-text">
        <h1
          className="animate__animated  animate__fadeInUp first"
          data-wow-delay={"0.3s"}
        >
          {t("strengthenYourBrand")}
        </h1>
        <h1
          className=" animate__animated  animate__fadeInUp  second"
          data-wow-delay="0.4s"
        >
          {t("inTheDigitalWorld")}
        </h1>
        <p
          className=" animate__animated  animate__fadeInUp"
          data-wow-delay="0.6s"
        >
          {t("cryptoMarketingAgencyDescription")}
        </p>
        <button
          className="cta-button  animate__animated animate__fadeInUp animate__delay-1s"
          // data-wow-delay="1.5s"
          onClick={() => setIsModal(true)}
        >
          {t("leaveARequest")}
        </button>
      </div>
      <div className="cont">
        <img src={myImage} alt="" className="hero_img" />
        <div className="gradient_on_img"></div>
      </div>
    </div>
  );
};

export default HeroSection;
