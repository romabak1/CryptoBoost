import React from "react";

import About from "../components/About";
import CardsSection from "../components/CardsSection";
import ClientLogos from "../components/ClientsLogos";
import ContactModal from "../components/ContactModal";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Revievs from "../components/Revievs";
import Subscription from "../components/Subscription";

function MainPage() {
  return (
    <>
      <div className="in-gradient">
        <div className="gradient"></div>
        <Navbar />
        <HeroSection />
        <ClientLogos />
      </div>
      <About />
      <CardsSection />
      <Revievs />
      <FAQ />
      <Subscription />
      <Footer />
      <ContactModal />
    </>
  );
}

export default MainPage;
