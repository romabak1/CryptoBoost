import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../styles/CardsSection.css";
import "../styles/ServButton.css";

const ServButton = ({ label, onClick, isActive, discount }) => {
  const { t } = useTranslation();

  return (
    <>
      <Button
        variant="outline-light"
        className={`button ${isActive ? "active" : ""} service-button`}
        onClick={onClick}
      >
        <span className="label service-button-label">{label}</span>

        {discount && (
          <div className="button-badge">{`${t("discount")} -${discount}%`}</div>
        )}
      </Button>
      {/* {discount && window.innerWidth <= 1400 && (
        <div className="button-badge">{`${t("discount")} -${discount}%`}</div>
      )} */}
    </>
  );
};
export default ServButton;
