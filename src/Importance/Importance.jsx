import React from "react";
import Card from "./components/Card";
import rail from "../assets/img_logos_black_900.svg";
import building from "../assets/img_map.svg";
import lock from "../assets/lock.svg";

const Importance = () => {
  return (
    <div className="w-full h-full py-[5rem] px-[0.7rem] md:px-[2rem] gap-10 grid md:grid-cols-3">
      <Card
        svg={lock}
        title="Unlock Your Potential"
        desc="MamaPesa is your go-to platform for securing funding and unlocking your
        potential. Whether you're an entrepreneur with a business idea or a
        career-driven individual, we provide the financial support you need to
        achieve your goals."
      />
      <Card
        svg={building}
        title="Empower Your Future"
        desc="At MamaPesa, we believe in the power of financial empowerment to shape a
         brighter future. With our app, you can access funding for income-generating ventures
          and take control of your financial independence."
      />
      <Card
        svg={rail}
        title="Break Financial Barriers"
        desc="Join the MamaPesa community and break through financial barriers. Our app
         offers a dedicated platform for women to secure funding and pave their own path
          to success. Say goodbye to limitations and hello to a world of opportunities."
      />
    </div>
  );
};

export default Importance;
