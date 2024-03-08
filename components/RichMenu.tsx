"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { data } from "../util/file";
export default function RichMenu() {
  const [menu, setMenu] = useState<number>(100);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Scrollbar]}
      spaceBetween={0}
      slidesPerView={"auto"}
      breakpoints={{
        780: {
          spaceBetween: 25,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          onClick={() => setMenu(item.id)}
          className="w-auto flex flex-col items-center  text-[#717171] px-4 pb-3 md:px-2  cursor-pointer group"
        >
          <div
            className={`group-hover:opacity-100    ${
              menu != item.id && "opacity-60"
            }`}
          >
            {item.img}
          </div>
          <p
            className={`text-xs text-center1 group-hover:text-black ${
              menu == item.id && "text-black"
            }`}
          >
            {item.name}
          </p>
          <hr
            className={`w-full border-[1.5px] border-black translate-y-[11px] opacity-0  lg:group-hover:opacity-20 ${
              menu == item.id && "opacity-100"
            }`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
