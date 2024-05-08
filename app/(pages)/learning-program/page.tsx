import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React from "react";

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
export default function page() {
  return (
    <div className="pt-[120px] text-black w-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col w-full items-center mt-20 ">
        <div className="w-[80%] xl:w-[50%]">
          <h1 className="text-[25px] text-center xl:text-[35px] font-bold">
            The CSI Extended Learning Program
          </h1>
          <p className="text-center mt-5">
            At CSI, learning takes place both inside & Outside the classroom.
            Our extended learning program makes Sure that our students learn
            through play, projects, co-curriculars and athletics.
          </p>
        </div>
      </div>
      <div className="flex mt-20">
        <div className="w-1/2 px-[10%]">
          <h1 className="text-[25px] text-[#028676] xl:text-[35px] font-bold">
            The CSI Take Flight Program
          </h1>
          <p className="mt-10">
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
              className="h-[300px] w-auto object-contain"
            />
            <button className="border-[1px] border-gray-400 rounded-full px-5 py-2 hover:border-[#028676] hover:border-1">
              <p>
                Young <span className="text-[#028676] ">{item.title}</span>
              </p>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-[10%] flex items-end">
        <Image
          src={"/tree_1.webp"}
          height={500}
          width={500}
          alt="tree"
          className="w-[80px] h-auto object-contain"
        />
        <Image
          src={"/fox_color_1.webp"}
          height={500}
          width={500}
          alt="tree"
          className="w-[150px] h-auto object-contain ml-[10%]"
        />
        <Image
          src={"/tree_2.webp"}
          height={500}
          width={500}
          alt="tree"
          className="w-[50px] h-auto object-contain ml-[70%] mb-[-20px]"
        />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
