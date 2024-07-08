import React, { useEffect } from "react";
import Pochemu from "../components/HomeComp/Pochemu";
import Mail from "../components/HomeComp/Mail";
import Location from "../components/HomeComp/Location";
import Marquee from "../components/HomeComp/Marquee";
import Brend from "../components/HomeComp/Brend";
import Novosti from "../components/HomeComp/Novosti";
import Kabinet from "../components/HomeComp/Kabinet";
import Informatsiya from "../components/HomeComp/Informatsiya";
import Carousel from "../components/HomeComp/Carousel";
import Kategorii from "../components/HomeComp/Kategorii";
import Products from "../components/HomeComp/Products";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="">
        <Carousel />
        <Kategorii />
        <Kabinet />
        <Pochemu />
        <Products />
        <Marquee />
        <Brend />
        <Informatsiya />
        <Novosti />
        <Location />
        <Mail />
      </div>
    </>
  );
};

export default Home;
