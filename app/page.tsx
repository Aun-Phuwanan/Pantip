"use client";
import Image from "next/image";
import { topics } from "@/components/file";
import dayjs from "dayjs";
import "dayjs/locale/th";
import { useEffect, useState } from "react";
dayjs.locale("th");

export default function Home() {
  const [scrollY, setScrollY] = useState<number>(0);

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
    <main
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 px-6 md:px-20 pb-20 md:py-6 ${
        scrollY > 0 ? "md:mt-[140px] md:-translate-y-28 max-md:pt-6" : "pt-6"
      }`}
    >
      {topics.map((item, index) => (
        <div key={index}>
          <div className="relative w-full mb-4">
            <Image
              src={item.author.avatar.original}
              alt="Vercel Logo"
              width={1000}
              height={1000}
              className="object-cover h-[324px] md:h-[351px] lg:h-[270px] xl:h-[354px]  rounded-xl"
            />
            {item.popula && (
              <div className="absolute bg-gray-200 top-4 left-4 rounded-[99px] px-4 py-2">
                ยอดนิยม
              </div>
            )}
          </div>
          <p className=" truncate">{item.title}</p>
          <p className="text-[#717171] truncate">{item.content}</p>
          <p className="text-[#717171]">
            {dayjs(item.created_time).format("MMM YYYY")}
          </p>
        </div>
      ))}
    </main>
  );
}
