"use client";
import Navbar from "@/app/sharecomponents/Navbar";
import HeroSection from "@/app/sharecomponents/homeHeroSection/HeroSection";
import Swiper from "@/app/sharecomponents/swiper/Swiper";
import Image from "next/image";
import React from "react";

export default function Home() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  function handleMouseEnter(event: any) {
    const h1Element = event.currentTarget.querySelector("h1");
    if (h1Element) {
      h1Element.style.opacity = "1";
    }
  }

  function handleMouseLeave(event: any) {
    const h1Element = event.currentTarget.querySelector("h1");
    if (h1Element) {
      h1Element.style.opacity = "0";
    }
  }
  function handleMouseEnterLast(event: any) {
    const divElement = event.currentTarget.querySelector("div");
    if (divElement) {
      divElement.classList.remove("hidden");
    }
  }

  function handleMouseLeaveLast(event: any) {
    const divElement = event.currentTarget.querySelector("div");
    if (divElement) {
      divElement.classList.add("hidden");
    }
  }
  return (
    <div>
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
      </div>
      <Image
        src={"/color_bar.webp"}
        height={100}
        width={2000}
        className="h-[50px] w-screen"
        alt="bar"
      />
      <div className="flex bg-white overflow-visible relative">
        <div className="w-[30%] px-[5%] pt-[10%]">
          <h1 className="font-bold text-[40px] ">The CSI Way</h1>
          <p>
            CSi’s Approach takes the best from international best practics,
            local expertise & the latest in research to deliver an education
            best suited for 21st century.
          </p>
        </div>
        <div ref={scrollRef} className="w-[70%] flex gap-10 mt-20 z-10 ">
          <Swiper />
        </div>
        <div className="bg-[#EEEEEE] w-screen h-[50%] absolute -bottom-[10%] left-0 z-0"></div>
      </div>
      <div className="w-full mt-[15%]">
        <div className="h-auto w-[calc(70vw)] relative">
          <Image
            src={"/tree.webp"}
            height={1000}
            width={2000}
            className="h-auto w-full"
            alt="tree"
          />
          <div className="absolute top-[14%] left-[13%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div
              className="h-[150px] w-[150px] relative"
              onMouseEnter={handleMouseEnterLast}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div className="absolute -top-[280px] left-[50px] w-[400px] hidden">
                <Image
                  src={"/Frame-2.png"}
                  height={500}
                  width={500}
                  className="cursor-pointer h-[230px] w-[400px] object-contain"
                  alt="02"
                />
              </div>
              <h1 className="absolute top-0 -left-[60px]  text-black font-bold text-[20px]">
                CSI Eagles
              </h1>
              <Image
                src={"/02.webp"}
                height={150}
                width={150}
                className="cursor-pointer"
                alt="02"
              />
            </div>
          </div>
          <div className="absolute top-[32%] left-[43%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div
              className="h-[150px] w-[150px] relative"
              onMouseEnter={handleMouseEnterLast}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div className="absolute -top-[280px] left-[50px] w-[400px] hidden">
                <Image
                  src={"/Frame.png"}
                  height={500}
                  width={500}
                  className="cursor-pointer h-[230px] w-[400px] object-contain"
                  alt="02"
                />
              </div>
              <h1 className="absolute top-0 -left-[30px]  text-black font-bold text-[20px]">
                CSI Larks
              </h1>
              <Image
                src={"/01.webp"}
                height={120}
                width={120}
                className="cursor-pointer"
                alt="02"
              />
            </div>
          </div>
          <div className="absolute top-[64%]  h-[100px] w-[150px]  left-[38%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div
              className="h-[100px] w-[150px] relative"
              onMouseEnter={handleMouseEnterLast}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div className="absolute -top-[280px] left-[50px] w-[400px] hidden">
                <Image
                  src={"/Frame-1.png"}
                  height={500}
                  width={500}
                  className="cursor-pointer h-[230px] w-[400px] object-contain"
                  alt="02"
                />
              </div>

              <Image
                src={"/04.webp"}
                height={100}
                width={100}
                className="cursor-pointer"
                alt="02"
              />
              <h1 className="  text-black font-bold text-[17px]">
                CSI Sparrows
              </h1>
            </div>
          </div>
          <div className="absolute top-[47%] left-[65%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div
              className="h-[150px] w-[150px] relative"
              onMouseEnter={handleMouseEnterLast}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div className="absolute -top-[280px] left-[50px] w-[400px] hidden">
                <Image
                  src={"/frame_93.webp"}
                  height={500}
                  width={500}
                  className="cursor-pointer h-[230px] w-[400px] object-contain"
                  alt="02"
                />
              </div>
              <h1 className="  text-black font-bold text-[20px]">CSI Larks</h1>
              <Image
                src={"/03.webp"}
                height={80}
                width={80}
                className="cursor-pointer"
                alt="02"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
