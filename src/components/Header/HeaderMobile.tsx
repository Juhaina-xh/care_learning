"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeaderMobile() {
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <button>
        <Image
          src="/images/icons/hamburgerMenu.png"
          alt="Menu"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </button>

      <div className="flex items-center gap-1">
        <Link href="#" className="p-1 rounded-full hover:bg-gray-100">
          <Image
            src="/images/icons/icon-search.svg"
            alt="Search"
            width={34}
            height={34}
          />
        </Link>
        <Link href="#" className="p-1 rounded-full hover:bg-gray-100">
          <Image
            src="/images/icons/icon-notification.svg"
            alt="Notifications"
            width={34}
            height={34}
          />
        </Link>
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative">
            <div className="w-[48px] h-[48px] rounded-[16px] border-[1px] border-[#2050E4] flex items-center justify-center overflow-hidden">
              <Link href="#">
                <Image
                  src="/images/profileCompletion/Squircle Mask.png"
                  alt="Profile"
                  width={90}
                  height={90}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
          </div>

          <span className="absolute -bottom-1 bg-[#2050E4] text-white text-[6px] font-medium px-1.5 py-[2px] rounded-full shadow-sm leading-none">
            L - 4
          </span>
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;
