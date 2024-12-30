"use client";
import React from "react";
import FooterCol from "./components/FooterCol";
import { useRouter } from "next/navigation";

type FooterLink = {
  text: string;
  url?: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const Footer = () => {
  const router = useRouter();
  const FooterContent: FooterSection[] = [
    {
      title: "MENU",
      links: [
        { text: "Giới thiệu chương trình", url: "#program-introduction" },
        { text: "Đôi tượng tham gia", url: "#target-participants" },
        { text: "Lợi ích tham gia", url: "#benefits-of-participation" },
        { text: "Danh sách công ty", url: "#list-of-companies" },
        { text: "Cuộc sống tại Hyogo", url: "#life-in-hyogo" },
        { text: "Câu hỏi thường gặp", url: "#frequently-asked-questions" },
      ],
    },
    {
      title: "CONTACT",
      links: [
        { text: "Vincom Center, 45A Lý Tự Trọng, Quận 1, TP. Hồ Chí Minh" },
        { text: "(84 28) 3827 0977 | 0901 822 531 (Ms Nhi)" },
        { text: "hyogo.recruitment@pasonatech.vn" },
        { text: "Privacy Policy", url: "https://pasona.vn/privacy-policy" },
      ],
    },
  ];

  return (
    <section className="container mx-auto pb-6 ">
      <div className=" border border-[#dedede] md:mb-5 2xl:mb-10"></div>
      <div className=" flex flex-col lg:flex-row gap-12 2xl:gap-0 justify-between items-start">
        <div className="flex flex-col items-start gap-[29px] pt-5">
          <img
            src="/images/header/logohyogo.png"
            alt="logo"
            className="border border-red-50 max-w-[184px] max-h-[52px] md:max-w-[200px] md:max-h-[58px] xl:min-w-[341px] xl:min-h-[100px]"
          />
          <div className="flex flex-row gap-3">
            <img
              className="cursor-pointer"
              src="/images/icons/fb.png"
              alt="logo"
              onClick={() =>
                router.push("https://www.facebook.com/PasonaHRVietnam")
              }
            />
            <img
              className="cursor-pointer"
              src="/images/icons/in.png"
              alt="logo"
              onClick={() =>
                router.push(
                  "https://www.linkedin.com/company/pasonahr-vietnam/"
                )
              }
            />
            <img
              className="cursor-pointer"
              src="/images/icons/web.png"
              alt="logo"
              onClick={() => router.push("https://www.google.com/")}
            />
          </div>
        </div>

        {FooterContent.map((item, index) => (
          <FooterCol key={index} title={item.title} links={item.links} />
        ))}
      </div>
      <div className="lg:hidden border border-[#dedede] mt-10 mx-4 "></div>
      <div className="text-lg 2xl:text-xl font-din text-gray-text font-medium leading-[35px] text-center mt-4 2xl:mt-8">
        © 2024 POWERED BY PASONA tech vietnam
      </div>
    </section>
  );
};

export default Footer;
