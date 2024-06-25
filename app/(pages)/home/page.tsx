"use client";
import HomePageCard from "@/app/sharecomponents/HomePageCard";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import HeroSection from "@/app/sharecomponents/homeHeroSection/HeroSection";
import Swiper from "@/app/sharecomponents/swiper/Swiper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeHoverIndex, setActiveHoverIndex] = useState<any>(0);

  function handleMouseEnterLast(index: number) {
    setActiveHoverIndex(index);
  }
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  function handleMouseLeaveLast(event: any) {
    setActiveHoverIndex(null);
    // const divElement = event.currentTarget.querySelector("div");
    // if (divElement) {
    //   divElement.classList.add("hidden");
    // }
  }
  return (
    <div className="text-black w-screen overflow-hidden">
      <Navbar />
      <div className="relative z-10"></div>
      <header className="relative">
        <HeroSection />
        <Image
          src={"/color-bar.png"}
          height={100}
          width={2000}
          className="hidden md:block h-[50px] w-screen"
          alt="bar"
        />
        <a
          href="https://summerscsi.com/"
          target="_blank"
          className="hidden md:block"
        >
          <button className="bg-[#028676] rounded-full px-10 py-5 text-white absolute bottom-5 right-10">
            Join Our Summer Camp!
          </button>
        </a>
      </header>
      <main className="flex flex-col xl:flex-row bg-white overflow-visible relative">
        <aside className="text-center px-[15%] md:text-start w-full xl:w-[30%] md:px-[5%] pt-[10%] text-black">
          <section>
            <h1 className="font-bold text-[20px] md:text-[40px] ">
              The CSI Way
            </h1>
            <p className="text-[14px] md:text-[18px]">
              CSi’s Approach takes the best from international best practics,
              local expertise & the latest in research to deliver an education
              best suited for 21st century.
            </p>
          </section>
        </aside>
        <section
          ref={scrollRef}
          className="w-[100%] xl:w-[70%] flex gap-10 md:mt-20 xl:z-10 "
        >
          <Swiper />
        </section>
        <div className="bg-[#EEEEEE] hidden xl:block w-screen h-[50%] absolute -bottom-[10%] left-0 z-0"></div>
      </main>
      <section className="w-full my-[80px] md:my-[150px] xl:mt-[15%]">
        <div className="h-auto w-[100vw] xl:w-[calc(100vw)] relative">
          <Image
            src={"/section001.png"}
            height={1000}
            width={2000}
            className="h-auto w-full"
            alt="tree-of-programs"
          />
          <div className="absolute top-[35%] left-[40%]  lg:left-[43%] text-[15px] md:text-[32px] lg:text-[45px] font-bold text-center">
            <h4>
              The CSI <br />
              Advantage
            </h4>
          </div>
          <div className="absolute top-[35%] left-[4%] md:left-[13%] cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div
              className="h-[150px] w-[150px] relative"
              onMouseEnter={() => handleMouseEnterLast(1)}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div
                className={`absolute -top-[180px]  xl:-top-[280px] -left-[30px] xl:left-[50px] w-[400px] ${
                  activeHoverIndex === 1 ? "block" : "hidden"
                }`}
              >
                <HomePageCard
                  onClickCross={() => setActiveHoverIndex(null)}
                  title="Habits of Thought"
                  bgColor="bg-[#00889C]"
                  description="A critical aspect of a holistic education is inculcating ways of thinking which allow an individual to effectively capitalize on opportunities and meet challenges. At CSI our entire approach is geared towards cultivating habits of thought which are dynamic, based in critical thinking and adaptive."
                  image="habits_bg"
                  link="/eagles"
                />
              </div>
              <h1 className="text-[#355496]   font-bold text-[20x] xl:text-[36px] w-[180px]">
                Habits of Thought
              </h1>
            </div>
          </div>

          <div className="absolute top-[80%] h-[100px] w-[150px] right-[8%] md:right-[38%] cursor-pointer hover:scale-110 duration-300 ease-in-out z-20">
            <div
              className="h-[100px] w-[150px] relative"
              onMouseEnter={() => handleMouseEnterLast(3)}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div
                className={`absolute z-20 -top-[150px] xl:-top-[280px] xl:-right-[80px] w-[400px] ${
                  activeHoverIndex === 3 ? "block" : "hidden"
                }`}
              >
                <HomePageCard
                  onClickCross={() => setActiveHoverIndex(null)}
                  title="Critical Competencies"
                  bgColor="bg-[#0086B7]"
                  image="cretical_bg"
                  link="/sparrows"
                  description="At CSI, we emphasize essential skills that prepare students for success in a complex world. Our students develop strong problem-solving abilities, learning to analyze situations and find effective solutions."
                />
              </div>

              <h1 className="text-[#1F4694] font-bold text-[20x] xl:text-[36px]">
                Critical <br />
                Competencies
              </h1>
            </div>
          </div>
          <div className="absolute top-[38%] left-[75%] md:left[0%] md:right-[10%] cursor-pointer hover:scale-110 duration-300 ease-in-out z-10">
            <div
              className="h-[150px] w-[150px] relative"
              onMouseEnter={() => handleMouseEnterLast(4)}
              onMouseLeave={handleMouseLeaveLast}
            >
              <div
                className={`absolute -top-[150px] xl:-top-[280px]  xl:right-[100px] w-[400px] ${
                  activeHoverIndex === 4 ? "block" : "hidden"
                }`}
              >
                <HomePageCard
                  onClickCross={() => setActiveHoverIndex(null)}
                  title="Outlook"
                  bgColor="bg-[#00889C]"
                  description="At CSI, we cultivate a positive, forward-thinking mindset. Our students learn to view challenges as opportunities, set ambitious goals, and stay motivated. This proactive outlook, combined with empathy and social responsibility, prepares them for personal success!"
                  image="outlook_bg"
                  link="/robins"
                />
              </div>
              <h1 className="  text-[#1F4694] font-bold text-[20x] xl:text-[36px]">
                Outlook
              </h1>
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
