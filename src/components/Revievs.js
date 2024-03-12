import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../assets/test0.png";
import img2 from "../assets/test1.png";
import img3 from "../assets/test2.png";
import "../styles/Revievs.css";
import RevCard from "./RevCard";

const Revievs = () => {
  const { t } = useTranslation();
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
    useCSS: true,
    draggable: true,
    focusOnSelect: true,
    pauseOnHover: true,
    swipeToSlide: false,
  };

  return (
    <div id="reviews">
      <h1 className="revh1 wow animate__animated animate__fadeInUp">
        {t("clientReviews")}
      </h1>
      <div className="Revievs">
        <Slider {...settings} className="slider">
          <div className="r-slide">
            <RevCard
              className="revCard"
              img={img1}
              h3="Layer AI, Co-founder"
              h1="Clément Tequi"
              text="A huge advantage of the service is free trial period for the first couple of days. If you in doubt - just take the free test, everything is done at the highest level."
            />
          </div>
          <div className="r-slide">
            <RevCard
              className="revCard"
              img={img2}
              h3="ChainGPT, Advisor"
              h1="Guilherme Jovanović"
              text="Есть некоторые ньюансы, но их быстро исправили, отличная слаженная работа команды, нельзя не отметить адекватный ценник"
            />
          </div>
          <div className="r-slide">
            <RevCard
              className="revCard"
              img={img3}
              h3="COINZIX, CEO & Founder"
              h1="Ovidiu Chirodea"
              text="From studying our audience, to developing a strategy for conducting valuable research. Everything in which LocalTrade’s advertising participated - the CryptoBoost staff performed each task at 100%."
            />
          </div>
          
        </Slider>
      </div>
    </div>
  );
};

export default Revievs;
