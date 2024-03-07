"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { data } from "./file";
export default function RichMenu() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, FreeMode]}
      spaceBetween={30}
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
          className="w-auto flex flex-col items-center max-md:w-10 text-[#717171]"
        >
          {item.img}
          <p className="max-md:text-xs text-center">{item.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
