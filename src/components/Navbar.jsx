import React, { useState, useContext } from "react";
import Logo from "/assets/Logo.svg";
import SelectLabel from "./SelectLabel";
import { IoSearchOutline } from "react-icons/io5";
import user from "/assets/login.svg";
import diagram from "/assets/comparison.svg";
import basket from "/assets/basket.svg";
import { GoHeart } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { ProductContext } from "../App";

const Navbar = () => {
  const { product } = useContext(ProductContext);

  return (
    <>
      <div className="fixed bg-[#F8F7F3] z-50 top-0 w-[1440px] m-auto border ">
        <div className="w-[1310px] m-auto flex items-center justify-between ">
          <ul className="flex items-center my-[10px] gap-[20px]">
            <NavLink
              to="okompanii"
              className="text-[#7A7687] text-[12px] font-medium hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#424F65]"
            >
              О компании
            </NavLink>
            <NavLink
              to="/dostavka"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Доставка
            </NavLink>
            <NavLink
              to="/oplata"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Оплата
            </NavLink>
            <NavLink
              to="/garantii"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Гарантии
            </NavLink>
            <NavLink
              to="/blog"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Блог
            </NavLink>
          </ul>
          <ul className="flex items-center my-[10px] gap-[45px]">
            <li className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]">
              info@mail.ru
            </li>
            <li className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]">
              г. Москва, ул. Московская, д. 35
            </li>
          </ul>
        </div>
        <hr className="text-[#E5E2EE] w-full h-[1px] mb-[26px]" />
        <div className="w-[1310px] m-auto flex items-center justify-between ">
          <div className="flex items-center justify-center">
            <NavLink to="/">
              <img src={Logo} alt="logo" className="w-[96px] h-[41px]" />
            </NavLink>
            <div className="ml-[50px] flex items-center h-[39px] bg-[linear-gradient(to_right,_#F8F7F3_50%,_#D5D1E1_50%)] border border-[#D5D1E1] rounded-[50px]">
              <SelectLabel className="relative z-50 " />
              <input
                type="text"
                placeholder="Поиск"
                className="h-full outline-none text-[#7A7687] w-[420px] rounded-[50px] pl-[15px] bg-[#F8F7F3]"
              />
              <button className="group w-[43px] h-full flex items-center justify-center bg-[#D5D1E1]  rounded-tr-[50px] rounded-br-[50px]">
                <IoSearchOutline className="text-[#7A7687] text-[22px] group-hover:scale-110  hover:rotate-90 duration-300" />
              </button>
            </div>
            <p className="ml-[35px] text-[#7A7687] text-[12px] font-medium">
              Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
            </p>
          </div>
          {/* ----------------- */}
          <ul className="flex items-center gap-[25px] justify-center">
            <li className="group flex flex-col hover:cursor-pointer items-center justify-center">
              <img src={user} alt="img" className="w-[19px] h-[20px]" />
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Войти
              </p>
            </li>
            <NavLink
              to="/like"
              className="group flex flex-col hover:cursor-pointer items-center gap-[2px] justify-center"
            >
              <GoHeart className="text-[18px]" />
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Избранное
              </p>
            </NavLink>
            <li className="group flex flex-col hover:cursor-pointer items-center gap-[2px] justify-center">
              <img src={diagram} alt="img" className="w-[19px] h-[20px]" />
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Сравнить
              </p>
            </li>
            <NavLink
              to="/basket"
              className="aaa group  relative flex flex-col hover:cursor-pointer items-center gap-[2px] justify-center"
            >
              <img src={basket} alt="img" className="w-[21px] h-[20px]" />
              <div className="absolute top-[-4px] right-[5px] bg-[#088269] flex items-center justify-center  border h-[15px] rounded-[50%] w-[15px]">
                <p className="text-[10px] text-white">{product.length}</p>
              </div>
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Корзина
              </p>
            </NavLink>
          </ul>
        </div>
        <hr className="text-[#E5E2EE] w-full h-[1px] mt-[26px]" />
        <div className="w-[1310px] m-auto flex items-center justify-between">
          <ul className="flex items-center gap-[25px]">
            <NavLink
              to="/katalog"
              className="group flex items-center hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] gap-[5px]"
            >
              <HiOutlineMenuAlt1 />
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-semibold">
                Каталог
              </p>
            </NavLink>
            <li className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold">
              Производители
            </li>
            <NavLink
              to="/podklyuch"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Кабинеты под ключ
            </NavLink>
            <NavLink
              to="/uslugi"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Услуги
            </NavLink>
            <NavLink
              to="/aksii"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Акции
            </NavLink>
            <NavLink
              to=""
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Покупателям
            </NavLink>
            <NavLink
              to="/kontakti"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Контакты
            </NavLink>
          </ul>
          <div className="flex items-center gap-[17px]">
            <div className="flex items-center gap-[3px]">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-semibold">
                Москва
              </p>
              <GrLocation className="text-[13px]" />
            </div>
            <div className="flex my-[10px] items-center gap-[10px]">
              <div className="w-[168px] h-[41px] rounded-[50px] border border-[#D5D1E1] flex items-center justify-center">
                <p className="text-[#202020] text-[14px] font-semibold">
                  +7(495)000-00-00
                </p>
              </div>
              <button className="w-[168px] h-[41px] bg-[#088269] hover:bg-[#07745E] rounded-[50px] border border-[#D5D1E1] flex items-center justify-center">
                <p className="text-[#F8F7F3] text-[14px] font-semibold">
                  Заказать звонок
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
