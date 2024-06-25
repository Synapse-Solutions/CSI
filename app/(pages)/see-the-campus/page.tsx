"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <section className="mb-[400px]">
        <div className="h-screen w-screen relative">
          <Image
            src={"/see_all_campush_hero.png"}
            height={1500}
            width={1500}
            alt="her"
            className="absolute top-0 left-0 w-screen h-auto"
          />

          <h1 className="text-[58px] font-[700px] absolute top-[20%] left-0 w-full text-center z-20 text-white">
            See the campus
          </h1>
          <button className="bg-white rounded-full px-10 py-2 text-black uppercase text-[28] font-[400] absolute left-20 z-20 top-[90%]">
            Book A tour
          </button>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center w-full">
          <p>Purpose Built Flagship Campus</p>
          <Image
            src={"/VDO.png"}
            height={500}
            width={500}
            alt="vdo"
            className="object-contain mt-10"
          />
        </div>
      </section>
      <section className="text-[30px] text-black mt-10">
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/KI8A7197.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <p>
            Custom Made <br /> Learning Spaces
          </p>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-right">
              Designed with <br />
              Expertise and Experience
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_1.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/seecampus_2.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-[40%] p-10">
            <p className="text-left">
              Specifically Designed to <br /> Facilitate Project Based <br />{" "}
              Learning
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-right">
              Made to Facilitate Play <br /> Based Learning
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_3.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/seecampus_4.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-[40%] p-10">
            <p className="text-left">
              Expansive Outdoor <br /> Sports Facilities
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-right">
              Built to Make <br />
              Learning Interactive
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_5.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/seecampus_6.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-[40%] p-10">
            <p className="text-left">
              Designed for the <br /> Needs of All Ages
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-right">
              Created to Carry Out A <br /> Custom Sports Program
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_7.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/seecampus_8.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-[40%] p-10">
            <p className="text-left">
              Built to Ensure Low <br /> Student-Teacher Ratios
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-right">
              Featuring a Variety of <br /> Skill Specific <br />
              Learning Areas
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_9.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[60%]">
            <Image
              src={"/seecampus_10.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-[40%] p-10">
            <p className="text-left">
              Made to Ensure <br />
              Student Comfort
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-left">
              Designed to <br />
              Foster Collaboration
            </p>
          </div>
          <div className="w-[60%]">
            <Image
              src={"/seecampus_11.png"}
              height={500}
              width={500}
              alt="kids"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
