"use client";
import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import Image from "next/image";

const images = ["/home_hero.png", "/home_hero_1.webp", "/home_hero_2.webp"];
export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="image-wrap w-screen flex items-center justify-center h-[calc(50vh)] xl:h-[calc(100vh)] bg-black bg-opacity-75">
      <img
        src={images[currentImageIndex]}
        className="animate_img h-[calc(50vh)] xl:h-[calc(100vh)]"
      />
      <div className="absolute top-0 left-0 w-full flex h-full items-center justify-center">
        <div className="flex flex-col items-center">
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
          <a href="https://summerscsi.com/" target="_blank">
            <button className="bg-[#028676] rounded-full px-10 py-3 text-white flex items-center justify-center mt-10">
              Join Our Summer Camp!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
