import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AboutHero from "../components/CompanyAbout/AboutHero";
import Fakt from "../components/Uslugi/Fakt";
import Partner from "../components/CompanyAbout/Partner";
import Doctor from "../components/CompanyAbout/Doctor";
import Marquee from "../components/HomeComp/Marquee";
import Pochemu from "../components/HomeComp/Pochemu";
import Brend from "../components/HomeComp/Brend";
import Location from "../components/HomeComp/Location";
import Sertifikat from "../components/CompanyAbout/Sertifikat";
import Konsultatsiya_loc from "../components/DostavkaComp/Konsultatsiya_loc";

const Okompanii = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-[1440px] m-auto ">
        <div className="w-[1310px] m-auto">
          <div className="flex my-[20px] items-center gap-[8px]">
            <NavLink to="/">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">О компании</p>
          </div>
          <AboutHero />
          <Fakt />
        </div>
        <Partner />
        <Doctor />
        <Marquee />
        <Pochemu />
        <Brend />
        <Sertifikat />
        <div className="mb-[150px]">
          <Konsultatsiya_loc />
        </div>
      </div>
    </>
  );
};

export default Okompanii;
