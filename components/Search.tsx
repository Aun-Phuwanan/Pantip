"use client";
import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function Navbar({ scrollY }: { scrollY: number }) {
  return (
    <>
      <div
        className={`hidden md:flex lg:justify-center duration-300 px-6 md:px-32 lg:px-48 ${
          scrollY > 0 ? "mt-[-65px] max-lg:ml-12" : "max-lg:mt-10 lg:mt-0"
        }`}
      >
        <Input
          size={scrollY > 0 ? "middle" : "large"}
          placeholder="ค้นหาบน Pantip"
          suffix={
            <div
              className={`bg-[#FF385C] rounded-[99px] ${
                scrollY > 0 ? "px-[12px] py-2" : "px-[14px] py-3"
              }`}
            >
              <SearchOutlined
                style={{
                  fontSize: scrollY > 0 ? "15px" : "24px",
                  color: "white",
                }}
              />
            </div>
          }
          className={`rounded-[99px] shadow-md border focus:border-[#d9d9d9] pl-8 duration-300 ${
            scrollY > 0 ? "w-[250px]" : "w-full"
          }`}
        />
      </div>

      <div className={`md:hidden px-6 pt-5`}>
        <Input
          size={"middle"}
          placeholder="ค้นหาบน Pantip"
          suffix={
            <div className={`bg-[#FF385C] rounded-[99px] px-[12px] py-2`}>
              <SearchOutlined
                style={{
                  fontSize: "15px",
                  color: "white",
                }}
              />
            </div>
          }
          className={`rounded-[99px] shadow-md border focus:border-[#d9d9d9] pl-8 duration-300 w-full`}
        />
      </div>
    </>
  );
}
