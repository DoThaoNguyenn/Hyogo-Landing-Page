"use client";
import Footer from "@components/footer/Footer";
import HeaderForm from "@components/header/components/HeaderForm";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div
      className="bg-repeat"
      style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
    >
      <HeaderForm />
      <div className="container mx-auto flex flex-col pt-[4rem] pb-10 sm:pt-[8.75rem] sm:pb-[6.56rem] justify-center items-center">
        <img
          src="/images/icons/success.png"
          alt="success"
          className="w-[62px] h-[62px] sm:w-auto sm:h-auto"
        />
        <p className="text-blue-secondary text-[32px] sm:text-[65px] font-bold uppercase mt-10 sm:mt-[3rem]">
          thành công
        </p>
        <p className="text-blue-secondary text-lg sm:text-3xl font-bold text-center mt-7 sm:mt-[2rem] leading-[37px] sm:leading-[56px]">
          Cảm ơn bạn đã đăng ký tham gia chương trình Hyogo Job Fair Pre - Event
        </p>
        <p className="text-blue-secondary text-lg sm:text-3xl font-bold text-center leading-[37px] sm:leading-[56px]">
          Chúc bạn có hành trang bổ ích tại sự kiện!
        </p>
        <p className="text-black text-center text-base sm:text-lg font-normal mt-8 leading-[37px] sm:leading-[56px]">
          Thông tin của bạn <br className="block sm:hidden" /> đã được gửi đến
          BTC của Job Fair
        </p>
        <p className="text-black text-center text-base sm:text-lg font-normal leading-[37px] sm:leading-[56px]">
          BTC sẽ gửi thông tin xác nhận và hướng dẫn tham gia sự kiện khi gần
          đến ngày sự kiện.
        </p>
        <button
          className="bg-blue-secondary text-white text-xl sm:text-[22px] font-semibold sm:font-bold px-[3.43rem] py-3 sm:py-5 rounded-[5px] mt-8 "
          onClick={() => router.push("/")}
        >
          Trở về trang chủ
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default page;
