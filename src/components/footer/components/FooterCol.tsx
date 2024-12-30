import React from "react";
import Link from "next/link";

type FooterLink = {
  text: string;
  url?: string;
};

type FooterColProps = {
  title: string;
  links: FooterLink[];
};

const FooterCol = ({ title, links }: FooterColProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-[29px]">
      <p className="text-2xl sm:text-[25px] font-bold font-din text-blue-secondary leading-[30px]">
        {title}
      </p>
      {links.map((link, index) =>
        link.url ? (
          <Link
            key={index}
            href={link.url}
            className="text-black-text text-lg sm:text-xl font-medium sm:font-normal"
          >
            {link.text}
          </Link>
        ) : (
          <p
            key={index}
            className="text-black-text text-lg sm:text-xl font-medium sm:font-normal"
          >
            {link.text}
          </p>
        )
      )}
    </div>
  );
};

export default FooterCol;
