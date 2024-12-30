import React, { useMemo } from "react";
import ReasonItem from "./components/ReasonItem";

const SecReason = () => {
  const reasons = [
    {
      icon: "/images/icons/icon-exchange.svg",
      title: "Giao lưu, trao đổi",
      description:
        "Giao lưu, trao đổi với các doanh nghiệp & nhà tuyển dụng từ Hyogo Nhật Bản.",
      color: "blue-secondary",
    },
    {
      icon: "/images/icons/icon-note.svg",
      title: "Tư vấn nghề nghiệp & CV",
      description:
        "Nhận tư vấn chỉnh sửa CV, kỹ năng phỏng vấn, tìm kiếm việc làm.",
      isLeft: true,
      color: "yellow",
    },
    {
      icon: "/images/icons/icon-bag.svg",
      title: "Độc quyền cho kỹ sư trẻ",
      description:
        "Cơ hội nghề nghiệp độc quyền cho các kỹ sư trẻ trong các ngành CNTT, công nghệ ô tô, xây dựng và cơ khí, sản xuất thép và máy móc,...",
      color: "yellow",
    },
    {
      icon: "/images/icons/icon-airplane.svg",
      title: "Tư vấn về cuộc sống tại Nhật Bản",
      description:
        "Tìm hiểu thông tin và lưu ý quan trọng khi sinh sống và làm việc tại Nhật Bản.",
      isLeft: true,
      color: "blue-secondary",
    },
    {
      icon: "/images/icons/icon-map.svg",
      title: "Tiếp cận thị trường việc làm Nhật Bản",
      description:
        "Cập nhật thông tin hữu ích về thị trường việc làm, văn hóa công ty, nhu cầu tuyển dụng, kỹ năng cần thiết tại Nhật Bản.",
      color: "blue-secondary",
    },
    {
      icon: "/images/icons/icon-chat.svg",
      title: "Gặp gỡ & giao lưu",
      description:
        "Mở rộng mối quan hệ với đồng nghiệp và công ty trong ngành.",
      isLeft: true,
      color: "yellow",
    },
  ];

  // Sắp xếp lại mảng cho mobile view
  const mobileReasons = useMemo(() => {
    const leftItems = reasons.filter((_, index) => index % 2 === 0);
    const rightItems = reasons.filter((_, index) => index % 2 === 1);
    return [...leftItems, ...rightItems];
  }, []);

  return (
    <div
      id="benefits-of-participation"
      className="relative bg-repeat pt-[13rem] md:pt-[23rem] lg:pb-[14rem]"
      style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
    >
      <div className="text-center text-[#029fc8]/10 text-[48px] md:text-[100px] lg:text-[150px] font-normal font-geomanist leading-none tracking-tighter">
        HYOGO JOB FAIR PRE-EVENT
      </div>
      <div className="container mx-auto relative -mt-[100px]">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-row gap-x-4">
            <div className="hidden md:flex flex-row items-center gap-x-4">
              <img
                src="/images/icons/icon-habatan4.png"
                alt="reason"
                className="w-auto h-auto object-contain items-start"
              />
              <div className="flex flex-col">
                <p className="text-black-text text-[28px] lg:text-[32px] font-extrabold text-center uppercase leading-10 lg:leading-[50px]">
                  vì sao sinh viên
                </p>
                <div className="text-blue-secondary text-[28px] lg:text-[32px] font-extrabold text-center uppercase leading-10 lg:leading-[50px]">
                  không nên bỏ lỡ sự kiện này
                </div>
              </div>
            </div>

            <div className="flex md:hidden flex-col gap-y-4">
              <img
                src="/images/icons/icon-habatan4.png"
                alt="reason"
                className="w-[95px] h-[95px] object-contain items-start"
              />
              <div className="flex flex-col">
                <p className="text-black-text text-[28px] lg:text-[32px] font-extrabold text-center uppercase leading-10 lg:leading-[50px]">
                  vì sao sinh viên
                </p>
                <div className="text-blue-secondary text-[28px] lg:text-[32px] font-extrabold text-center uppercase leading-10 lg:leading-[50px]">
                  không nên bỏ lỡ sự kiện này
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-y-8 xl:gap-y-12 gap-x-14 xl:gap-x-[25.93rem] mt-[1.6875rem] ">
          {reasons.map((reason, index) => (
            <ReasonItem
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              isLeft={reason.isLeft}
              color={reason.color}
            />
          ))}
        </div>
        <div className="lg:hidden grid grid-cols-1 gap-y-8 gap-x-14  mt-[1.6875rem] ">
          {mobileReasons.map((reason, index) => (
            <ReasonItem
              key={index}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              isLeft={reason.isLeft}
              color={reason.color}
            />
          ))}
        </div>
        <img
          src="/images/SecReason/person.png"
          alt="img"
          className="w-full max-w-[800px] mx-auto lg:absolute lg:bottom-[-28%] lg:left-[50%] lg:transform lg:-translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default SecReason;
