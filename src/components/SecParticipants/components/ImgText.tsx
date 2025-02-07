import React from "react";

type Props = {
  img: string;
  bg: string;
  description: string;
};

type IProps = {
    images: Props[];
};

const ImgText = ({ images }: IProps) => {
  return (
    <div className="flex flex-col xl:flex-row gap-7 xl:gap-6 items-center justify-center w-fit">
      {images.map((item: Props, index: number) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div className="bg-white p-1">
            <img
              src={item.img}
              alt="alt"
              className="w-[301px] h-[168px] 2xl:w-[392px] 2xl:h-[219px]"
            />
          </div>
          <div
            className="w-[273px] h-[159px] 2xl:w-[345px] 2xl:h-[250px] p-5 2xl:py-14 2xl:px-12 -mt-8 2xl:-mt-12"
            style={{
              clipPath: "polygon(0% 0%, 100% 0, 100% 70%, 80% 100%, 0% 100%)",
              backgroundColor: item.bg,
            }}
          >
            <p className="text-white xl:text-lg text-base font-bold leading-loose 2xl:leading-[38px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImgText;
