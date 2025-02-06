import React from "react";
type InfoMapProps = {
  title: string;
  icon1?: string;
  icon2?: string;
  text1: string;
  text2: string;
};
const InfoMap = ({ title, icon1, icon2, text1, text2 }: InfoMapProps) => {
  return (
    <div className="flex flex-col gap-1 sm:gap-3">
      <div className="text-blue-secondary text-[22px] font-bold ">{title}</div>
      <div className="flex flex-row gap-4">
        {icon1 && <img src={icon1} alt="logo" />}
        <p className="text-black-text text-lg font-semibold leading-loose">
          {text1}
        </p>
      </div>
      <div className="flex flex-row gap-4">
        {icon2 && <img src={icon2} alt="logo" />}
        <p className="text-black-text text-lg font-normal leading-loose">
          {text2}
        </p>
      </div>
    </div>
  );
};

export default InfoMap;
