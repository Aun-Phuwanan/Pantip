"use client";
import Image from "next/image";
import { announce } from "@/util/announce";
import Cards from "@/components/Cards";
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
      className={`px-6 md:px-20 pb-20 md:py-6 ${
        scrollY > 0 ? "md:mt-[140px] md:-translate-y-28 max-md:pt-6" : "pt-6"
      }`}
    >
      <p className="text-[#222222] text-[26px] font-semibold">Announce</p>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 `}
      >
        {announce.map((item, index) => (
          <div key={index}>
            <Cards item={item}>
              <div
                className={`absolute bg-gray-200 top-4 left-4 rounded-[99px] px-4 py-2 ${
                  item.popula == "Announce"
                    ? "bg-[#388e3c] text-white"
                    : item.popula == "Highlight"
                    ? "bg-[#ff9800] text-white"
                    : item.popula == "Activity"
                    ? "bg-[#5c6bc0] text-white"
                    : "bg-gray-200"
                }`}
              >
                {item.popula}
              </div>
            </Cards>
          </div>
        ))}
      </div>
      <p className="text-[#222222] text-[26px] font-semibold">
        กระทู้แนะนำโดยสมาชิก
      </p>
    </main>
  );
}
