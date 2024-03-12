import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { ReactComponent as IN } from "../assets/icons/INsvg.svg";
import { ReactComponent as TG } from "../assets/icons/TGsvg.svg";
import { ReactComponent as X } from "../assets/icons/Xsvg.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import scrollToTop from "../helpers/scrollToTopHelper";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="upside wow animate__animated animate__fadeIn">
        <Logo className="logo logo-cursor" onClick={scrollToTop} />

        <div className="footer-menu">
          <Link
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="footer-item"
            onClick={scrollToTop}
          >
            {t("main")}
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="footer-item"
          >
            {t("about")}
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="footer-item"
          >
            {t("services")}
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="footer-item"
          >
            {t("reviews")}
          </Link>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="footer-item"
          >
            {t("faq")}
          </Link>
        </div>
      </div>
      <div className="downside wow animate__animated animate__fadeIn">
        <div className="social">

          <a href="https://x.com/xplor_e?s=21&t=wnlhD_TXuAcZHGkeJdHJWg" target="_blank" rel="noopener noreferrer">
            <X className="icon icon-hover" />
          </a>

          <IN className="icon icon-hover" />

          <a href="https://t.me/Nh_exz" target="_blank" rel="noopener noreferrer">
            <TG className="icon-tg icon-hover" />
          </a>

        </div>
        <span className="e-mail">cryptoboost28@gmail.com</span>

        <div className="rights">
          <p>2024 CryptoBoost.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
