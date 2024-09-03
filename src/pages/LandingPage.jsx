import React from "react";
import NavBar from "../common/NavBar";
import WhyChooseMamaPesa from "../WhyChooseMamaPesa/WhyChooseMamaPesa";
import Footer from "../common/Footer";
import DownLoadApp from "../DownLoadApp/DownLoadApp";
import FAQS from "../FAQS/FAQS";
import Features from "../Features/Features";
import ContactUs from "../ContactUs/ContactUs";

const LandingPage = () => {
  return (
    <div className="pt-[5rem]">
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
