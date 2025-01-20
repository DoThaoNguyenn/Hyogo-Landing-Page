import React from "react";
type CompanyProps = {
  video: string;
  logo: string;
  name: string;
  linhvuc: string;
  text1: string;
  text2?: string;
};
const Company = ({
  video,
  logo,
  name,
  linhvuc,
  text1,
  text2,
}: CompanyProps) => {
  const color =
    linhvuc.toLowerCase().includes("sản xuất") ||
    linhvuc.toLowerCase().includes("nhân sự")
      ? "bg-blue-secondary"
      : "bg-yellow";
  return (
    <div className="flex flex-col w-full lg:w-auto">
      <div className="w-full lg:max-w-[671px] h-auto">
        <iframe
          className="w-full md:h-[340px]"
          src={video}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className={`w-full lg:max-w-[671px]  h-3 ${color}`} />
      <div className="flex flex-row gap-3 lg:gap-10 my-5 overflow-hidden lg:overflow-visible lg:min-h-[116px] 2xl:max-h-[116px]">
        <div className="basis-[32%]">
          <img
            src={logo}
            alt="logo"
            // className="object-contain w-[32%] lg:w-auto"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="basis-[60%] flex flex-col  ">
          <div
            className={`text-${color.substring(
              3
            )} text-[22px] md:text-[28px] lg:text-[22px] xl:text-[25px] 2xl:text-[29px] font-medium h-full flex justify-center items-center sm:justify-start  tracking-[-0.44px]`}
          >
            {name}
          </div>
          <div
            className={`hidden lg:block w-[71px] h-0.5 bg-${color.substring(
              3
            )}`}
          />
          <p
            className={`hidden lg:block text-${color.substring(
              3
            )} text-xl font-bold`}
          >
            Lĩnh vực:
          </p>
          <p className="hidden lg:block text-black-text text-xl font-semibold">
            {linhvuc}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:hidden">
        <p
          className={`text-${color.substring(3)} text-lg sm:text-xl font-bold`}
        >
          Lĩnh vực:
        </p>
        <p className="text-black-text text-[18px] font-medium mb-[10px]">
          {linhvuc}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p
          className={`text-${color.substring(
            3
          )} text-lg sm:text-xl font-bold mb-2 mt-2.5 sm:mt-0`}
        >
          Thông tin công ty
        </p>
        <p className="text-black-text text-lg font-medium">{text1}</p>
        {text2 && (
          <p className="text-black-text text-lg font-medium">{text2}</p>
        )}
      </div>
    </div>
  );
};

export default Company;
