"use client";
import BirdCard from "@/app/sharecomponents/BirdCard";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import HeroSection from "@/app/sharecomponents/homeHeroSection/HeroSection";
import Swiper from "@/app/sharecomponents/swiper/Swiper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StarsCard from "@/app/sharecomponents/StarsCard";

export default function Page() {
  const [activeHoverIndex, setActiveHoverIndex] = useState<any>(0);

  function handleMouseEnterLast(index: any) {
    setActiveHoverIndex(index);
  }
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="text-black w-screen overflow-hidden">
      <Navbar />
      <div className="relative z-10"></div>
      <section className="flex justify-center items-center h-2/5 md:h-screen pt-10 md:mt-0 md:p-20">
        <div className="w-1/2 flex justify-center md:justify-end md:mt-0 ">
          <Image
            data-aos="fade-right"
            src={"/our-heart.webp"}
            height={1000}
            width={1000}
            className="object-contain w-[80%] h-[calc(60vh)] pt-10 md:pt-0"
            alt="leaf"
          />
        </div>
        <div data-aos="fade-left" className="w-3/5 mr-4 md:mr-0 md:w-1/2">
          <h4 className="text-[30px] md:text-[40px] font-semibold">
            Our Heart
          </h4>
          <p className="text-[12px] md:text-[16px] mb-4 mt-4 md:mb-0">
            Central School International (CSI) is a Pan-Pakistan School Network
            which provides an education rooted in research, international best
            practices, and values.
          </p>
          <p className="text-[12px] md:text-[16px]">
            Our academic and extended learning programs ensure that our students
            develop the knowledge base, skills, and character traits needed to
            succeed in todays global age.
          </p>
        </div>
      </section>
      <section className="bg-[#1f4694] px-[5%] py-[5%] text-white pb-[15%] ">
        <h4 className="text-center font-bold md:font-normal md:text-left ">
          Our Guiding Principles
        </h4>
        <div className="flex flex-col md:flex-row w-full md:justify-between">
          <div className="md:w-[33%] ">
            <Image
              src={"/elam.webp"}
              height={500}
              width={500}
              alt="elam"
              className="w-full h-auto object-contain"
            />
            <div className=" px-[45px]">
              <div className=" justify-center md:justify-normal flex items-center gap-2">
                <p className=" text-[28px]">Knowledge</p>
                <Image
                  src={"/elam_text.webp"}
                  height={40}
                  width={40}
                  alt="elam"
                />
              </div>
              <p className="text-center md:text-left mt-3">
                Exploring the infinite potential of the human mind and spirit
              </p>
            </div>
          </div>
          <div className="md:w-[33%]">
            <Image
              src={"/amal.webp"}
              height={500}
              width={500}
              alt="elam"
              className="w-full h-auto object-contain"
            />
            <div className="px-[45px]">
              <div className="justify-center md:justify-normal flex items-center gap-2">
                <p className="text-[28px]">Action</p>
                <Image
                  src={"/amal_text.webp"}
                  height={40}
                  width={40}
                  alt="elam"
                />
              </div>
              <p className="text-center md:text-left mt-3">
                Taking meaningful actions in the pursuit of one’s goals
              </p>
            </div>
          </div>
          <div className="md:w-[33%]">
            <Image
              src={"/azam.webp"}
              height={500}
              width={500}
              alt="elam"
              className="w-full h-auto object-contain"
            />
            <div className="px-[45px]">
              <div className="justify-center md:justify-normal flex items-center gap-2">
                <p className="text-[28px]">Resolve</p>
                <Image
                  src={"/azam_text.webp"}
                  height={40}
                  width={40}
                  alt="elam"
                />
              </div>
              <p className="text-center md:text-left mt-3">
                Fostering nobility and strength of character, providing a sense
                of grounding
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center md:text-start text-[18px] md:text-[35px] font-bold mt-20 ">
            CSI’s Constellation of Character
          </h3>
          <p className="mx-5 text-center md:text-start ml-10 md:ml-0 md:mx-0">
            CSI seeks to include the following constellation of values in all of
            our students.
          </p>
          <div className="w-full relative">
            <Image
              src={"/Stars-bg.webp"}
              alt="stars"
              height={1000}
              width={1000}
              className="w-screen h-auto object-contain"
            />
            <div className="absolute top-[25%] right-[23%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(1)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] right-[-150px] z-20 xl:right-[120px] w-[400px] ${
                    activeHoverIndex === 1 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Honour"
                    bgColor="bg-[#00889C]"
                    description="Honour in being kind, honour in affirming human dignity, honour in lifelong learning, the students of CSI derive a sense of honour from being the best versions of themselves."
                    image="honour_bgCard"
                    link="/eagles"
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Honour
                </h1>
              </div>
            </div>
            <div className="absolute top-[32%] right-[3%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(2)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] right-[-0px] xl:right-[120px] w-[400px] ${
                    activeHoverIndex === 2 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Respect​"
                    bgColor="bg-[#00889C]"
                    description="Respect for themselves, respect for those around them, respect for their beliefs, respect for the environment and respect for their communities. The students of CSI remain in respect of the things which hold the most value."
                    image="honour_bgCard"
                    link="/eagles"
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Respect
                </h1>
              </div>
            </div>
            <div className="absolute top-[48%] left-[33%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(3)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] right-[-120px] z-20 xl:-right-[70px] w-[400px] ${
                    activeHoverIndex === 3 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Balance"
                    bgColor="bg-[#00889C]"
                    description="Aware of the importance of maintaining a balanced proportion between the many facets of life, the students of CSI value proportionality. This extends to maintaining a harmony between their health and studies, their ambitions and values, action and reflection."
                    image="balance_starbg"
                    link="/eagles"
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Balance
                </h1>
              </div>
            </div>
            <div className="absolute top-[65%] left-[10%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(4)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] left-[-30px] xl:left-[20px] w-[400px] ${
                    activeHoverIndex === 4 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Empathy"
                    bgColor="bg-[#00889C]"
                    description="Compassionate, caring, empathetic and deeply committed to helping others, the students of CSI see themselves as part of a shared humanity with those around them and those around the world. "
                    image="empath_starbg"
                    link="/eagles"
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Empathy
                </h1>
              </div>
            </div>
            <div className="absolute top-[60%] left-[40%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(5)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] -right-[100px] xl:-right-[70px] w-[400px] ${
                    activeHoverIndex === 5 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Conviction"
                    bgColor="bg-[#00889C]"
                    description="Compassionate, caring, empathetic and deeply committed to helping others, the students of CSI see themselves as part of a shared humanity with those around them and those around the world. "
                    image="balance_starbg"
                    link="/eagles"
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Conviction
                </h1>
              </div>
            </div>
            <div className="absolute top-[70%] right-[30%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(6)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] -right-[120px] xl:-right-[70px] w-[400px] ${
                    activeHoverIndex === 6 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Identity"
                    bgColor="bg-[#00889C]"
                    description="Compassionate, caring, empathetic and deeply committed to helping others, the students of CSI see themselves as part of a shared humanity with those around them and those around the world. "
                    image="balance_starbg"
                    link="/eagles"
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Identity
                </h1>
              </div>
            </div>
            <div className="absolute top-[50%] right-[10%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
              <div
                className="h-[150px] w-[150px] relative"
                onMouseEnter={() => handleMouseEnterLast(7)}
                onMouseLeave={() => handleMouseEnterLast(null)}
              >
                <div
                  className={`absolute -top-[180px]  xl:-top-[280px] -right-[70px] w-[400px] ${
                    activeHoverIndex === 7 ? "block" : "hidden"
                  }`}
                >
                  <StarsCard
                    onClickCross={() => setActiveHoverIndex(null)}
                    title="Positivity"
                    bgColor="bg-[#00889C]"
                    description="Compassionate, caring, empathetic and deeply committed to helping others, the students of CSI see themselves as part of a shared humanity with those around them and those around the world. "
                    image="balance_starbg"
                    link="/eagles"
                  />
                </div>
                <h1 className="text-[#fff] uppercase  font-bold text-[12px] xl:text-[20px]">
                  Positivity
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-[10px]">
        <Footer />
      </footer>
    </div>
  );
}
