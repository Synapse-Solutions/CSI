import React from "react";
import "./HeroSection.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="image-wrap w-screen flex items-center justify-center h-[calc(50vh)] xl:h-[calc(100vh)] bg-black bg-opacity-75">
      <img src="/home_hero.png" className="animate_img" />
      <div className="absolute top-0 left-0 w-full flex h-full items-center justify-center">
        <div className="flex flex-col">
          <h1 className="text-[#028676] text-[25px] xl:text-[45px]">
            Knowledge, Action, Resolve
          </h1>{" "}
          <br />
          <Image
            src={"/urdu.webp"}
            height={1000}
            width={1000}
            alt="urdu"
            className="h-[30px] xl:h-[80px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
