"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { HomeOutlined, LikeOutlined } from "@ant-design/icons";
import SearchMD from "./Search";
import RichMenu from "./RichMenu";

const items: MenuProps["items"] = [
  {
    label: "ลงทะเบียน",
    key: "0",
  },
  {
    label: "เข้าสู่ระบบ",
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "ตั้งกระทู้",
    key: "3",
  },
  {
    label: "คอมมูนิตี้",
    key: "4",
  },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-white sticky top-0 w-full z-30 shadow">
        <div className="max-md:hidden flex items-center justify-between h-20 px-20">
          <div className="relative w-[80px] h-[44.56px] z-40">
            <Image src="/logo.png" alt="Vercel Logo" fill />
          </div>
          <div
            className={`max-lg:absolute top-0 left-0 bg-white max-lg:w-full 
            flex items-center max-lg:justify-center text-[#717171] 
            translate-y-0 duration-300
            ${
              scrollY > 0
                ? "text-[0px] translate-y-0"
                : "text-bas  max-lg:translate-y-20"
            }
            `}
          >
            <button className="p-2 text-[#222222]">หน้าแรก</button>
            <button className="p-2">My Feed</button>
            <button className="p-2">Pantip Pick</button>
            <button className="p-2">Pantip Hitz</button>
            <button className="p-2">Explore</button>
          </div>

          <div className=" relative z-40 flex items-center gap-x-5 text-[#222222] text-sm">
            <span>คอมมูนิตี้</span>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a>
                <Space className="flex items-center gap-x-4 border rounded-[99px] p-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className="block fill-none h-4 w-4 stroke-[currentcolor] stroke-[3] overflow-visible"
                  >
                    <g fill="none">
                      <path d="M2 16h28M2 24h28M2 8h28"></path>
                    </g>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className="block h-[32px] w-[32px] text-[#717171] fill-[currentcolor]"
                  >
                    <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
                  </svg>
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <SearchMD scrollY={scrollY} />
        <hr className="my-5 max-md:hidden" />
        <div className="px-6 md:px-20 pt-4 md:pt-0 md:pb-4 w-full">
          <RichMenu />
        </div>
      </div>

      <div className="bg-[#FFFFFF] fixed w-full bottom-0 py-3 border-t z-30 md:hidden">
        <div className="mx-[45px]">
          <div className="flex justify-center gap-x-10">
            <div className="flex flex-col items-center justify-center gap-1">
              <HomeOutlined style={{ fontSize: "24px", color: "#e81948" }} />
              <p className="text-[#e81948] text-[10px]">หน้าหลัก</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <LikeOutlined style={{ fontSize: "24px", color: "#717171" }} />
              <p className="text-[#717171] text-[10px]">Pantip Pick</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="block h-[24px] w-[24px] text-[#717171] fill-[currentcolor]"
              >
                <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
              </svg>
              <p className="text-[#717171] text-[10px]">เข้าสู่ระบบ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
