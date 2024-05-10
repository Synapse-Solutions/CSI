"use client";
import Image from "next/image";
import React, { use, useEffect } from "react";

interface Props {
  rightSideCard?: boolean;
  title: string;
  description: string;
}
export default function ServicesCard({
  rightSideCard,
  title,
  description,
}: Props) {
  return (
    <div
      data-aos={!rightSideCard ? "fade-right" : "fade-left"}
      className=" w-[calc(90vw)] md:w-[calc(35vw)] xl:w-[calc(50vw)] 2xl:w-[calc(38vw)] px-10 py-10 relative xl:h-[calc(52vh)] 2xl:h-[calc(30vh)] text-center"
    >
      <h1 className="text-[32px] font-bold text-[#355496]">{title}</h1>
      <p className="text-[22px] mt-7">{description}</p>
    </div>
  );
}
