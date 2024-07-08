import React from "react";
import GarantiHero from "../components/Warranty/GarantiHero";
import Uslug from "../components/Warranty/Uslug";
import Vnimanie from "../components/Warranty/Vnimanie";
import Location from "../components/HomeComp/Location";
import Konsultatsiya_loc from "../components/DostavkaComp/Konsultatsiya_loc";

const Garantii = () => {
  return (
    <>
      <div className="w-[1440px] m-auto">
        <div className="w-[1310px] m-auto">
          <GarantiHero />
          <Uslug />
          <Vnimanie />
          <div className="mb-[150px]">
            <Konsultatsiya_loc />
            <Location/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Garantii;
