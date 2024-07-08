import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import DostavkaHero from "../components/DostavkaComp/DostavkaHero";
import Pochemu from "../components/HomeComp/Pochemu";
import Udobno from "../components/DostavkaComp/Udobno";
import Pravila from "../components/DostavkaComp/Pravila";
import Vopros from "../components/DostavkaComp/Vopros";
import Ofis from "../components/DostavkaComp/Ofis";
import Dokument from "../components/DostavkaComp/Dokument";
import Konsultatsiya from "../components/CompanyAbout/Konsultatsiya";
import Mail from "../components/HomeComp/Mail";

const Dostavka = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="w-[1440px] m-auto">
        <div className="w-[1310px] m-auto">
          <div className="flex my-[20px] items-center gap-[8px]">
            <NavLink to="/">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">Доставка</p>
          </div>
          <DostavkaHero />
          <Udobno />
          <Pravila />
        </div>
        <Vopros />
        <Ofis />
        <Dokument />
        <Konsultatsiya />
        <Mail />
      </div>
    </>
  );
};

export default Dostavka;
