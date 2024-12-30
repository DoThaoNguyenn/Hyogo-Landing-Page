import React from "react";
import Image from "next/image";

interface BoxInfoProps {
  icon: string;
  number?: string;
  text?: string;
  content: string;
  contentMb: string;
  className?: string;
}

export default function BoxInfo({
  icon,
  number,
  text,
  content,
  contentMb,
  className,
}: BoxInfoProps) {
  return (
    <div className={`flex flex-col items-center lg:pb-4 ${className || ""}`}>
      <Image
        src={icon}
        alt="icon"
        className="pt-[38px] py-[44px] pb-2.5 hidden lg:block"
        width={100}
        height={100}
        unoptimized
      />
      <Image
        src={icon}
        alt="icon"
        className="pt-[38px] py-[44px] pb-2.5 block lg:hidden"
        width={71}
        height={71}
        unoptimized
      />
      <div className="flex flex-col items-center justify-center text-center mt-[-1rem] xl:mt-2 w-full ">
        <div className="min-h-[60px]">
          {number && (
            <p className="text-blue-tertiary text-[32px] lg:text-[30px] 2xl:text-5xl font-extrabold">
              {number}
            </p>
          )}
          {text && (
            <p className="text-blue-tertiary text-[22px]  2xl:text-[31px] font-extrabold">
              {text.split("|").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < text.split("|").length - 1 && (
                    <br className="block xl:hidden" />
                  )}
                </span>
              ))}
            </p>
          )}
        </div>

        <p className="hidden lg:block text-blue-tertiary text-lg font-bold  mt-2">
          {content.split("|").map((line, index) => (
            <span key={index} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </p>
        <p className="block lg:hidden text-blue-tertiary text-base md:text-lg font-bold  ">
          {contentMb.split("|").map((line, index) => (
            <span key={index}>
              {line}
              {index < contentMb.split("|").length - 1 && (
                <br className="block lg:hidden" />
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
