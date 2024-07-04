import React from "react";

const Statya = () => {
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
            <NavLink to="/katalog">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Каталог
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
              Лабораторное оборудование
            </p>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">
              Анализатор мочи MINDRAY UA-66
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statya;
