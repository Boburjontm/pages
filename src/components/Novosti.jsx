import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Brend = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0); // slideCount holati
  const maxSlideCount = 9; // Maksimal oldinga surishlar soni
  const itemWidth = 330;

  const handleNext = () => {
    if (slideCount < maxSlideCount) {
      setTranslateX((prev) => prev - itemWidth);
      setSlideCount((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideCount > 0) {
      setTranslateX((prev) => prev + itemWidth);
      setSlideCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="w-[1440px] m-auto pl-[65px]">
        <div className="flex my-[150px] items-start justify-between">
          <div>
            <h4 className="text-[#202020] leading-[36px] text-[30px] mb-[25px] font-medium">
              Новости <br /> компании
            </h4>
          </div>
          {/* --------------- */}
          <div>
            <div className="flex items-center w-[1050px] overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-500"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/1c6d/378f/39f9376dda513323d7daee846be582b1?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hxv4KnAV349Tn2nW3482WhHZQY-NlKKbwLkVO0bcvVmEnBFI4sA932JlDUFIjjJwjPaFaG6CnMkiKpjy7To2CqCOxuF1CWJ~KwsDlj7ikZYWayezVGkN3t95XJ~57prdAA6AFUGzbddZdBNo171MSKBxESnI5pZVQ~C8yZKABhdZotoMoVqfd~JOsHLPGEi9P1FLC4sSN0~FmUz9rqJ5xTjNJ7FpeOfUJpWZzENd0pQWE3Y7EEnlZUZ2F6JAk1ietVJ0hGPCFiA04OvADELdAVcvLwhjgLOLM0Kt2tR1BuQB9Eh7Tsi9CVXHcRYMrQD8NVggS7w-nZEhcQfsaqQdxg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/f1e7/cad9/878405bf2b9bbcc283b9411831ed6c67?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5Er32mgCCEt-Y8bntcA5iCk6ORnaeeRHx5QrMHzknMNn5Y0UKegLrAGHyUvUbYVCx5y7-4hMq~eHVyoUA~~Ov2Woo1z6oMyiVC6WInMNJ1QCT19oQZvsSlJa4MhORAc4qMPyLwglhAm5SPNjj3PIa1aK~NtfLBdCQuOPuWfIwTeoIf7Xy04yfuwI2QLsEhL9sXCu5LHWHpf-93KvhVBPvSbQMy3X0H8pHVfvCK5~vmnwYBfDT9SAmUvo5x~Ecukb2AY5vRnkLv4ABuTSTx6RE6aNpD7yBTrUSAfX2vKEIE3vtHJrHD5p67hEK9VnYtCe8q62RMqK36pjDcx5T~Xig__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/2290/3fc0/850a0506ebee40fc32b9aa4c17fc06df?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CAn6ZTP4MERQCT2Zn76p1G72~6ingCCLe9kVN6fJU4M1-xY0RuxYlLn7TDTJOOqOQUp6P3VTdukQ6AcNZj~w4qdVNGBKZNUv~N9wROEL3Q3~xBdee~~nB9MHd5T4K7PpjMleidXDCSuKjQxcVPFwaOkuGC7fsWu1NZz89810ynaSm5tBoSZornMl2ZWjZ-x9HX6HZjAog-NnQ-7oTb6NUmzMvROtbQf3e6itB2OuNmowQ3GypHTzuLV3IVE734rPBH9-ipiPdozfijnC4NsVJ8KcDvie~rhiAkDR9fgZ0jXtvcVUY6r8uzq1rJyztZFQzsv8Y9KVnoEmXJfn6eCJ2Q__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/104b/442a/48b2eec91524857712b5efd185d80cf5?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Flwug1Sci3YxBOtJNsmzm1CZiZM~6kp3MxB-qxDDG64pxHHFj9qNl9VAS2fvmXNYcTtikZ9xT~nqS1iI5GidkJgSKwXz7657wGkemooRDLYakWbUG6nW2dACUuk25l4KDBxwabyZGewJBJ1sVAqW72WmTj~kBT0KrZnLOLNIjRTGjxSEx4uOyLONb1qjaVETxMzYdn7CVCDbvEj5usbThFlj5Jj-jV2EpZXr14RsAGlGfVta4P--ZlkQuPhj0iUhrW07sFC7oNzCufHl~INsPjP-xgnrZHZ2yvFKXeLwMHBHoDys5HqVFzp6oiMjR1TKmULXPkbR5YQLh~bdGTUjkw__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/1c6d/378f/39f9376dda513323d7daee846be582b1?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hxv4KnAV349Tn2nW3482WhHZQY-NlKKbwLkVO0bcvVmEnBFI4sA932JlDUFIjjJwjPaFaG6CnMkiKpjy7To2CqCOxuF1CWJ~KwsDlj7ikZYWayezVGkN3t95XJ~57prdAA6AFUGzbddZdBNo171MSKBxESnI5pZVQ~C8yZKABhdZotoMoVqfd~JOsHLPGEi9P1FLC4sSN0~FmUz9rqJ5xTjNJ7FpeOfUJpWZzENd0pQWE3Y7EEnlZUZ2F6JAk1ietVJ0hGPCFiA04OvADELdAVcvLwhjgLOLM0Kt2tR1BuQB9Eh7Tsi9CVXHcRYMrQD8NVggS7w-nZEhcQfsaqQdxg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/f1e7/cad9/878405bf2b9bbcc283b9411831ed6c67?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5Er32mgCCEt-Y8bntcA5iCk6ORnaeeRHx5QrMHzknMNn5Y0UKegLrAGHyUvUbYVCx5y7-4hMq~eHVyoUA~~Ov2Woo1z6oMyiVC6WInMNJ1QCT19oQZvsSlJa4MhORAc4qMPyLwglhAm5SPNjj3PIa1aK~NtfLBdCQuOPuWfIwTeoIf7Xy04yfuwI2QLsEhL9sXCu5LHWHpf-93KvhVBPvSbQMy3X0H8pHVfvCK5~vmnwYBfDT9SAmUvo5x~Ecukb2AY5vRnkLv4ABuTSTx6RE6aNpD7yBTrUSAfX2vKEIE3vtHJrHD5p67hEK9VnYtCe8q62RMqK36pjDcx5T~Xig__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/2290/3fc0/850a0506ebee40fc32b9aa4c17fc06df?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CAn6ZTP4MERQCT2Zn76p1G72~6ingCCLe9kVN6fJU4M1-xY0RuxYlLn7TDTJOOqOQUp6P3VTdukQ6AcNZj~w4qdVNGBKZNUv~N9wROEL3Q3~xBdee~~nB9MHd5T4K7PpjMleidXDCSuKjQxcVPFwaOkuGC7fsWu1NZz89810ynaSm5tBoSZornMl2ZWjZ-x9HX6HZjAog-NnQ-7oTb6NUmzMvROtbQf3e6itB2OuNmowQ3GypHTzuLV3IVE734rPBH9-ipiPdozfijnC4NsVJ8KcDvie~rhiAkDR9fgZ0jXtvcVUY6r8uzq1rJyztZFQzsv8Y9KVnoEmXJfn6eCJ2Q__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/104b/442a/48b2eec91524857712b5efd185d80cf5?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Flwug1Sci3YxBOtJNsmzm1CZiZM~6kp3MxB-qxDDG64pxHHFj9qNl9VAS2fvmXNYcTtikZ9xT~nqS1iI5GidkJgSKwXz7657wGkemooRDLYakWbUG6nW2dACUuk25l4KDBxwabyZGewJBJ1sVAqW72WmTj~kBT0KrZnLOLNIjRTGjxSEx4uOyLONb1qjaVETxMzYdn7CVCDbvEj5usbThFlj5Jj-jV2EpZXr14RsAGlGfVta4P--ZlkQuPhj0iUhrW07sFC7oNzCufHl~INsPjP-xgnrZHZ2yvFKXeLwMHBHoDys5HqVFzp6oiMjR1TKmULXPkbR5YQLh~bdGTUjkw__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/1c6d/378f/39f9376dda513323d7daee846be582b1?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hxv4KnAV349Tn2nW3482WhHZQY-NlKKbwLkVO0bcvVmEnBFI4sA932JlDUFIjjJwjPaFaG6CnMkiKpjy7To2CqCOxuF1CWJ~KwsDlj7ikZYWayezVGkN3t95XJ~57prdAA6AFUGzbddZdBNo171MSKBxESnI5pZVQ~C8yZKABhdZotoMoVqfd~JOsHLPGEi9P1FLC4sSN0~FmUz9rqJ5xTjNJ7FpeOfUJpWZzENd0pQWE3Y7EEnlZUZ2F6JAk1ietVJ0hGPCFiA04OvADELdAVcvLwhjgLOLM0Kt2tR1BuQB9Eh7Tsi9CVXHcRYMrQD8NVggS7w-nZEhcQfsaqQdxg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/f1e7/cad9/878405bf2b9bbcc283b9411831ed6c67?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5Er32mgCCEt-Y8bntcA5iCk6ORnaeeRHx5QrMHzknMNn5Y0UKegLrAGHyUvUbYVCx5y7-4hMq~eHVyoUA~~Ov2Woo1z6oMyiVC6WInMNJ1QCT19oQZvsSlJa4MhORAc4qMPyLwglhAm5SPNjj3PIa1aK~NtfLBdCQuOPuWfIwTeoIf7Xy04yfuwI2QLsEhL9sXCu5LHWHpf-93KvhVBPvSbQMy3X0H8pHVfvCK5~vmnwYBfDT9SAmUvo5x~Ecukb2AY5vRnkLv4ABuTSTx6RE6aNpD7yBTrUSAfX2vKEIE3vtHJrHD5p67hEK9VnYtCe8q62RMqK36pjDcx5T~Xig__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/2290/3fc0/850a0506ebee40fc32b9aa4c17fc06df?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CAn6ZTP4MERQCT2Zn76p1G72~6ingCCLe9kVN6fJU4M1-xY0RuxYlLn7TDTJOOqOQUp6P3VTdukQ6AcNZj~w4qdVNGBKZNUv~N9wROEL3Q3~xBdee~~nB9MHd5T4K7PpjMleidXDCSuKjQxcVPFwaOkuGC7fsWu1NZz89810ynaSm5tBoSZornMl2ZWjZ-x9HX6HZjAog-NnQ-7oTb6NUmzMvROtbQf3e6itB2OuNmowQ3GypHTzuLV3IVE734rPBH9-ipiPdozfijnC4NsVJ8KcDvie~rhiAkDR9fgZ0jXtvcVUY6r8uzq1rJyztZFQzsv8Y9KVnoEmXJfn6eCJ2Q__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/104b/442a/48b2eec91524857712b5efd185d80cf5?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Flwug1Sci3YxBOtJNsmzm1CZiZM~6kp3MxB-qxDDG64pxHHFj9qNl9VAS2fvmXNYcTtikZ9xT~nqS1iI5GidkJgSKwXz7657wGkemooRDLYakWbUG6nW2dACUuk25l4KDBxwabyZGewJBJ1sVAqW72WmTj~kBT0KrZnLOLNIjRTGjxSEx4uOyLONb1qjaVETxMzYdn7CVCDbvEj5usbThFlj5Jj-jV2EpZXr14RsAGlGfVta4P--ZlkQuPhj0iUhrW07sFC7oNzCufHl~INsPjP-xgnrZHZ2yvFKXeLwMHBHoDys5HqVFzp6oiMjR1TKmULXPkbR5YQLh~bdGTUjkw__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[1050px] mt-[40px] flex items-center justify-between pr-[65px]">
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={handlePrev}
                  disabled={slideCount === 0} // Boshlang'ich holatda back button ishlamaydi
                  className={`w-[41px] h-[41px] flex items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount > 0 ? "hover:bg-slate-300" : "bg-gray-200"
                  }`}
                >
                  <GoArrowLeft className="text-[#202020] text-[22px] " />
                </button>
                <button
                  onClick={handleNext}
                  disabled={slideCount === maxSlideCount} // 3 marta bosilgandan keyin next button ishlamaydi
                  className={`w-[41px] h-[41px] flex hover:cursor-pointer items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount < maxSlideCount
                      ? "hover:bg-slate-300"
                      : "bg-gray-200"
                  }`}
                >
                  <GoArrowRight className="text-[#202020] text-[22px] " />
                </button>
              </div>
              <button className="w-[145px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
                Все новости
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brend;
