"use client";

import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/th";
dayjs.locale("th");

export default function Cards({ item, children }: any) {
  return (
    <>
      <div className="relative w-full mb-4">
        <Image
          src={item.author.avatar.original}
          alt="Vercel Logo"
          width={1000}
          height={1000}
          className="object-cover h-[324px] md:h-[351px] lg:h-[270px] xl:h-[354px]  rounded-xl"
        />
        {children}
      </div>
      <p className=" truncate">{item.title}</p>
      <p className="text-[#717171] truncate">{item.content}</p>
      <p className="text-[#717171]">
        {dayjs(item.created_time).format("MMM YYYY")}
      </p>
    </>
  );
}
