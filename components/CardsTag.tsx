"use client";

import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/th";
dayjs.locale("th");

interface Props {
  item: {
    topic_id: number;
    title: string;
    name: string;
    message: number;
    popula: string;
    views_count: number;
    author: {
      avatar: {
        original: string;
      };
    };
    created_time: string;
  };
}
export default function CardsTag({ item }: Props) {
  return (
    <div className="relative bg-white grid grid-cols-3 p-4 rounded-xl shadow-lg overflow-hidden">
      <div className="col-span-2">
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src={item.author.avatar.original}
              alt="Vercel Logo"
              width={1000}
              height={1000}
              className="object-cover w-[100px] h-[100px] rounded-full"
            />
          </div>

          <p className=" text-base font-bold truncate">{item.title}</p>
          <p className="text-[#717171] text-xs truncate">{item.name}</p>
        </div>
      </div>
      <div className=" flex flex-col justify-between text-center text-xs ">
        <div>
          <p className="font-bold">{item.views_count}</p>
          <p className="text-gray-500">อ่าน</p>
        </div>
        <hr className="w-full" />
        <div>
          <p className="font-bold">{item.message}</p>
          <p className="text-gray-500">คอมเมนต์</p>
        </div>
        <hr className="w-full" />
        <div>
          <p className="font-bold">
            {dayjs(item.created_time).format("MMM YYYY")}
          </p>
          <p className="text-gray-500">สร้างเมื่อ</p>
        </div>
      </div>
      <div
        className={`absolute top-4 -left-10 px-12 py-1 -rotate-45 text-sm ${
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
    </div>
  );
}
