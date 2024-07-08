import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Brend = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const maxSlideCount = 6;
  const itemWidth = "23%"; // Responsive width

  const handleNext = () => {
    if (slideCount < maxSlideCount) {
      setTranslateX((prev) => prev - parseInt(itemWidth) / 100 * window.innerWidth);
      setSlideCount((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideCount > 0) {
      setTranslateX((prev) => prev + parseInt(itemWidth) / 100 * window.innerWidth);
      setSlideCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="w-full m-auto pl-4 md:pl-16 ">
        <div className="flex my-12 items-start justify-between">
          <div>
            <h4 className="text-gray-800 text-2xl mb-6 font-medium">
              Бренды
            </h4>
            <p className="text-gray-800 text-base opacity-50 mb-6 font-medium">
              Эксклюзивные поставщики
            </p>
          </div>
          <div>
            <div className="flex items-center w-full overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-500"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {/* Your item cards here */}
              </div>
            </div>
            <div className="w-full mt-10 flex items-center justify-between pr-4 md:pr-16">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  disabled={slideCount === 0}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
                    slideCount > 0
                      ? "hover:bg-gray-300"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  <GoArrowLeft className="text-gray-800 text-2xl" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={slideCount === maxSlideCount}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
                    slideCount < maxSlideCount
                      ? "hover:bg-gray-300"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  <GoArrowRight className="text-gray-800 text-2xl" />
                </button>
              </div>
              <button className="w-40 h-10 rounded-full bg-green-600 text-white text-base font-semibold hover:scale-105 duration-200 hover:bg-green-700">
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
