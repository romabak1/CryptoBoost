import React, { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div class="cookie-banner">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col" >
            <h3>This site uses cookies</h3>
            <p>
              We use cookies on the website to make your browser experience more
              personal, convenient and secure. You may block or manage the use
              of cookies, however, in some cases they’re essential to make this
              site work properly.
            </p>
          </div>
          <div class="col-auto">
            <button type="button" class="info-btn btn btn-outline-primary me-2">
              Find out more
            </button>
            <button type="button" class="btn btn-primary">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
