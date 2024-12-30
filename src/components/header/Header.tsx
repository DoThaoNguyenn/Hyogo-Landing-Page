"use client";
import React from "react";
import Menu from "./components/Menu";

import { useRouter } from "next/navigation";
import CopyRight from "@components/common/CopyRight";
import { Button } from "@components/Button";

export default function Header() {
  const router = useRouter();

  return (
    <header className="relative w-full  overflow-hidden bg-[url('/images/header/bg-mb.jpg')] lg:bg-[url('/images/header/bg-header.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="fixed top-0 left-0 w-full z-50 h-[90px] xl:h-auto">
        <Menu />
      </div>
      <div className="custeem-end relative h-full xl:max-w-[1490px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end px-4 sm:px-8 md:px-12 lg:px-15 pt-[90px]">
        <div className="flex flex-col w-full lg:w-1/2 gap-1 lg:pb-10">
          {/* block title */}
          <div className="order-1 flex flex-col min-w-[400px]:gap-2 gap-2 lg:gap-0">
            <p className="text-blue-primary text-xl xl:text-[38px] font-bold mt-8 lg:mt-10 leading-none">
              Điểm đến lý tưởng cho Kỹ sư tương lai
            </p>

            <div className="text-pc hidden lg:block">
              <img src="/images/header/text-hero.png" alt="image text" />
            </div>
            <div className="text-mb flex flex-col gap-2 lg:hidden">
              <div className="text-blue-secondary text-[80px] font-bold xl:text-[156px] lg:font-extrabold uppercase leading-none font-geomanist webkit-text-7">
                Hyogo
              </div>
              <div>
                <span className="text-blue-secondary text-[32px] xl:text-[61px] font-bold uppercase leading-none font-geomanist webkit-text-5">
                  JOB FAIR{" "}
                </span>
                <span className="text-blue-primary text-[32px] xl:text-[61px] font-bold uppercase leading-none font-geomanist webkit-text-5">
                  PRE-EVENT
                </span>
              </div>
              <div>
                <span className="text-blue-primary text-base xl:text-[28px] font-bold uppercase leading-none webkit-text-5">
                  Hạn đăng ký
                </span>
                <span className="text-blue-primary text-[26px] lg:text-[52px] font-bold uppercase tracking-[2.60px] leading-none webkit-text-5">
                  {" "}
                  07/03/2025
                </span>
              </div>
            </div>
          </div>
          {/* block info */}
          <div className="order-3 xl:order-2 flex flex-row gap-y-5 lg:gap-y-4 xl:gap-2 xl:flex-nowrap flex-wrap md:justify-between justify-end items-end xl:items-center bg-white rounded-[5px] px-5 py-4 shadow-[0px_2px_12px_0px_rgba(96,179,215,1.00)]">
            {/* time */}
            <div className="max-[320px]:w-full w-1/2 min-[800px]:w-1/5 lg:w-1/2 xl:w-1/4 order-1 xl:flex-col flex flex-row gap-2 justify-start lg:justify-center items-start lg:items-center">
              <img
                src="/images/icons/icon-alarm.svg"
                alt="logo"
                className="lg:w-[36px] lg:h-[36px] w-[29px] h-[29px]"
              />
              <div>
                <p className="text-black-text text-[15px] xl:text-lg font-medium text-start lg:text-center">
                  Thời gian
                </p>
                <p className="text-blue-secondary text-[15px] xl:text-lg font-bold text-start lg:text-center">
                  13 / 03 / 2025
                </p>
                <p className="text-blue-secondary text-[15px] xl:text-lg font-bold text-start lg:text-center">
                  08:00 - 12:00
                </p>
              </div>
            </div>
            <div className="w-full min-[800px]:w-2/5 lg:w-full xl:w-1/2 order-3 xl:order-2 flex flex-row xl:flex-col gap-2 justify-start lg:justify-center items-start lg:items-center xl:border-l xl:border-r border-blue-quaternary lg:px-[26px] xl:px-0">
              <img
                src="/images/icons/icon-location-city.svg"
                alt="logo"
                className="lg:w-[40px] lg:h-[40px] w-[29px] h-[29px]"
                width={40}
                height={40}
              />
              <div>
                <p className="text-black-text text-[15px] xl:text-lg font-medium text-start lg:text-center">
                  OFFLINE tại
                </p>
                <p className="text-blue-secondary text-[15px] xl:text-lg font-bold">
                  Đang cập nhật
                </p>
              </div>
            </div>
            <div className="max-[320px]:w-full w-1/2 min-[800px]:w-1/7 lg:w-1/2 xl:w-1/4 order-2 xl:order-3 flex flex-row xl:flex-col gap-2 justify-start lg:justify-center items-start lg:items-center">
              <img
                src="/images/icons/icon-date-range.svg"
                alt="logo"
                className="lg:w-[45px] lg:h-[32px] w-[29px] h-[29px]"
                width={45}
                height={32}
              />
              <div>
                <p className="text-black-text text-[15px] xl:text-lg font-medium text-start lg:text-center">
                  ONLINE qua
                </p>
                <p className="text-blue-secondary text-[15px] xl:text-lg font-bold text-start lg:text-center">
                  nền tảng
                </p>
                <p className="text-blue-secondary text-[15px] xl:text-lg font-bold text-start lg:text-center">
                  ZOOM
                </p>
              </div>
            </div>
          </div>
          {/* button icon */}
          <div className="order-2 xl:order-3 xl:hidden mt-4 mb-8 lg:mt-0">
            <div className="relative max-w-[300px] min-h-[88px]">
              <Button
                title="Đăng ký ngay"
                iconEnd={
                  <div className="absolute top-[-23%] right-[0px]">
                    <img
                      className=""
                      src="/images/icons/icon-habatan1.svg"
                      alt="icon"
                    />
                    <div className="ml-[-30px]">
                      <CopyRight />
                    </div>
                  </div>
                }
                onClick={() => router.push("/coming-soon")}
                className="max-w-[252px]"
              />
            </div>
          </div>

          {/* button ko icon */}
          <div className="hidden order-2 lg:order-3 xl:block relative mt-4">
            <Button
              title="Đăng ký ngay"
              size="large"
              onClick={() => router.push("/coming-soon")}
            />
          </div>
        </div>
        {/* block image hero */}
        <div className="w-full lg:w-1/2">
          <img src="/images/header/hero.png" alt="logo" className="" />
        </div>
      </div>

      {/* auto text */}
    </header>
  );
}
