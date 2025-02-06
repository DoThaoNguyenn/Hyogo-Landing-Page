import React from "react";
interface TimelineItemProps {
  time: string;
  event: string;
  eventMB: string;
}

const TimelineItem = ({ time, event, eventMB }: TimelineItemProps) => {
  return (
    <>
      <div className="flex flex-row gap-4 md:gap-4 xl:gap-[80px] py-4">
        <div className="text-black-text text-base sm:text-xl sm:w-[144px]">
          {time}
        </div>
        <div className="text-black-text text-base sm:text-xl sm:w-[500px]">
          <div className="hidden sm:block">{event}</div>
          <div className="sm:hidden">
            <span dangerouslySetInnerHTML={{ __html: eventMB }} />
          </div>
        </div>
      </div>
      <hr className="h-[0px] border-[#6B7780]" />
    </>
  );
};

export default TimelineItem;
