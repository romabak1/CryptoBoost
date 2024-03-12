import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../assets/logo.svg";
import scrollToTop from "../helpers/scrollToTopHelper";
import useModalStore from "../store/modal";
import "../styles/Navbar.css"; // assuming you have an accompanying CSS file

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { isModal, setIsModal } = useModalStore();
  const [burger, setBurger] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ru" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const closeBurger = () => {
    setBurger(false);
  };

  return (
    <header>
      {window.innerWidth >= 1130 ? (
        <>
          <div className="navbar">
            <Logo className="logo logo-cursor" onClick={scrollToTop} />

            <div className="navbar-menu">
              <Link
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="navbar-item"
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
                className="navbar-item"
              >
                {t("about")}
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="navbar-item"
              >
                {t("services")}
              </Link>
              <Link
                to="reviews"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="navbar-item"
              >
                {t("reviews")}
              </Link>
              <Link
                to="faq"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="navbar-item"
              >
                {t("faq")}
              </Link>
            </div>
            <div className="header-buttons">
              <button
                className="navbar-contact"
                onClick={() => setIsModal(true)}
              >
                {t("contactUs")}
              </button>
              <button className="lang-button" onClick={toggleLanguage}>
                {currentLanguage.toUpperCase()}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mobile-header">
            <div
              className={burger ? "burger active" : "burger"}
              style={{ paddingTop: burger ? 18 : 8 }}
              onClick={() => setBurger(!burger)}
            >

              <span></span>
              <span></span>
              <span></span>
            </div>


            <button
              className="navbar-contact mobile-translate-button"
              onClick={() => {
                closeBurger();
                setIsModal(!isModal);
              }}
            >
              {t("contactUs")}
            </button>

          </div>
          <div className={burger ? "sub-menu active" : "sub-menu"}>
            <div className="jse">
            <Logo
              className="mobile-menu-logo logo-cursor"
              onClick={scrollToTop}
            />

            <button className="lang-button " onClick={toggleLanguage}>
              {currentLanguage.toUpperCase()}
            </button>
            </div>
            <p className="menu-title"> {t("menu")}</p>
            <div className="mobile-menu">
              <Link
                className="mobile-menu-item"
                onClick={() => {
                  closeBurger();
                  scrollToTop();
                }}
              >
                {t("main")}
              </Link>
              <Link
                to="about"
                className="mobile-menu-item"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeBurger}
              >
                {t("about")}
              </Link>

              <Link
                to="services"
                className="mobile-menu-item"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeBurger}
              >
                {t("services")}
              </Link>
              <Link
                to="reviews"
                className="mobile-menu-item"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeBurger}
              >
                {t("reviews")}
              </Link>

              <Link
                to="faq"
                className="mobile-menu-item"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeBurger}
              >
                {t("faq")}
              </Link>


            </div>
            

            <p className="menu-copyright">
              2024 CryptoBoost. All Rights Reserved.
            </p>

          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
