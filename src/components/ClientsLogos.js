import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/ClientsLogos.css";

import logo1 from "../assets/icons/logo1.svg";
import logo10 from "../assets/icons/logo10.svg";
import logo11 from "../assets/icons/logo11.svg";
import logo2 from "../assets/icons/logo2.svg";
import logo3 from "../assets/icons/logo3.svg";
import logo4 from "../assets/icons/logo4.svg";
import logo6 from "../assets/icons/logo6.svg";
import logo7 from "../assets/icons/logo7.svg";
import logo8 from "../assets/icons/logo8.svg";
import logo9 from "../assets/icons/logo9.svg";
import { slidesAdaptiveCount } from "../helpers/logoSliderHelper";

const ClientsLogos = () => {
  const { t } = useTranslation();

  const slidesCount = useMemo(() => slidesAdaptiveCount(window.innerWidth), []);

  const settings = {
    infinite: true,
    slidesToShow: slidesCount,
    swipeToSlide: false,
    dots: false,
    speed: 5000,
    autoplay: true,
    useCSS: true,
    draggable: false,
    focusOnSelect: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="clients-logos">
      <div className="slider-title-container">
        <p className="wow animate__animated animate__fadeInUp clients_text">
          {t("ourClients")}
        </p>
      </div>
      <Slider {...settings} className="slider">
        <div className="slide">
          <img src={logo1} className="slide-image" alt="slide" />
        </div>
        <div className="slide">
          <img src={logo2} className="slide-image" alt="slide" />
        </div>
        {/* <div className="slide">
          <img src={logo3} className="slide-image" alt="slide" />
        </div> */}
        <div className="slide">
          <img src={logo9} className="slide-image" alt="slide" />
        </div>
        <div className="slide">
          <img src={logo4} className="slide-image" alt="slide" />
        </div>
        <div className="slide">
          <img src={logo6} className="slide-image" alt="slide" />
        </div>
        <div className="slide">
          <img src={logo7} className="slide-image" alt="slide" />
        </div>
        <div className="slide">
          <img src={logo8} className="slide-image" alt="slide" />
        </div>
        <div className="slide">
          <img src={logo10} className="slide-image" alt="slide" />
        </div>
        <div className="slide">
          <img src={logo11} className="slide-image" alt="slide" />
        </div>
      </Slider>
    </div>
  );
};

export default ClientsLogos;
