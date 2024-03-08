"use client";

import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/th";
dayjs.locale("th");

interface Props {
  item: {
    topic_id: number;
    title: string;
    content: string;
    views_count: number;
    message: number;
    author: {
      avatar: {
        original: string;
      };
    };
    created_time: string;
  };
}
export default function CardTopics({ item }: Props) {
  return (
    <div className="bg-white grid grid-cols-12 h-[88px] rounded-lg overflow-hidden border shadow-lg">
      <div className="col-span-3 lg:col-span-2">
        <Image
          src={item.author.avatar.original}
          alt="Vercel Logo"
          width={1000}
          height={1000}
          className="object-cover w-full h-[88px]"
        />
      </div>
      <div className="col-span-6 lg:col-span-8 flex justify-center items-center p-4">
        <p className="text-sm font-medium text-[#222222] truncate">
          {item.title}
        </p>
      </div>
      <div className="col-span-3 lg:col-span-2 flex flex-col justify-between text-center text-xs p-2">
        <div>
          <p className="font-bold">{item.views_count}</p>
          <p className="text-gray-500">อ่าน</p>
        </div>
        <hr className="w-full" />
        <div>
          <p className="font-bold">{item.message}</p>
          <p className="text-gray-500">คอมเมนต์</p>
        </div>
      </div>
    </div>
  );
}
