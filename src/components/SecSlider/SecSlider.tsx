import { Marquee } from "@components/ui/marquee";
import React from "react";

const SecSlider = () => {
  const slider1 = [
    {
      img: "/images/slider/slider1.6.png",
    },
    {
      img: "/images/slider/slider1.1.png",
    },
    {
      img: "/images/slider/slider1.2.png",
    },
  ];

  const slider1Mobile = [
    {
      img: "/images/slider/slider1.3.png",
    },
    {
      img: "/images/slider/slider1.4.png",
    },
    {
      img: "/images/slider/slider1.5.png",
    },
  ];

  const slider2 = [
    {
      img: "/images/slider/slider2.6.png",
    },
    {
      img: "/images/slider/slider2.1.png",
    },
    {
      img: "/images/slider/slider2.2.png",
    },
  ];

  const slider2Mobile = [
    {
      img: "/images/slider/slider2.3.png",
    },
    {
      img: "/images/slider/slider2.4.png",
    },
    {
      img: "/images/slider/slider2.5.png",
    },
  ];

  return (
    <div
      id="life-in-hyogo"
      className="flex flex-col gap-6 md:gap-8 py-6 md:py-8 lg:py-10"
    >
      <div className="hidden md:block w-full">
        <Marquee className="w-full [--duration:80s]" pauseOnHover>
          {[...slider1, ...slider1Mobile].map((item, index) => (
            <div
              key={index}
              className={`mx-1 ${index % 2 === 1 ? "pt-12" : ""}`}
            >
              <img
                src={item.img}
                alt={`slider1-${index}`}
                className="h-[160px] md:h-[200px] w-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="md:hidden w-full">
        <Marquee className="w-full [--duration:80s]" pauseOnHover>
          {slider1.map((item, index) => (
            <div
              key={index}
              className={`mx-1 ${index % 2 === 1 ? "pt-8" : ""}`}
            >
              <img
                src={item.img}
                alt={`slider1-${index}`}
                className="h-[120px] w-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="md:hidden w-full">
        <Marquee className="w-full [--duration:80s]" pauseOnHover reverse>
          {slider1Mobile.map((item, index) => (
            <div
              key={index}
              className={`mx-1 ${index % 2 === 1 ? "pt-8" : ""}`}
            >
              <img
                src={item.img}
                alt={`slider1-mobile-${index}`}
                className="h-[120px] w-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-[8.2rem] gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <p className="text-black-text md:text-3xl lg:text-[32px] text-[28px] font-semibold text-center">
            TẠI SAO CHỌN SỰ NGHIỆP TẠI
          </p>
          <p className="text-blue-secondary md:text-6xl lg:text-[80px] text-[54px] font-normal font-just text-center">
            Hyogo Prefecture
          </p>
        </div>
        <div className="max-w-full md:max-w-[42.875rem] px-4 md:px-0">
          <p className="text-center md:text-left text-black-text text-base md:text-lg lg:text-xl font-normal">
            Tỉnh Hyogo đi đầu trong đổi mới, tích cực nuôi dưỡng các ngành công
            nghiệp công nghệ cao và các sản phẩm tiên phong. Tỉnh Hyogo là nơi
            có cơ sở bức xạ synchrotron hiệu suất cao nhất thế giới, "SPring-8",
            siêu máy tính "Fugaku" - đạt tiêu chuẩn linh hoạt cao nhất thế giới.
          </p>
          <br />
          <p className="text-center md:text-left text-black-text text-base md:text-lg lg:text-xl font-normal">
            Hyogo nổi tiếng với phong cảnh thiên nhiên tuyệt đẹp, văn hóa ẩm
            thực đa dạng và môi trường sống thoải mái, chất lượng cao. Cộng đồng
            người Việt tại Hyogo năng động, giúp bạn dễ dàng ổn định cuộc sống
            mới.
          </p>
        </div>
        <img
          src="/images/icons/Haba-tan6.png"
          alt="icon"
          className="w-24 md:w-32 lg:w-auto hidden md:block"
        />
      </div>

      <div className="hidden md:block w-full">
        <Marquee className="w-full [--duration:80s]" reverse pauseOnHover>
          {[...slider2, ...slider2Mobile].map((item, index) => (
            <div
              key={index}
              className={`mx-1 ${index % 2 === 1 ? "pt-12" : ""}`}
            >
              <img
                src={item.img}
                alt={`slider2-${index}`}
                className="h-[160px] md:h-[200px] w-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="md:hidden w-full">
        <Marquee className="w-full [--duration:80s]" pauseOnHover>
          {slider2.map((item, index) => (
            <div
              key={index}
              className={`mx-1 ${index % 2 === 1 ? "pt-8" : ""}`}
            >
              <img
                src={item.img}
                alt={`slider2-${index}`}
                className="h-[120px] w-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="md:hidden w-full">
        <Marquee className="w-full [--duration:80s]" reverse pauseOnHover>
          {slider2Mobile.map((item, index) => (
            <div
              key={index}
              className={`mx-1 ${index % 2 === 1 ? "pt-8" : ""}`}
            >
              <img
                src={item.img}
                alt={`slider2-mobile-${index}`}
                className="h-[120px] w-auto object-contain shadow-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SecSlider;
