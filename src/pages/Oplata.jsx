import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Oplatahero from "../components/Cash/Oplatahero";
import Poryadok from "../components/Cash/Poryadok";
import Usloviya from "../components/Uslugi//Usloviya";
import Konsultatsiya_loc from "../components/DostavkaComp/Konsultatsiya_loc";

const Oplata = () => {
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
            <p className="text-[14px] font-normal text-[#202020]">Оплата</p>
          </div>
          <Oplatahero />
          <Poryadok />
          <Usloviya/>
        </div>
        <div className="mb-[150px]">
          <Konsultatsiya_loc/>
        </div>
      </div>
    </>
  );
};

export default Oplata;
