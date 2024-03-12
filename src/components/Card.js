import React from "react";
import "../styles/Card.css";
import { useTranslation } from "react-i18next";
import { ReactComponent as CardOK } from "../assets/icons/CardOk.svg";
import useModalStore from "../store/modal";
import { Link } from "react-scroll";

const Card = ({ h1, h2, text, crossedPrice, price, text1, text2, text3, text4, text5, text6 }) => {
  const { t } = useTranslation();
  const setIsModal = useModalStore((state) => state.setIsModal);

  return (
    <div className="card">
      <h1 className="h-1">{t(h1)}</h1>
      <h2 className="h-2">{t(h2)}</h2>
      <p className="card-text">{t(text)}</p>

      <p className="crossedPrice">{crossedPrice ? `${crossedPrice}` : ""}</p>

      <p className="price">${price}</p>
      <p className="aMonth"> {t("perMonth")} </p>

      <Link to="reviews" spy={true} smooth={true} offset={0} duration={500}>
        <button className="look">{t("viewReviews")}</button>
      </Link>
      <button className="purchase" onClick={() => setIsModal(true)}>
        {t("orderNow")}
      </button>

      <div className="faq">
        {t(text1) && (
          <div className="card-faq-item">
            <CardOK className='cardOk' />
            <p className="faq-p">
              {t(text1)}
            </p>
          </div>
        )}
        {t(text2) && (
          <div className="card-faq-item">
            <CardOK className='cardOk' />
            <p className="faq-p">
              {t(text2)}
            </p>
          </div>
        )}
        {t(text3) && (
          <div className="card-faq-item">
            <CardOK className='cardOk' />
            <p className="faq-p">
              {t(text3)}
            </p>
          </div>
        )}
        {t(text4) && (
          <div className="card-faq-item">
            <CardOK className='cardOk' />
            <p className="faq-p">
              {t(text4)}
            </p>
          </div>
        )}
        {t(text5) && (
          <div className="card-faq-item">
            <CardOK className='cardOk' />
            <p className="faq-p">
              {t(text5)}
            </p>
          </div>
        )}
        {t(text6) && (
          <div className="card-faq-item">
            <CardOK className='cardOk' />
            <p className="faq-p">
              {t(text6)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
