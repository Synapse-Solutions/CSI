"use client";
import BirdCard from "@/app/sharecomponents/BirdCard";
import Navbar from "@/app/sharecomponents/Navbar";
import HeroSection from "@/app/sharecomponents/homeHeroSection/HeroSection";
import Swiper from "@/app/sharecomponents/swiper/Swiper";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeHoverIndex, setActiveHoverIndex] = useState<any>(0);

  function handleMouseEnterLast(index: number) {
    setActiveHoverIndex(index);
  }

  function handleMouseLeaveLast(event: any) {
    // const divElement = event.currentTarget.querySelector("div");
    // if (divElement) {
    //   divElement.classList.add("hidden");
    // }
  }
  return (
    <div className="text-black w-screen overflow-hidden">
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
      <div className="flex flex-col xl:flex-row bg-white overflow-visible relative">
        <div className="w-full xl:w-[30%] px-[5%] pt-[10%] text-black">
          <h1 className="font-bold text-[40px] ">The CSI Way</h1>
          <p>
            CSi’s Approach takes the best from international best practics,
            local expertise & the latest in research to deliver an education
            best suited for 21st century.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="w-[100%] xl:w-[70%] flex gap-10 mt-20 xl:z-10 "
        >
          <Swiper />
        </div>
        <div className="bg-[#EEEEEE] hidden xl:block w-screen h-[50%] absolute -bottom-[10%] left-0 z-0"></div>
      </div>
      <div className="w-full my-[150px] xl:mt-[15%]">
        <div className="h-auto w-[90vw] xl:w-[calc(70vw)] relative">
          <Image
            src={"/tree.webp"}
            height={1000}
            width={2000}
            className="h-auto w-full"
            alt="tree"
          />
          <div className="absolute top-[14%] xl:top-[18%] 2xl:top-[20%] left-[13%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div
              className="h-[150px] w-[150px] relative"
              onMouseEnter={() => handleMouseEnterLast(1)}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div
                className={`absolute -top-[180px]  xl:-top-[280px] left-0 xl:left-[50px] w-[400px] ${
                  activeHoverIndex === 1 ? "block" : "hidden"
                }`}
              >
                <BirdCard title="CSI Eagles" image="vector_1" />
                {/* <Link href={"/robins"}>
                  <Image
                    src={"/Frame-2.png"}
                    height={500}
                    width={500}
                    className="cursor-pointer h-[150px] xl:h-[230px] w-auto xl:w-[400px] object-contain"
                    alt="02"
                  />
                </Link> */}
              </div>
              <h1 className="absolute top-0 -left-5 xl:-left-[60px]  text-black font-bold text-[12px] xl:text-[20px]">
                CSI Eagles
              </h1>
              <Image
                src={"/02.webp"}
                height={150}
                width={150}
                className="h-[50px] xl:h-[150px] w-auto object-contain cursor-pointer"
                alt="02"
              />
            </div>
          </div>
          <div className="absolute top-[25%] xl:top-[32%] left-[43%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div
              className="h-[150px] w-[150px] relative"
              onMouseEnter={() => handleMouseEnterLast(2)}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div
                className={`absolute -top-[180px]  xl:-top-[280px] -left-[50px] xl:left-[50px] w-[400px] ${
                  activeHoverIndex === 2 ? "block" : "hidden"
                }`}
              >
                <BirdCard title="CSI Larks" image="vector_2" />
                {/* <Link href={"/robins"}>
                  <Image
                    src={"/Frame.png"}
                    height={500}
                    width={500}
                    className="cursor-pointer h-[150px] xl:h-[230px] w-auto xl:w-[400px] object-contain"
                    alt="02"
                  />
                </Link> */}
              </div>
              <h1 className="absolute top-0 -left-[30px]  text-black font-bold text-[12px] xl:text-[20px]">
                CSI Larks
              </h1>
              <Image
                src={"/01.webp"}
                height={120}
                width={120}
                className="h-[50px] xl:h-[120px] w-auto object-contain cursor-pointer"
                alt="02"
              />
            </div>
          </div>
          <div className="absolute top-[45%] xl:top-[60%]  h-[100px] w-[150px]  left-[38%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div
              className="h-[100px] w-[150px] relative"
              onMouseEnter={() => handleMouseEnterLast(3)}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div
                className={`absolute z-20 -top-[150px] xl:-top-[280px] -left-[50px] xl:left-[50px] w-[400px] ${
                  activeHoverIndex === 3 ? "block" : "hidden"
                }`}
              >
                <BirdCard title="CSI Sparrows" image="vector_3" />
                {/* <Link href={"/robins"}>
                  <Image
                    src={"/Frame-1.png"}
                    height={500}
                    width={500}
                    className="cursor-pointer h-[150px] xl:h-[230px] w-auto xl:w-[400px] object-contain"
                    alt="02"
                  />
                </Link> */}
              </div>

              <Image
                src={"/04.webp"}
                height={100}
                width={100}
                className="h-[50px] xl:h-[100px] w-auto object-contain cursor-pointer"
                alt="02"
              />
              <h1 className="  text-black font-bold text-[12px] xl:text-[17px]">
                CSI Sparrows
              </h1>
            </div>
          </div>
          <div className="absolute top-[30%] xl:top-[47%] left-[65%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div
              className="h-[150px] w-[150px] relative"
              onMouseEnter={() => handleMouseEnterLast(4)}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div
                className={`absolute -top-[150px] xl:-top-[280px] -left-[150px] xl:left-[50px] w-[400px] ${
                  activeHoverIndex === 4 ? "block" : "hidden"
                }`}
              >
                <BirdCard title=" CSI Robins" image="vector_4" />
                {/* <Link href={"/robins"}>
                  <Image
                    src={"/frame_93.webp"}
                    height={500}
                    width={500}
                    className="cursor-pointer h-[150px] xl:h-[230px] w-auto xl:w-[400px] object-contain"
                    alt="02"
                  />
                </Link> */}
              </div>
              <h1 className="  text-black font-bold text-[12px] xl:text-[20px]">
                CSI Robins
              </h1>
              <Image
                src={"/03.webp"}
                height={80}
                width={80}
                className="h-[50px] xl:h-[80px] w-auto object-contain cursor-pointer"
                alt="02"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
