"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <section className="xl:mb-[100px]">
        <div className="h-[400px] xl:h-screen w-screen relative">
          <Image
            src={"/see_all_campush_hero.png"}
            height={1500}
            width={1500}
            alt="her"
            className="absolute top-0 left-0 w-screen h-[400px] xl:h-auto"
          />

          <h1 className="text-[25px] xl:text-[58px] font-[700px] absolute top-[55%] xl:top-[20%] left-0 w-full text-center z-20 text-white">
            See the campus
          </h1>
          <Link href="https://csi.edu.pk/contact-us">
            <button className="bg-white rounded-full px-10 py-2 text-black uppercase text-[20px] xl:text-[28px] font-[400] absolute left-20 z-20 top-[70%] xl:top-[90%]">
              Book A tour
            </button>
        </Link>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center w-full">
          <p style={{ color: 'black', fontSize: '24px' }}>Purpose Built Flagship Campus</p>
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
          <p className="hidden xl:block">
            Custom Made <br /> Learning Spaces
          </p>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-right hidden xl:block">
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
            <p className="text-left hidden xl:block">
              Specifically Designed to <br /> Facilitate Project Based <br />{" "}
              Learning
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-right hidden xl:block">
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
            <p className="text-left hidden xl:block">
              Expansive Outdoor <br /> Sports Facilities
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-right hidden xl:block">
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
            <p className="text-left hidden xl:block">
              Designed for the <br /> Needs of All Ages
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-right hidden xl:block">
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
            <p className="text-left hidden xl:block">
              Built to Ensure Low <br /> Student-Teacher Ratios
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-right hidden xl:block">
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
            <p className="text-left hidden xl:block">
              Made to Ensure <br />
              Student Comfort
            </p>
          </div>
        </div>
        <div className="flex px-[5%] gap-10">
          <div className="w-[40%] p-10">
            <p className="text-left hidden xl:block">
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
