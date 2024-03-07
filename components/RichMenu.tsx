"use client";
import React from "react";
import Image from "next/image";
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
      spaceBetween={60}
      slidesPerView={"auto"}
      freeMode={true}
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          className="w-auto flex flex-col items-center max-md:w-10 text-[#717171]"
        >
          {item.img} {item.name}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
