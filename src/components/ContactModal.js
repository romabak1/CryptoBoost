import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Rodal from "rodal";
import ReCAPTCHA from "react-google-recaptcha";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import "rodal/lib/rodal.css";
import "../styles/ContactModal.css";
import useModalStore from "../store/modal";
import { sendTelegramMessage } from '../services/telegram';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORRAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MSENDER,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};


const telegramConfig = {
  token: process.env.REACT_APP_TGKEY,
  chatids: [607704920, 5739391138]
}

const captcha = process.env.REACT_APP_RECAPTCHA;


initializeApp(firebaseConfig);

const db = getFirestore();

export default function ContactModal() {
  const { t } = useTranslation();
  const { isModal, setIsModal } = useModalStore();
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [contact, setContact] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);

  const closeModal = () => {
    setIsModal(false);
    setShowCaptcha(false);
  };

  const onCaptchaVerified = async () => {
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        service,
        contact,
        timestamp: new Date(),
      });

      const telegramMessage = `Name: ${name}\nService: ${service}\nContact: ${contact}`;

      telegramConfig.chatids?.map(async chatid => {
        await sendTelegramMessage(
          telegramConfig.token,
          chatid,
          telegramMessage
        );
      })



      setName("");
      setService("");
      setContact("");
      setShowCaptcha(false);
      toast.success(t("contact-submit"));
      closeModal();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error(t("contact-submit-error"));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !service || !contact) {
      toast.error(t("Please fill in all fields"));
    } else {
      setShowCaptcha(true);
    }
  };
  const submitDisabled = name.length < 2 || contact.length < 5;

  return (
    <Rodal visible={isModal} onClose={closeModal} className="contact-modal" animation="slideUp">
      <div className="contact-modal-container">
        <form onSubmit={handleSubmit}>
          <div className="modal-form-item">
            <label htmlFor="name" className="modal-label">
              {t("your name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-modal-input"
              required
            />
          </div>
          <div className="modal-form-item">
            <label htmlFor="service" className="modal-label">
              {t("Service")}
            </label>
            <input
              type="text"
              id="service"
              name="service"
              placeholder={t("What is service")}
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="contact-modal-input"
              required
            />
          </div>
          <div className="modal-form-item">
            <label htmlFor="contact" className="modal-label">
              {t("telegram or email")}
            </label>
            <input
              id="email"
              name="email"
              placeholder={t("telegram or email")}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="contact-modal-input"
              required
            />
          </div>

          <button

            className={`contact-modal-submit-btn ${!submitDisabled && "contact-modal-submit-btn-hover-effect "} ${submitDisabled && "contact-modal-submit-btn-disabled"}`}

            type="button" onClick={handleSubmit}>
            {t("Submit")}
          </button>
        </form>

        {showCaptcha && (
          <div className="captcha-modal">
            <div className="captcha-content">
              <ReCAPTCHA
                sitekey={captcha}
                onChange={onCaptchaVerified}
              />
              <button onClick={() => setShowCaptcha(false)}>{t('close')}</button>
            </div>
          </div>
        )}
      </div>
    </Rodal>
  );
}
