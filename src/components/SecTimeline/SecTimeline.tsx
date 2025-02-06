import React from "react";
import TimelineItem from "./components/TimelineItem";

const SecTimeline = () => {
  const events = [
    {
      time: "8:00 - 8:05",
      event: "Opening Greeting - Lễ khai mạc",
      eventMB: "Opening Greeting</br>Lễ khai mạc",
    },
    {
      time: "8:05 - 8:20",
      event: "Hyogo Prefecture Introduction - Giới thiệu Tỉnh Hyogo",
      eventMB: "Hyogo Prefecture Introduction</br>Giới thiệu Tỉnh Hyogo",
    },
    {
      time: "8:30 - 9:00",
      event: "Company Session 1 - Phiên thảo luận công ty 1",
      eventMB: "Company Session 1</br>Phiên thảo luận công ty 1",
    },
    {
      time: "9:05 - 9:35",
      event: "Company Session 2 - Phiên thảo luận công ty 2",
      eventMB: "Company Session 2</br>Phiên thảo luận công ty 2",
    },
    {
      time: "9:40 - 10:10",
      event: "Company Session 3 - Phiên thảo luận công ty 3",
      eventMB: "Company Session 3</br>Phiên thảo luận công ty 3",
    },
    {
      time: "10:20 - 10:50",
      event: "Company Session 4 - Phiên thảo luận công ty 4",
      eventMB: "Company Session 4</br>Phiên thảo luận công ty 4",
    },
    {
      time: "10:55 - 11:25",
      event: "Company Session 5 - Phiên thảo luận công ty 5",
      eventMB: "Company Session 5</br>Phiên thảo luận công ty 5",
    },
    {
      time: "11:30 - 12:00",
      event: "Company Session 6 - Phiên thảo luận công ty 6",
      eventMB: "Company Session 6</br>Phiên thảo luận công ty 6",
    },
  ];

  return (
    <div
      className="bg-repeat"
      style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
    >
      <div className="container mx-auto py-[46px] sm:py-[84px]">
        <div className="w-full flex items-center justify-center ">
          <div className="flex flex-col relative">
            <img
              className="absolute top-[7%] right-[-5%] sm:top-[-10%] sm:right-[-5%] w-[111px] h-[114px] sm:w-auto sm:h-auto"
              src="/images/icons/Mascot.png"
              alt="mascot"
            />
            {/* title */}
            <div className="flex items-start text-blue-secondary text-[28px] sm:text-[32px] font-extrabold leading-[50px]">
              CHƯƠNG TRÌNH SỰ KIỆN
            </div>
            {/* Schedule */}
            <div className="mt-8">
              <div className="flex flex-row gap-4 md:gap-4 xl:gap-[80px] py-2.5">
                <div className="text-lg sm:text-2xl font-bold text-blue-secondary sm:w-[144px]">
                  Thời gian
                </div>
                <div className="text-lg sm:text-2xl font-bold text-blue-secondary">
                  Sự kiện
                </div>
              </div>

              {/* Event List */}
              {events.map((item, index) => (
                <TimelineItem
                  key={index}
                  time={item.time}
                  event={item.event}
                  eventMB={item.eventMB}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecTimeline;
