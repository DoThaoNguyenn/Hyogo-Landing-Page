import SecTitle from "@components/common/SecTitle";
import React from "react";
import InfoMap from "./components/InfoMap";

const SecMap = () => {
  const infoMap = [
    {
      title: "Ngày giờ",
      icon1: "/images/icons/icon-alarm-map.svg",
      icon2: "/images/icons/icon-calendar.svg",
      text1: "Vào lúc: 08:00 - 12:00",
      text2: "Thời gian: Thứ năm, 13/03/2025",
    },
    {
      title: "Địa điểm",
      text1: "Trường Đại học Trường Đại học",
      text2: "Trường Đại học Trường Đại học",
    },
  ];
  return (
    <div className=" pb-[5rem] pt-[3.37rem] relative bg-[#60b3d7]/20 overflow-hidden">
      <SecTitle title="thông tin sự kiện" />
      <div className="flex flex-row justify-between items-start pt-[3.625rem] pl-[31.81rem] pr-[20rem]">
        <div>
          <div className="flex flex-col gap-16">
            {infoMap.map((item, index) => (
              <InfoMap
                key={index}
                title={item.title}
                icon1={item.icon1}
                icon2={item.icon2}
                text1={item.text1}
                text2={item.text2}
              />
            ))}
          </div>
          <div className="text-black-text text-lg font-normal leading-loose mt-4">
            Địa chỉ: Địa chỉ Địa chỉ Địa chỉ Địa chỉ
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.511579595755!2d106.65532687550588!3d10.772074989376463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1734577968971!5m2!1svi!2s"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default SecMap;
