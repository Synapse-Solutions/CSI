"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React, { useRef } from "react";

const array = [
  {
    image: "/s1.webp",
    title: " CEO",
  },
  {
    image: "/s2.webp",
    title: " Entrepreneur",
  },
  {
    image: "/s3.webp",
    title: " Journalist",
  },
  {
    image: "/s4.webp",
    title: " Creative",
  },
  {
    image: "/s5.webp",
    title: " Philanthropist",
  },
  {
    image: "/s6.webp",
    title: " Chef",
  },
];
const array_one = [
  {
    image: "/p2_1.webp",
    title: "Culinary Arts",
  },
  {
    image: "/p2_2.webp",
    title: "Mindful Gardening",
  },
  {
    image: "/p2_3.webp",
    title: "Pottery",
  },
  {
    image: "/p2_4.webp",
    title: "Stargazing",
  },
  {
    image: "/p2_5.webp",
    title: "Yoga",
  },
  {
    image: "/p2_6.webp",
    title: "Meditation",
  },
  {
    image: "/p2_7.webp",
    title: "Calligraphy",
  },
  {
    image: "/p2_8.webp",
    title: "Drama",
  },
];
const array_two = [
  {
    image: "/p3_01.webp",
    title: "Swimming",
  },
  {
    image: "/p3_02.webp",
    title: "Track & Field",
  },
  {
    image: "/p3_03.webp",
    title: "Basketball",
  },
  {
    image: "/p3_04.webp",
    title: "futsal",
  },
  {
    image: "/p3_05.webp",
    title: "Archery",
  },
  {
    image: "/p3_06.webp",
    title: "Cricket",
  },
  {
    image: "/p3_07.webp",
    title: "martial arts",
  },
  {
    image: "/p3_08.webp",
    title: "volleyball",
  },
  {
    image: "/p3_09.webp",
    title: "badminton",
  },
  {
    image: "/p3_10_1.webp",
    title: "Mountain climbing",
  },
];
export default function page() {
  return (
    <div className="pt-[120px] text-black w-screen overflow-hidden">
      <Navbar />
      <div className="xl:hidden flex flex-col w-full items-center mt-20 ">
        <div className="w-[80%] xl:w-[50%]">
          <h1 className="text-[25px] text-center xl:text-[35px] font-bold">
            The CSI Extended Learning Program
          </h1>
          <p className="text-center mt-5 text-[18px] xl:text-[22px]">
            At CSI, learning takes place both inside & Outside the classroom.
            Our extended learning program makes Sure that our students learn
            through play, projects, co-curriculars and athletics.
          </p>
        </div>
      </div>
      <div className=" justify-between relative overflow-hidden w-screen">
        <div className="w-full">
          <div className="hidden absolute top-0 left-0 xl:flex flex-col w-full items-center ">
            <div className="mt-20  w-[80%] xl:w-[50%]">
              <h1 className="text-[25px] text-center xl:text-[35px] font-bold">
                The CSI Extended Learning Program
              </h1>
              <p className="text-center mt-5 text-[18px] xl:text-[22px]">
                At CSI, learning takes place both inside & Outside the
                classroom. Our extended learning program makes Sure that our
                students learn through play, projects, co-curriculars and
                athletics.
              </p>
            </div>{" "}
          </div>
          <div className="hidden xl:block absolute left-0 top-[50%] w-1/2 px-[10%]">
            <h1 className="text-[25px] text-[#028676] xl:text-[38px] font-bold">
              The CSI Take Flight Program
            </h1>
            <p className="mt-10 text-[22px]">
              the take flight program offers CSI Robins the opportunity to
              engage in multiple projects based roles all designed to improve
              their cognition, social and emotional intelligence and confidence.
              these roles include:
            </p>
          </div>
          <Image
            src={"/ANIMATION2.GIF"}
            height={1000}
            width={1000}
            alt="iamge"
            className="w-full h-auto object-contain my-20 xl:my-0"
          />
        </div>
        <div className="px-[10%] xl:hidden">
          <h1 className="text-[25px] text-[#028676] xl:text-[38px] font-bold">
            The CSI Take Flight Program
          </h1>
          <p className="mt-10 text-[22px]">
            the take flight program offers CSI Robins the opportunity to engage
            in multiple projects based roles all designed to improve their
            cognition, social and emotional intelligence and confidence. these
            roles include:
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap justify-between px-[5%]">
        {array.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center w-[100%] md:w-[50%] xl:w-[30%] mt-20"
          >
            <Image
              src={item.image}
              height={400}
              width={400}
              alt="image"
              className="h-[300px] w-auto object-contain hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
            />
            <button className="border-[1px] border-gray-400 rounded-full px-5 py-2 hover:border-[#028676] hover:border-1">
              <p>
                Young <span className="text-[#028676] ">{item.title}</span>
              </p>
            </button>
          </div>
        ))}
      </div>
      <div className="justify-between xl:relative overflow-hidden w-screen">
        <div className="w-full">
          <div className="absolute xl:block hidden right-0 top-[50%] w-1/2 px-[10%]">
            <h1 className="text-[25px] text-[#028676] xl:text-[38px] font-bold">
              The CSI Co-Curricular Program
            </h1>
            <p className="mt-10 text-[22px]">
              Our Extensive co curricular program builds upon our take flight
              program and allows students to make further gains through project
              and play based learning. our program also centers around the
              importance of well being and mindfulness. activities offered are:
            </p>
          </div>
          <Image
            src={"/Animation002.GIF"}
            height={1000}
            width={1000}
            alt="iamge"
            className="w-full h-auto object-contain my-10 xl:my-0"
          />
        </div>
        <div className="xl:hidden px-[10%]">
          <h1 className="text-[25px] text-[#028676] xl:text-[38px] font-bold">
            The CSI Co-Curricular Program
          </h1>
          <p className="mt-10 text-[22px]">
            Our Extensive co curricular program builds upon our take flight
            program and allows students to make further gains through project
            and play based learning. our program also centers around the
            importance of well being and mindfulness. activities offered are:
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap justify-between px-[5%]">
        {array_one.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center w-[100%] md:w-[50%] xl:w-[25%] mt-20"
          >
            <Image
              src={item.image}
              height={400}
              width={400}
              alt="image"
              className="h-[200px] w-auto object-contain hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
            />

            <p
              style={{
                color: index % 2 ? "#028676" : "#355496",
              }}
              className="text-[#028676] font-bold text-[25px] "
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex w-full mt-[10%]">
        <div className="xl:w-[60%] px-[10%]">
          <h1 className="text-[25px] text-[#028676] xl:text-[38px] font-bold">
            The CSI Take Flight Program
          </h1>
          <p className="mt-10 text-[22px]">
            the take flight program offers CSI Robins the opportunity to engage
            in multiple projects based roles all designed to improve their
            cognition, social and emotional intelligence and confidence. these
            roles include:
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap justify-between px-[5%]">
        {array_two.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center w-[100%] md:w-[50%] xl:w-[33%] mt-20 "
          >
            <Image
              src={item.image}
              height={400}
              width={400}
              alt="image"
              className="h-[300px] w-auto object-contain hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer"
            />

            <p
              style={{
                color: index % 2 ? "#028676" : "#355496",
              }}
              className="text-[#028676] font-bold text-[25px] uppercase"
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="xl:mt-[400px]">
        <Footer />
      </div>
    </div>
  );
}
