import React, { useEffect } from "react";
import Katalogdiv from "../components/CatalogComp/Katalogdiv";
import Kabinet from "../components/HomeComp/Kabinet";
import Pochemu from "../components/HomeComp/Pochemu";
import Brend from "../components/HomeComp/Brend";
import Novosti from "../components/HomeComp/Novosti";
import Vopros from "../components/DostavkaComp/Vopros";
import Location from "../components/HomeComp/Location";
import Mail from "../components/HomeComp/Mail";
import Products from "../components/HomeComp/Products";

const Katalog = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-[1440px] m-auto">
        <Katalogdiv />
        <Kabinet />
        <Pochemu />
        <Products />
        <Brend />
        <Novosti />
        <Vopros />
        <Location />
        <Mail />
      </div>
    </>
  );
};

export default Katalog;
