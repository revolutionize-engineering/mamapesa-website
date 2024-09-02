import React from "react";
import NavBar from "../common/NavBar";
import WhyChooseMamaPesa from "../WhyChooseMamaPesa/WhyChooseMamaPesa";
import Footer from "../common/Footer";
import DownLoadApp from "../DownLoadApp/DownLoadApp";

const LandingPage = () => {
  return (
    <div className="pt-[5rem]">
      <WhyChooseMamaPesa />
      <DownLoadApp />
      <Footer />
    </div>
  );
};

export default LandingPage;
