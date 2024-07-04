import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Brend = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0); // slideCount holati
  const maxSlideCount = 6; // Maksimal oldinga surishlar soni
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
            <h4 className="text-[#202020] text-[30px] mb-[25px] font-medium">
              Бренды
            </h4>
            <p className="text-[#202020] text-[16px] opacity-50 mb-[25px] font-medium">
              Эксклюзивные поставщики
            </p>
          </div>
          {/* --------------- */}
          <div>
            <div className="flex items-center w-[1050px] overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-500"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[217px] h-[102px]"
                      src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[166px] h-[111px]"
                      src="https://s3-alpha-sig.figma.com/img/7685/b204/10c5d46143d134f91c83f3dc815c432f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lV3r-6kjotct1zuZxXeBHF233ikVtwQRNW6XVo7lhNO3nT3EGmg1S-W~URzW8o7cn3tTc8tvP1MAxfmU-9nFIe4G4Jb68WAr9wgR0T8XA5AFgxYAk8LdotmkzLPpGaYMsBuVmRY8T2JQUmaDyoB~hbVd-KA6tLUKSCOc-XI318tR-GKaKtgj9ffiv9fOxtrhslCmVlCa3FmwBwLTPoDY-fry4BfVj3YVHSLkbhPX9HGj5SJK1RJUQXVXCpshWqpOtmG7W2WYsl2-oY0aiBah9LgRf3DLUby56lYYuRUsA2DGbYNDckT1OvyeuT2KPSYr87RDg-VQLkKq103cTscpiQ__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[197px] h-[60px]"
                      src="https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G2k12xDvCrow8ZIn2rFFRBgvjnf6Ta9wj1XqcTvyWcZwBh39-z3l5ke-Wyrska33tWAbr5sqvrEMVZQJzm05opMUeXaNFF5jsqbs6fHtnaL~BbA6mti84um1PUtXZxIGjVQLrDOX4zf3BrM7JXH1N81LpJcMFblIjbttYGJDefzbYLU9GSCFYsOBJflH-6I6IKn57sFUrMV8fiAPoBwCzXhtHAq-A5nQGJhd~xICS7FPbIVcuVPllMqPOmAjeG1ksFr4ikTEz-QsEpziCNjXKBE1llxFb9gP4U1MGpXV2o~cVCl94hYQi7OJ~qGksScHgG7YWQEeIkCzmlmYk4ZRwg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[217px] h-[102px]"
                      src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[166px] h-[111px]"
                      src="https://s3-alpha-sig.figma.com/img/7685/b204/10c5d46143d134f91c83f3dc815c432f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lV3r-6kjotct1zuZxXeBHF233ikVtwQRNW6XVo7lhNO3nT3EGmg1S-W~URzW8o7cn3tTc8tvP1MAxfmU-9nFIe4G4Jb68WAr9wgR0T8XA5AFgxYAk8LdotmkzLPpGaYMsBuVmRY8T2JQUmaDyoB~hbVd-KA6tLUKSCOc-XI318tR-GKaKtgj9ffiv9fOxtrhslCmVlCa3FmwBwLTPoDY-fry4BfVj3YVHSLkbhPX9HGj5SJK1RJUQXVXCpshWqpOtmG7W2WYsl2-oY0aiBah9LgRf3DLUby56lYYuRUsA2DGbYNDckT1OvyeuT2KPSYr87RDg-VQLkKq103cTscpiQ__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[197px] h-[60px]"
                      src="https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G2k12xDvCrow8ZIn2rFFRBgvjnf6Ta9wj1XqcTvyWcZwBh39-z3l5ke-Wyrska33tWAbr5sqvrEMVZQJzm05opMUeXaNFF5jsqbs6fHtnaL~BbA6mti84um1PUtXZxIGjVQLrDOX4zf3BrM7JXH1N81LpJcMFblIjbttYGJDefzbYLU9GSCFYsOBJflH-6I6IKn57sFUrMV8fiAPoBwCzXhtHAq-A5nQGJhd~xICS7FPbIVcuVPllMqPOmAjeG1ksFr4ikTEz-QsEpziCNjXKBE1llxFb9gP4U1MGpXV2o~cVCl94hYQi7OJ~qGksScHgG7YWQEeIkCzmlmYk4ZRwg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[217px] h-[102px]"
                      src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[166px] h-[111px]"
                      src="https://s3-alpha-sig.figma.com/img/7685/b204/10c5d46143d134f91c83f3dc815c432f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lV3r-6kjotct1zuZxXeBHF233ikVtwQRNW6XVo7lhNO3nT3EGmg1S-W~URzW8o7cn3tTc8tvP1MAxfmU-9nFIe4G4Jb68WAr9wgR0T8XA5AFgxYAk8LdotmkzLPpGaYMsBuVmRY8T2JQUmaDyoB~hbVd-KA6tLUKSCOc-XI318tR-GKaKtgj9ffiv9fOxtrhslCmVlCa3FmwBwLTPoDY-fry4BfVj3YVHSLkbhPX9HGj5SJK1RJUQXVXCpshWqpOtmG7W2WYsl2-oY0aiBah9LgRf3DLUby56lYYuRUsA2DGbYNDckT1OvyeuT2KPSYr87RDg-VQLkKq103cTscpiQ__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[197px] h-[60px]"
                      src="https://s3-alpha-sig.figma.com/img/c24e/9fda/01d837f488eff4200f9cf2a59420b504?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G2k12xDvCrow8ZIn2rFFRBgvjnf6Ta9wj1XqcTvyWcZwBh39-z3l5ke-Wyrska33tWAbr5sqvrEMVZQJzm05opMUeXaNFF5jsqbs6fHtnaL~BbA6mti84um1PUtXZxIGjVQLrDOX4zf3BrM7JXH1N81LpJcMFblIjbttYGJDefzbYLU9GSCFYsOBJflH-6I6IKn57sFUrMV8fiAPoBwCzXhtHAq-A5nQGJhd~xICS7FPbIVcuVPllMqPOmAjeG1ksFr4ikTEz-QsEpziCNjXKBE1llxFb9gP4U1MGpXV2o~cVCl94hYQi7OJ~qGksScHgG7YWQEeIkCzmlmYk4ZRwg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
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
                    slideCount > 0
                      ? "hover:bg-slate-300"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  <GoArrowLeft className="text-[#202020] text-[22px] " />
                </button>
                <button
                  onClick={handleNext}
                  disabled={slideCount === maxSlideCount} // 3 marta bosilgandan keyin next button ishlamaydi
                  className={`w-[41px] h-[41px] flex  items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount < maxSlideCount
                      ? "hover:bg-slate-300"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  <GoArrowRight className="text-[#202020] text-[22px] " />
                </button>
              </div>
              <button className="w-[155px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
                Сертификаты
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brend;
