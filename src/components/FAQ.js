import React from "react";
import faqimg from "../assets/layer/FAQimg.png";
import MyDropdown from "../components/MyDropdown.js";
import "../styles/FAQ.css";
import { useTranslation } from "react-i18next";


const FAQ = () => {
  const { t } = useTranslation();
  return (
    <div id="faq" className="question-container-align">
      <div className="question-container">
        <h1 className="FAQ wow animate__animated animate__fadeInUp">FAQ</h1>
        <MyDropdown
          num={"01"}
          question={t('faq1')}
          answer={t('faq1Text')}
        />
        <MyDropdown
          num={"02"}
          question={t('faq2')}

          answer={t('faq2Text')
          }
        />
        <MyDropdown
          num={"03"}
          question={t('faq3')}
          answer={t('faq3Text')}
        />
        <MyDropdown
          num={"04"}
          question={t('faq4')}
          answer={t('faq4Text')}
        />
        <MyDropdown
          num={"05"}
          question={t('faq5')}
          answer={t('faq5Text1')}
          answer2={t('faq5Text2')}
        />
      </div>
      <img src={faqimg} alt="" className="faqimg" />
    </div>
  );
};

export default FAQ;
