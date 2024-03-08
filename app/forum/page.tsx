"use client";
import { announce } from "@/util/announce";
import { topics } from "@/util/topics-recommend";
import Image from "next/image";
import Cards from "@/components/Cards";
import Title from "@/components/Title";
import dayjs from "dayjs";
import "dayjs/locale/th";
import { useEffect, useState } from "react";
import CardsTag from "@/components/CardsTag";
import CardTopics from "@/components/CardTopics";
dayjs.locale("th");

export default function Home() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [topic, setTopic] = useState<boolean>(true);

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
      <Title text={"Announce"} />
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 `}
      >
        {announce.map((item, index) => (
          <div key={index}>
            <CardsTag item={item} />
          </div>
        ))}
      </div>
      <hr className="w-full my-6" />
      <div className="bg-[#f0efe9] p-4 rounded-lg space-y-4">
        <div className="flex justify-center">
          <div className="bg-white text-[#222222] flex rounded-full overflow-hidden">
            <button
              onClick={() => setTopic(true)}
              className={`text-sm font-semibold px-4 py-2 rounded-full ${
                topic && "text-white bg-[#222222] rounded-full"
              }`}
            >
              กระทู้แนะนำโดยสมาชิก
            </button>
            <button
              onClick={() => setTopic(false)}
              className={`text-sm font-semibold px-4 py-2 rounded-full ${
                !topic && "text-white bg-[#222222] rounded-full"
              }`}
            >
              Pantip Trend
            </button>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4`}
        >
          {topics.map((item, index) => (
            <div key={index}>
              <CardTopics item={item} />
            </div>
          ))}
        </div>
        {/* <div
            className={`grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10`}
          >
            {topics.map((item, index) => (
              <div key={index}>
                <Cards item={item}>
                  <div
                    className={`absolute top-4 right-4 rounded-[99px] px-4 py-2 text-gray-200`}
                  >
                    {item.message}
                  </div>
                </Cards>
              </div>
            ))}
          </div> */}
      </div>
    </main>
  );
}
