import React from "react";
import ReasonItem from "./components/ReasonItem";

const SecReason = () => {
  const reasons = [
    {
      icon: "/images/icons/icon-exchange.svg",
      title: "Giao lưu, trao đổi",
      description:
        "Giao lưu, trao đổi với các doanh nghiệp & nhà tuyển dụng từ Hyogo Nhật Bản.",
    },
    {
      icon: "/images/icons/icon-note.svg",
      title: "Tư vấn nghề nghiệp & CV",
      description:
        "Nhận tư vấn chỉnh sửa CV, kỹ năng phỏng vấn, tìm kiếm việc làm.",
      isLeft: true,
    },
    {
      icon: "/images/icons/icon-bag.svg",
      title: "Độc quyền cho kỹ sư trẻ",
      description:
        "Cơ hội nghề nghiệp độc quyền cho các kỹ sư trẻ trong các ngành CNTT, công nghệ ô tô, xây dựng và cơ khí, sản xuất thép và máy móc,...",
    },
    {
      icon: "/images/icons/icon-airplane.svg",
      title: "Tư vấn về cuộc sống tại Nhật Bản",
      description:
        "Tìm hiểu thông tin và lưu ý quan trọng khi sinh sống và làm việc tại Nhật Bản.",
      isLeft: true,
    },
    {
      icon: "/images/icons/icon-map.svg",
      title: "Tiếp cận thị trường việc làm Nhật Bản",
      description:
        "Cập nhật thông tin hữu ích về thị trường việc làm, văn hóa công ty, nhu cầu tuyển dụng, kỹ năng cần thiết tại Nhật Bản.",
    },
    {
      icon: "/images/icons/icon-chat.svg",
      title: "Gặp gỡ & giao lưu",
      description:
        "Mở rộng mối quan hệ với đồng nghiệp và công ty trong ngành.",
      isLeft: true,
    },
  ];
  return (
    <div
      className="relative bg-no-repeat bg-cover pt-[20.75rem] pb-[14rem]"
      style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
    >
      <div className="relative text-center text-[#029fc8]/10 text-[150px] font-bold font-geomanist">
        HYOGO JOB FAIR PRE-EVENT
        <img
          src="/images/icons/icon-habatan4.png"
          alt="reason"
          className="absolute top-[35%] left-[29%]"
        />
        <div className="absolute bottom-[-10%] left-[37%]">
          <p className="text-black-text text-[32px] font-extrabold text-center uppercase leading-[50px]">
            vì sao sinh viên
          </p>
          <div className="text-blue-secondary text-[32px] font-extrabold text-center uppercase leading-[50px]">
            không nên bỏ lỡ sự kiện này
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-[6.43rem] gap-y-12 gap-x-[25.93rem]">
        {reasons.map((reason, index) => (
          <ReasonItem
            key={index}
            title={reason.title}
            description={reason.description}
            icon={reason.icon}
            isLeft={reason.isLeft}
          />
        ))}
      </div>
      <img
        src="/images/SecReason/person.png"
        alt="img"
        className="absolute bottom-8 left-[28%]"
      />
    </div>
  );
};

export default SecReason;