import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/CardsSection.css";
import Cards1 from "./Cards1.js";
import Cards2 from "./Cards2.js";
import Cards3 from "./Cards3.js";
import Cards4 from "./Cards4.js";
import Cards5 from "./Cards5.js";
import Cards6 from "./Cards6.js";

import ServButton from "./ServButton.js";

const CardsSection = () => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => { }, [activeButton]);
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div>
      <section id="services" className="services">
        <h2 className="wow animate__animated animate__fadeInUp">
          {t("ourServices")}
        </h2>
        <div
          className="servtext wow animate__animated animate__fadeInUp"
          data-wow-delay="0.2s"
        >
          <span>{t("serviceDescription")}</span>
          <span className="orange">{t("freeTestOffer")}</span>
        </div>

        <div
          className="services-buttons wow animate__animated animate__fadeIn"
          data-wow-delay="0.4s"
        >
          <div className="row buttons-row">
            <ServButton
              label={t(`shilling`)}
              // discount={10}
              onClick={() => handleButtonClick(1)}
              isActive={activeButton === 1}
            />
            <ServButton
              label={t(`groceHacking`)}
              // discount={20}
              onClick={() => handleButtonClick(2)}
              isActive={activeButton === 2}
            />
            <ServButton
              label={t(`otherServices`)}
              onClick={() => handleButtonClick(3)}
              isActive={activeButton === 3}
            />
            <ServButton
              label={t(`activities`)}
              onClick={() => handleButtonClick(6)}
              isActive={activeButton === 6}
            />
          </div>
          <div className="row buttons-row">
            <ServButton
              label={t(`ambassadorProgramCreation`)}
              onClick={() => handleButtonClick(4)}
              isActive={activeButton === 4}
            />
            <ServButton
              label={t(`cmRulling`)}
              onClick={() => handleButtonClick(5)}
              isActive={activeButton === 5}
            />
            
          </div>
        </div>
      </section>
      <div className="wow animate__animated animate__fadeInUp">
        {activeButton === 1 && <Cards1 key="1" />}
        {activeButton === 2 && <Cards2 key="2" />}
        {activeButton === 3 && <Cards3 key="3" />}
        {activeButton === 4 && <Cards4 key="4" />}
        {activeButton === 5 && <Cards5 key="5" />}
        {activeButton === 6 && <Cards6 key="6" />}
      </div>
    </div>
  );
};

export default CardsSection;
