import CopyRight from "@components/common/CopyRight";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { Button } from "@components/Button";
import useScroll from "@/hooks/useScroll/useScroll";
import useWindowSize from "@/hooks/useWindowSize";
import {
  IconArrow,
  IconGroup,
  IconHome,
  IconNote,
  IconPicture,
  IconQuestion,
} from "@components/Icon";

type Nav = {
  path: string;
  titlePc: string;
  titleMb: string;
  icon: ReactNode;
};

const Menu = () => {
  const router = useRouter();
  const Navigate = () => {
    const pathname = usePathname();
    const navigate: Nav[] = [
      {
        path: "#program-introduction",
        titlePc: "Giới thiệu<br/> chương trình",
        titleMb: "Giới thiệu chương trình",
        icon: <IconHome />,
      },
      {
        path: "#target-participants",
        titlePc: "Đối tượng<br/> tham gia",
        titleMb: "Đối tượng tham gia",
        icon: <IconGroup />,
      },
      {
        path: "#benefits-of-participation",
        titlePc: "Lợi ích<br/> tham gia",
        titleMb: "Lợi ích tham gia",
        icon: <IconArrow />,
      },
      {
        path: "#list-of-companies",
        titlePc: "Danh sách<br/> công ty",
        titleMb: "Danh sách công ty",
        icon: <IconNote />,
      },
      {
        path: "#life-in-hyogo",
        titlePc: "Cuộc sống<br/> tại Hyogo",
        titleMb: "Cuộc sống tại Hyogo",
        icon: <IconPicture />,
      },
      {
        path: "#frequently-asked-questions",
        titlePc: "Các câu hỏi<br/> thường gặp",
        titleMb: "Các câu hỏi thường gặp",
        icon: <IconQuestion />,
      },
    ];
    return { pathname, navigate };
  };

  const isScrolled = useScroll(50);
  const [isActiveHamburger, setIsActiveHamburger] = useState<boolean>(false);
  const { width: windowWidth } = useWindowSize();
  const { pathname, navigate } = Navigate();

  useEffect(() => {
    if (isActiveHamburger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActiveHamburger]);

  const handleToggleMenu = () => {
    setIsActiveHamburger(!isActiveHamburger);
  };

  const isMobileView = windowWidth < 1280;
  console.log("isActiveHamburger", isActiveHamburger);

  return (
    <>
      <div
        className={` ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0px_4px_4px_0px_rgba(34,132,198,0.10)]"
            : null
        }`}
      >
        <div className="xl:max-w-[1490px] mx-auto bg-white shadow-[0px_4px_4px_0px_rgba(34,132,198,0.10)] xl:bg-transparent xl:shadow-none">
          <nav
            className={`w-screen xl:w-full z-50 flex flex-row justify-between items-center py-5 px-4 sm:px-8 md:px-12 lg:px-15 xl:py-6 xl:bg-transparent xl:shadow-none`}
          >
            <img
              src="/images/header/hyogo-logo.png"
              alt="logo"
              className="w-1/2 sm:w-1/4 max-w-[180px] lg:max-w-[220px] xl:w-auto"
            />
            <div
              className={`hamburger hamburger--squeeze block xl:hidden ${
                isActiveHamburger ? "is-active" : ""
              }`}
              onClick={handleToggleMenu}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>

            {!(isActiveHamburger && isMobileView) && (
              <>
                <ul className="hidden xl:flex flex-row pb-2 lg:gap-2 2xl:gap-[26px]">
                  {navigate.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col justify-center content-center w-[6.5rem] "
                    >
                      <Link
                        className={`flex items-center text-center text-base hover:text-blue-secondary ${
                          pathname === item.path
                            ? "text-blue-secondary font-extrabold"
                            : "text-black-text font-semibold"
                        }`}
                        href={item.path}
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: item.titlePc }}
                        />
                      </Link>
                      {pathname === item.path && (
                        <div className="w-[65px] h-[3px] bg-[#029fc8] mx-auto mt-1"></div>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="hidden xl:block relative">
                  <Button
                    title="Đăng ký ngay"
                    iconEnd={
                      <div className="absolute top-[-32%] right-[-50px] ">
                        <img
                          className=""
                          src="/images/icons/icon-habatan1.svg"
                          alt="icon"
                        />
                        <div className="ml-[-30px]">
                          <CopyRight />
                        </div>
                      </div>
                    }
                    onClick={() => router.push("/coming-soon")}
                  />
                </div>
              </>
            )}
          </nav>
        </div>
      </div>
      <nav
        className={`menu-mobile relative xl:hidden w-0 z-[-1] flex flex-col justify-center items-center gap-5 bg-white-60 backdrop-blur-xl ${
          isActiveHamburger ? "active w-full" : ""
        }`}
      >
        <div className="xl:hidden bg-slate-500 !w-full h-dvh left-0 z-50 menu-mobile">
          <div className="flex flex-col items-center px-4 py-8 mt-2 md:px-14">
            <div className="flex flex-col items-center w-full space-y-6">
              {navigate.map((item, index) => (
                <button
                  key={index}
                  className={`item-link w-full flex items-center gap-4 py-2 px-7  hover:bg-blue-secondary hover:text-white ${
                    pathname === item.path || index === 0
                      ? "bg-blue-secondary text-white"
                      : "bg-blue-light text-blue-secondary"
                  } text-xl font-medium rounded-[5px] border-2 border-blue-secondary`}
                  style={{
                    color:
                      pathname === item.path || index === 0
                        ? "white"
                        : "text-blue-secondary",
                  }}
                >
                  {item.icon}
                  {item.titleMb}
                </button>
              ))}
            </div>

            {/* Biểu tượng mạng xã hội */}
            <img
              src="/images/icons/icon-social-media.svg"
              alt="logo"
              className="mt-9"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
