import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import WOW from "wow.js";
import "./App.css";
import Preloader from "./components/Preloader";
import { IS_MOBILE } from "./constants/device";
import MainPage from "./pages/MainPage";
import "./styles/global.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new WOW().init();
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="app">
      <ToastContainer
        position={IS_MOBILE ? "top-center" : "top-right"}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ fontSize: IS_MOBILE ? 24 : 16, width: "auto" }}
      />
      {loading && <Preloader />}
      <MainPage />
    </div>
  );
};

export default App;
