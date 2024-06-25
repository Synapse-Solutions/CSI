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
import axios from "axios";

const array = [1, 2, 3, 4];
export default function Page() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getAllPosts();
  }, []);
  const getAllPosts = async () => {
    try {
      const response = await axios.get(
        "https://csi-cms-af35d1628083.herokuapp.com/api/posts/"
      );
      setPosts(response.data.docs);
    } catch (error) {
      console.log("🚀 ~ getAllPosts ~ error:", error);
    }
  };
  return (
    <div className="text-black w-screen overflow-hidden">
      <Navbar />
      <div className="relative z-10"></div>
      <section className="  pt-[40%] py-[5%] md:py-[10%] px-[5%] ">
        <div className="flex  items-center">
          <div className="w-1/2 flex justify-center">
            <Image
              src={"/three_birds.png"}
              height={500}
              width={500}
              className="w-[90%] h-auto"
              alt="birds"
            />
          </div>
          <div className="w-1/2">
            <h1 className="ml-5 md:ml-0 text-[20px] md:text-[30px] font-bold">
              Clarity By CSI
            </h1>
          </div>
        </div>
        <div className="flex justify-between mt-5 md:mt-20 border-b border-black md:pb-5">
          <p>
            {" "}
            <span className="text-[#1F4694] text-[12px] md:text-[25px]">
              Blog Timeline / Blog / Home{" "}
            </span>{" "}
          </p>
          <p className="text-[#1F4694] text-[12px] md:text-[25px]">
            Blog Timeline
          </p>
        </div>
      </section>
      <section className="px-[5%] flex flex-wrap justify-between gap-14 mb-[50px] md:mb-[250px]">
        {posts.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="border border-black p-5 w-full md:w-[47%] flex flex-col md:items-end"
            >
              <Image
                src={
                  "https://csi-cms-af35d1628083.herokuapp.com" +
                  item.postImage.url
                }
                height={1000}
                width={1000}
                className="w-full h-[250px]"
                alt="frame"
              />
              <div className="w-full md:max-w-[80%] flex flex-col md:items-end">
                <h2 className=" md:text-end text-[#1F4694] text-[15px] md:text-[25px] mt-5">
                  {item.postMeta.title}
                </h2>
                <p className=" text-[13px] md:text-end md:text-[16px] text-[#646464]">
                  {item.postMeta.description}
                </p>
                <button className="self-end bg-[#1F4694] rounded-md text-[12px] md:text-[16px] px-3 py-1 md:px-6 md:py-2 text-white mt-5">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <footer className="pt-[50px]">
        <Footer />
      </footer>
    </div>
  );
}
