"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { data } from "./file";
export default function RichMenu() {
  const [menu, setMenu] = useState<number>(100);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, FreeMode]}
      spaceBetween={0}
      slidesPerView={"auto"}
      freeMode={true}
      breakpoints={{
        780: {
          spaceBetween: 60,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          onClick={() => setMenu(item.id)}
          className="w-auto flex flex-col items-center  text-[#717171] px-4 max-md:pb-3 md:p-2"
        >
          <div className={`${menu != item.id && "opacity-60"}`}>{item.img}</div>
          <p
            className={`max-md:text-xs text-center1 ${
              menu == item.id && "text-black"
            }`}
          >
            {item.name}
          </p>
          {menu == item.id && (
            <hr
              className={`w-full border-[1.5px] border-black translate-y-[11px] md:translate-y-[8px]`}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
