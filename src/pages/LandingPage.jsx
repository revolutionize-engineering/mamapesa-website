import React from "react";
import NavBar from "../common/NavBar";
import WhyChooseMamaPesa from "../WhyChooseMamaPesa/WhyChooseMamaPesa";
import Footer from "../common/Footer";
import DownLoadApp from "../DownLoadApp/DownLoadApp";
import FAQS from "../FAQS/FAQS";
import Features from "../Features/Features";
import ContactUs from "../ContactUs/ContactUs";
import Hero from "../Hero/Hero";

const LandingPage = () => {
  return (
    <div className="pt-[5rem]">
      <Hero/>
      <WhyChooseMamaPesa />
      <DownLoadApp />
      <FAQS />
      <Features />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
