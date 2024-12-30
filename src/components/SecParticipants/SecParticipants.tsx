import React from "react";
import ImgText from "./components/ImgText";

const SecParticipants = () => {
  const data = [
    {
      img: "/images/SecParticipants/university.png",
      bg: "#f1b701",
      description:
        " Sinh viên Trường Đại học Bách Khoa - Đại học Quốc Gia TP.HCM (tất cả chuyên ngành)",
    },
    {
      img: "/images/SecParticipants/smile.png",
      bg: "#0781a7",
      description:
        "Sinh viên ngành Khoa học Kỹ thuật hoặc các ngành liên quan trên địa bàn TP.HCM",
    },
    {
      img: "/images/SecParticipants/people.png",
      bg: "#f1b701",
      description:
        "Sinh viên năm 1, 2, 3, 4 mong muốn tìm hiểu cơ hội nghề nghiệp tại Nhật Bản",
    },
  ];

  return (
    <div id="target-participants" className="w-full relative z-10">
      <div className="flex flex-col">
        {/* UPPER PART */}
        <div className="upper w-full flex flex-row justify-start">
          {/* color space */}
          <div className="relative bg-[#029fc8] w-full max-w-[1701px] xl:h-[450px] pt-[3.25rem] xl:pt-5 pb-32 xl:pb-7 px-4 xl:px-32 flex flex-row items-start">
            {/* vertical text */}
            <div className="hidden xl:flex h-full flex-col">
              <p className="-rotate-90 translate-y-80 text-left text-[38px] font-extrabold text-stroke-a uppercase whitespace-nowrap w-32">
                đối tượng tham gia
              </p>
              <div className="bg-[#0b6386]/50 h-[60%] translate-y-[55%]"></div>
            </div>
            {/* text */}
            <div className="mainContent flex flex-col xl:flex-row gap-3.5 xl:gap-[3.5rem] w-full justify-center items-start xl:items-center">
              <h5 className="text-white text-[28px] font-extrabold whitespace-nowrap uppercase">
                Đối tượng tham gia
              </h5>
              <p className="text-white text-base xl:text-lg font-medium">
                Sinh viên sẽ giao lưu trực tuyến với 11 doanh nghiệp đến từ tỉnh
                Hyogo.
                <br />
                Các công ty sẽ được chia thành 2 phòng theo khối ngành, mỗi
                phiên thảo luận của doanh nghiệp sẽ có 30 phút để trình bày và
                trao đổi với sinh viên Việt Nam.
              </p>
            </div>
            {/* bird icon */}
            <img
              src="/images/icons/icon-habatan3.png"
              alt="bird-icon"
              className="absolute w-[154px] h-[123px] xl:w-[200px] xl:h-auto 2xl:w-[307px] 2xl:h-auto bottom-6 xl:bottom-48 2xl:bottom-52 -right-6 2xl:right-[-130px] z-50"
            />
          </div>
          {/* white space */}
          <div className="max-w-[33px] 2xl:max-w-[219px] w-full bg-white"></div>
        </div>

        {/* LOWER PART */}
        <div className="lower w-full relative overflow-visible">
          <div className="w-full h-[785px] bg-[#0b6386] xl:hidden"></div>
          {/* Image for breakpoint < 1280px */}
          <img
            src="/images/SecParticipants/IMG-sm.png"
            alt="img-sml"
            className="absolute xl:hidden -top-20 right-0 sm:w-[600px] sm:h-[950px] lg:w-[850px]"
          />
          {/* Image for breakpoint >= 1280px */}
          <img
            src="/images/SecParticipants/IMG.png"
            alt="img"
            className="absolute hidden xl:block xl:-top-[270px] 2xl:-top-80 xl:-right-60 2xl:right-0"
          />
          <div className="w-fit absolute top-0 xl:-top-14 2xl:-top-16 right-7 sm:right-36 lg:right-72 xl:right-10 2xl:right-60">
            <ImgText images={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecParticipants;
