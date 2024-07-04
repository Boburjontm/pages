import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Brend = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0); // slideCount holati
  const maxSlideCount = 6; // Maksimal oldinga surishlar soni
  const itemWidth = 440;

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
            <h3 className="mb-[43px] text-[30px] font-medium leading-[36px]">
              Комплексное оснащение кабинетов
            </h3>
            <div className="flex items-center w-[1310px] overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-500"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full filter grayscale h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/5789/149f/01da049906d97a38f5db1088af13d069?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mE~A354gcerFYIhDNjzrr6R2KWy38ku~8GMeqvnqtcRb1sg1RALxu2OSkoqSGOXc8wgbCQYv2rKUkjLAPJxfWC2dwQSuYHB23v1iSq55Ya-GOJvv62lOL9RLWWHg~B8vX~htyZJY8VDo-7bLXqVi5Rp2JmetES9qJ9P23hlf9S9ZT4zYE3UNgCwl4K5X2DRmsb-7AqotyqXRqZRFEwsl-PgewKpn~Y0z09HDwHFdXuXnStNWwlC8NI5UpvD8psYiqFd6nmKj-cXymGY5Lk31zqZ6q5rG-bg8tyvxkJKp1q47JOTUdGAOcIXTTwWpC1ADNmXjVBatIbRMLNA4gdvQXg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Экспресс лаборатория
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/0bc3/216f/31a9b4e2572cf2136dbdf846fa4d7472?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ApL5AQZZrITapVLVTBSZ7O-Gj699q1nGY4J7yzq0LHJ~YOsdsUSc~xHtE73OuOsWo~SbJKfAF1s9xUIlPlH6IxxcNCsDT-J6W7ckfJBo9bGErkB4a8bxTNfZ1-bROOo2yddTOHsgk1ncNLQM5-5erLI0DWvTnkhYbg9NIpD6eUvmO0psJXiaNhr-kpHv0e8wRotaSP0FhtbqSpK7xNzcPnUHOWT3yTnDs13FTLO-YBvAKNWHcqBxPIYufe31vOiXeZWv4IIUlTIysUwR-8bcZXK37w-jbv2ZxkY~dt5GiLoJb3ZeFWRIbdyzMq~zMOOveYw1O8-TEOv1xJXNjtZsyg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Лазерная терапия
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/14ee/ef02/ec050bf0229fbf8d0ea7dd44f4aa91da?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=euQZG8FkQyV6KpLRHMoiD3wdRGr~TuHw3zJNVO1KM-cjaD0Uvqb0Nw5wMKW6tiw27kFCxKai7kwWTMxK6ssqWAMraYJeDZhzEMCRhNNsYlqyKSaxPW0LrndklK1nkAX0Vxg4xlyQSDJ0C4SGBoXnfIZpjbJV8mEamftXEt-jZxvPiPVSsNkV-9rBaxgxDr1qyASx3uhxig3VDE3lpeG9eediN0CWDAmyLX~SPpyaLGv~ex-HlWUVR6UIGtRIyg5OSa~AxpjHjz2-GWawcm0tuMFa~RwfneAllT7N~RE3Oh5ZUgU2tJtmo~sf7UwYjcyX77vTqbqnRm79xZcKMhOh5w__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Операционный блок
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full filter grayscale rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/5789/149f/01da049906d97a38f5db1088af13d069?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mE~A354gcerFYIhDNjzrr6R2KWy38ku~8GMeqvnqtcRb1sg1RALxu2OSkoqSGOXc8wgbCQYv2rKUkjLAPJxfWC2dwQSuYHB23v1iSq55Ya-GOJvv62lOL9RLWWHg~B8vX~htyZJY8VDo-7bLXqVi5Rp2JmetES9qJ9P23hlf9S9ZT4zYE3UNgCwl4K5X2DRmsb-7AqotyqXRqZRFEwsl-PgewKpn~Y0z09HDwHFdXuXnStNWwlC8NI5UpvD8psYiqFd6nmKj-cXymGY5Lk31zqZ6q5rG-bg8tyvxkJKp1q47JOTUdGAOcIXTTwWpC1ADNmXjVBatIbRMLNA4gdvQXg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Экспресс лаборатория
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/0bc3/216f/31a9b4e2572cf2136dbdf846fa4d7472?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ApL5AQZZrITapVLVTBSZ7O-Gj699q1nGY4J7yzq0LHJ~YOsdsUSc~xHtE73OuOsWo~SbJKfAF1s9xUIlPlH6IxxcNCsDT-J6W7ckfJBo9bGErkB4a8bxTNfZ1-bROOo2yddTOHsgk1ncNLQM5-5erLI0DWvTnkhYbg9NIpD6eUvmO0psJXiaNhr-kpHv0e8wRotaSP0FhtbqSpK7xNzcPnUHOWT3yTnDs13FTLO-YBvAKNWHcqBxPIYufe31vOiXeZWv4IIUlTIysUwR-8bcZXK37w-jbv2ZxkY~dt5GiLoJb3ZeFWRIbdyzMq~zMOOveYw1O8-TEOv1xJXNjtZsyg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Лазерная терапия
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/14ee/ef02/ec050bf0229fbf8d0ea7dd44f4aa91da?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=euQZG8FkQyV6KpLRHMoiD3wdRGr~TuHw3zJNVO1KM-cjaD0Uvqb0Nw5wMKW6tiw27kFCxKai7kwWTMxK6ssqWAMraYJeDZhzEMCRhNNsYlqyKSaxPW0LrndklK1nkAX0Vxg4xlyQSDJ0C4SGBoXnfIZpjbJV8mEamftXEt-jZxvPiPVSsNkV-9rBaxgxDr1qyASx3uhxig3VDE3lpeG9eediN0CWDAmyLX~SPpyaLGv~ex-HlWUVR6UIGtRIyg5OSa~AxpjHjz2-GWawcm0tuMFa~RwfneAllT7N~RE3Oh5ZUgU2tJtmo~sf7UwYjcyX77vTqbqnRm79xZcKMhOh5w__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Операционный блок
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full filter grayscale rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/5789/149f/01da049906d97a38f5db1088af13d069?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mE~A354gcerFYIhDNjzrr6R2KWy38ku~8GMeqvnqtcRb1sg1RALxu2OSkoqSGOXc8wgbCQYv2rKUkjLAPJxfWC2dwQSuYHB23v1iSq55Ya-GOJvv62lOL9RLWWHg~B8vX~htyZJY8VDo-7bLXqVi5Rp2JmetES9qJ9P23hlf9S9ZT4zYE3UNgCwl4K5X2DRmsb-7AqotyqXRqZRFEwsl-PgewKpn~Y0z09HDwHFdXuXnStNWwlC8NI5UpvD8psYiqFd6nmKj-cXymGY5Lk31zqZ6q5rG-bg8tyvxkJKp1q47JOTUdGAOcIXTTwWpC1ADNmXjVBatIbRMLNA4gdvQXg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Экспресс лаборатория
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/0bc3/216f/31a9b4e2572cf2136dbdf846fa4d7472?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ApL5AQZZrITapVLVTBSZ7O-Gj699q1nGY4J7yzq0LHJ~YOsdsUSc~xHtE73OuOsWo~SbJKfAF1s9xUIlPlH6IxxcNCsDT-J6W7ckfJBo9bGErkB4a8bxTNfZ1-bROOo2yddTOHsgk1ncNLQM5-5erLI0DWvTnkhYbg9NIpD6eUvmO0psJXiaNhr-kpHv0e8wRotaSP0FhtbqSpK7xNzcPnUHOWT3yTnDs13FTLO-YBvAKNWHcqBxPIYufe31vOiXeZWv4IIUlTIysUwR-8bcZXK37w-jbv2ZxkY~dt5GiLoJb3ZeFWRIbdyzMq~zMOOveYw1O8-TEOv1xJXNjtZsyg__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Лазерная терапия
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src="https://s3-alpha-sig.figma.com/img/14ee/ef02/ec050bf0229fbf8d0ea7dd44f4aa91da?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=euQZG8FkQyV6KpLRHMoiD3wdRGr~TuHw3zJNVO1KM-cjaD0Uvqb0Nw5wMKW6tiw27kFCxKai7kwWTMxK6ssqWAMraYJeDZhzEMCRhNNsYlqyKSaxPW0LrndklK1nkAX0Vxg4xlyQSDJ0C4SGBoXnfIZpjbJV8mEamftXEt-jZxvPiPVSsNkV-9rBaxgxDr1qyASx3uhxig3VDE3lpeG9eediN0CWDAmyLX~SPpyaLGv~ex-HlWUVR6UIGtRIyg5OSa~AxpjHjz2-GWawcm0tuMFa~RwfneAllT7N~RE3Oh5ZUgU2tJtmo~sf7UwYjcyX77vTqbqnRm79xZcKMhOh5w__"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Операционный блок
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[1310px] mt-[40px]  flex items-center justify-between ">
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
              <div className="flex items-center gap-[10px]">
                <button className="w-[241px] h-[41px] rounded-[50px] text-[#088269] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
                  Бесплатная консультация
                </button>
                <button className="w-[241px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brend;
