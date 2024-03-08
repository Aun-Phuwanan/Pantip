"use client";
import Image from "next/image";
import { topics } from "@/util/file";
import dayjs from "dayjs";
import "dayjs/locale/th";
import { useEffect, useState } from "react";
import Cards from "@/components/Cards";
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
          <Cards item={item}>
            {item.popula && (
              <div className="absolute bg-gray-200 top-4 left-4 rounded-[99px] px-4 py-2">
                ยอดนิยม
              </div>
            )}
          </Cards>
        </div>
      ))}
    </main>
  );
}
