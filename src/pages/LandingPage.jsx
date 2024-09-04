import React from "react";
import NavBar from "../common/NavBar";
import WhyChooseMamaPesa from "../WhyChooseMamaPesa/WhyChooseMamaPesa";
import Footer from "../common/Footer";
import DownLoadApp from "../DownLoadApp/DownLoadApp";
import FAQS from "../FAQS/FAQS";
import Features from "../Features/Features";
import ContactUs from "../ContactUs/ContactUs";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import UnlockYourPotential from "../UnlockYourPotential/UnlockYourPotential";
import woman from "../assets/EmpowerWomen.png";
import independence from "../assets/FinancialIndependence.png";

const LandingPage = () => {
  return (
    <div className="">
      <Hero />
      <WhyChooseMamaPesa />
      <Banner
        image={woman}
        title="Empowering Women's Financial Independence"
        desc="MamaPesa offers microloans to women, helping them finance
            income-generating assets and achieve economic independence."
      />
      <p id="getapp" className="mt-2"></p>
      <DownLoadApp />
      <Features />
      <UnlockYourPotential />
      <Banner
        image={independence}
        title="Unlock financial independence"
        desc="Transform your future with MamaPesa - the app that helps you secure funding for income-generating ventures."
      />
      <p id="getapp" className="mt-2"></p>
      <FAQS />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
