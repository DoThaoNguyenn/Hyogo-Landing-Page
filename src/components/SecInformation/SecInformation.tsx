import React from "react";
import BoxInfo from "./components/BoxInfo";

export default function SecInformation() {
  const boxInfos = [
    {
      icon: "/images/gif/gif-location-city.gif",
      number: "11",
      content: "Công ty Nhật Bản<br/> tham gia sự kiện",
      contentMb: "Công ty Nhật Bản| tham gia sự kiện",
    },
    {
      icon: "/images/gif/gif-conversation.gif",
      number: "100",
      content: "Giới hạn số lượng sinh viên<br/> tham gia Offline",
      contentMb: "Giới hạn| số lượng sinh viên| tham gia Offline",
    },
    {
      icon: "/images/gif/gif-physic.gif",
      number: "04",
      content: "Lĩnh vực Sản xuất/ CNTT/<br/> Xây dựng/ Nhân sự",
      contentMb: "Lĩnh vực| Sản xuất/ CNTT/| Xây dựng/ Nhân sự",
    },
    {
      icon: "/images/gif/gif-video.gif",
      text: "Không| giới hạn",
      content: "Số lượng sinh viên<br/> tham gia Online",
      contentMb: "Số lượng sinh viên| tham gia Online",
    },
    {
      icon: "/images/gif/gif-translator.gif",
      text: "Không| yêu cầu",
      content: "Tiếng Nhật",
      contentMb: "Tiếng Nhật",
    },
  ];

  return (
    <section id="program-introduction" className="pb-9">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col lg:flex-row">
          <div className=" lg:hidden w-full flex justify-center">
            <div className="relative flex items-center justify-center ml-4">
              <img
                src="/images/SecInformation/info1.png"
                alt="img"
                style={{ width: "80%" }}
                className="pt-[15px]"
              />
              <img
                src="/images/SecInformation/info2.png"
                alt="img"
                style={{ width: "40%" }}
                className="absolute bottom-[-10%] left-0 "
              />
            </div>
          </div>
          <img
            src="/images/SecInformation/info1.png"
            alt="img"
            style={{ width: "50%", height: "50%" }}
            className="pt-[15px] mr-3 hidden lg:block"
          />
          <div className="pl-[7px] pt-[65px] flex flex-row gap-[7px] items-start">
            <img
              src="/images/icons/icon-habatan2.svg"
              alt="img"
              className="pt-8 hidden lg:block"
            />
            <div>
              <div className="flex flex-row items-center justify-center">
                <p className="text-blue-secondary text-[64px] xl:text-[90px] 2xl:text-[120px] font-medium font-just pl-[7px] ">
                  Hyogo Prefecture
                </p>
                <img
                  src="/images/icons/icon-habatan2.svg"
                  alt="img"
                  width={86}
                  height={89}
                  className="block lg:hidden"
                />
              </div>
              <p className="text-black-text text-base lg:text-lg font-medium lg:max-w-[27.6rem] leading-loose lg:leading-[38px] pl-[36px] lg:pl-0 pr-[22px] lg:pr-0">
                Nằm ở vùng Kansai, Nhật Bản, Hyogo nổi tiếng với nền công nghiệp
                phát triển mạnh mẽ, đặc biệt là các ngành sản xuất, chế tạo và
                công nghệ thông tin.<br></br> Với nhiều công ty đa quốc gia và
                doanh nghiệp khởi nghiệp đặt trụ sở tại đây, Hyogo mang đến vô
                số cơ hội việc làm hấp dẫn cho các kỹ sư trẻ.
              </p>
            </div>
          </div>
        </div>

        <img
          src="/images/SecInformation/info2.png"
          alt="img"
          style={{ width: "20%", height: "20%" }}
          className="hidden lg:block"
        />
      </div>

      <div className="flex flex-col xl:flex-row w-[90%] xl:w-[75%] mx-auto items-center justify-center">
        <img
          src="/images/SecInformation/Hyogo_Map.png"
          alt="img"
          // style={{ width: "80%", height: "80%" }}
          className="pb-[39px] block xl:hidden"
        />

        <div className="flex flex-col gap-[7px] lg:gap-[18px]">
          <div className="flex flex-col sm:block">
            <span className="text-blue-secondary text-[54px] xl:text-[80px] font-normal font-just ">
              Hyogo Job Fair{" "}
            </span>
            <span className="text-black-text text-[54px] xl:text-[80px] font-normal font-just ">
              Pre - Event là gì?
            </span>
          </div>
          <div className="w-full xl:w-[80%]">
            <p className="text-black-text text-lg font-medium leading-[38px]">
              Ngày hội việc làm tỉnh Hyogo - Nhật Bản là sự kiện đặc biệt do
              Chính quyền tỉnh Hyogo tổ chức. Sự kiện nhằm kết nối sinh viên
              Việt Nam với các doanh nghiệp tiềm năng tại tỉnh Hyogo để chuẩn bị
              cho bước đệm sự nghiệp tại Nhật Bản trong tương lai.
            </p>
            <br />
            <span className="text-black-text text-lg font-medium leading-[38px]">
              Sự kiện dành riêng dành cho{" "}
            </span>
            <span className="text-[#029fc8] text-lg font-bold font-['Inter'] leading-[38px]">
              sinh viên ngành Khoa học Kỹ thuật và các ngành liên quan
            </span>
            <span className="text-[#34414d] text-lg font-medium font-['Inter'] leading-[38px]">
              , với mục tiêu trang bị cho sinh viên đầy đủ
            </span>
            <span className="text-[#029fc8] text-lg font-bold font-['Inter'] leading-[38px]">
              {" "}
              kiến thức để nhanh chóng hoà nhập thị trường lao động{" "}
            </span>
            <span className="text-[#34414d] text-lg font-medium font-['Inter'] leading-[38px]">
              ngay khi vừa tốt nghiệp,
            </span>
            <span className="text-[#029fc8] text-lg font-bold font-['Inter'] leading-[38px]">
              {" "}
              tìm hiểu sâu hơn về văn hóa doanh nghiệp Nhật Bản, hoạt động kinh
              doanh, yêu cầu tuyển dụng
            </span>
            <span className="text-[#34414d] text-lg font-medium font-['Inter'] leading-[38px]">
              , đồng thời khám phá những
            </span>
            <span className="text-[#029fc8] text-lg font-bold font-['Inter'] leading-[38px]">
              {" "}
              cơ hội nghề nghiệp hấp dẫn tại tỉnh Hyogo, Nhật Bản.
            </span>
          </div>
        </div>

        <img
          src="/images/SecInformation/Hyogo_Map.png"
          alt="img"
          style={{ width: "90%", height: "90%" }}
          className="pb-[39px] hidden xl:block"
        />
      </div>

      <div className="w-[90%] lg:w-[75%] grid grid-cols-2 lg:grid-cols-5 gap-x-8 2xl:gap-x-[62px] mx-auto">
        {boxInfos.map((info, index) => (
          <BoxInfo
            key={index}
            icon={info.icon}
            number={info.number}
            text={info.text}
            content={info.content}
            contentMb={info.contentMb}
            className={
              index === 0 ? "col-span-2 justify-self-center lg:col-span-1" : ""
            }
          />
        ))}
      </div>
    </section>
  );
}
