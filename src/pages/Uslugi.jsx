import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Uslugi_cards from "../components/Uslugi/Uslugi_cards";
import Fakt from "../components/Uslugi/Fakt";
import Download from "../components/Download";
import Sertifikat from "../components/CompanyAbout/Sertifikat";
import Konsultatsiya_loc from "../components/DostavkaComp/Konsultatsiya_loc";

const Uslugi = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="max-w-full mx-auto">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex my-5 items-center gap-2">
            <NavLink to="/">
              <p className="text-[#7A7687] text-sm md:text-base font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-sm md:text-base" />
            <p className="text-sm md:text-base font-normal text-[#202020]">Услуги</p>
          </div>
          <Uslugi_cards />
          <Fakt />
          <Download />
        </div>
        <Sertifikat />
        <div className="mb-36">
          <Konsultatsiya_loc />
        </div>
      </div>
    </>
  );
};

export default Uslugi;
