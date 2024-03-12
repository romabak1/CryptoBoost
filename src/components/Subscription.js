import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/Subscription.css";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORRAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MSENDER,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};



// Ініціалізація Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

const Subscription = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);

  const handleSubmit = async () => {
    if (email.length > 10) {
      setShowCaptcha(true);
    } else {
      toast.error(t("errorSubscribe"));
    }
  };


  const onCaptchaVerified = async (captchaValue) => {
    if (captchaValue) {
      try {
        const emailRef = doc(db, "subscriptions", email);
        await setDoc(emailRef, {
          createdAt: serverTimestamp() // Додає поточний серверний час як дату надходження
        });
        setEmail("");
        setShowCaptcha(false); // Сховати капчу після успішної підписки
        toast.success(t("successSubscribe"));
      } catch (error) {
        console.error("Error adding document: ", error);
        toast.error(t("errorSubscribe"));
      }
    }
  };


  return (
    <div className="subscription-container">
      <h2>{t("newsletterSubscription")}</h2>
      <p>{t("newsletterInfo")}</p>
      <form onSubmit={(e) => e.preventDefault()} className="emailform">
        <input
          type="email"
          placeholder={t("enterYourEmail")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={() => setShowCaptcha(true)}>{t("subscribe")}</button>
      </form>
      {showCaptcha && (
        <div className="captcha-modal">
          <div className="captcha-content">
            <ReCAPTCHA
              sitekey = {process.env.REACT_APP_RECAPTCHA1}
              onChange={onCaptchaVerified}
            />
            <button onClick={() => setShowCaptcha(false)}>{t('close')}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
