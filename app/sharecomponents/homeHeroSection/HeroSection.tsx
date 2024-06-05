"use client";
import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import Image from "next/image";

const images = ["/b001.webp", "/b004.webp"];
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
    <div className="image-wrap w-screen flex items-center justify-center h-[calc(60vh)] xl:h-[calc(100vh)] bg-black bg-opacity-75">
      {currentImageIndex === 1 ? (
        <a
          className="animate_img h-[calc(60vh)] xl:h-[calc(100vh)]"
          href="https://summerscsi.com/"
          target="_blank"
        >
          <Image
            height={1500}
            width={1500}
            alt="image"
            src={images[currentImageIndex]}
            className="animate_img h-[calc(60vh)] xl:h-[calc(100vh)]"
          />
        </a>
      ) : (
        <img
          src={images[currentImageIndex]}
          className="animate_img h-[calc(60vh)] xl:h-[calc(100vh)]"
        />
      )}
      {currentImageIndex !== 1 ? (
        <div className="absolute top-0 left-0 w-full flex h-full items-center justify-center mt-[70px] xl:mt-0">
          <div className="flex flex-col items-center">
            <Image
              src={"/icons.png"}
              height={1000}
              width={1000}
              alt="urdu"
              className="h-[50px] xl:h-[100px] w-auto object-contain"
            />
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
              <button className="bg-[#028676] hover:bg-[#4d8680] rounded-full px-10 py-3 text-white flex items-center justify-center mt-10">
                Join Our Summer School!
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 left-0 w-full flex h-full ">
          <a
            className="h-full w-full"
            href="https://summerscsi.com/"
            target="_blank"
          >
            <Image
              src={"/sc4.webp"}
              height={1000}
              width={1000}
              alt="sc4"
              className="h-full w-full"
            />
          </a>
        </div>
      )}
    </div>
  );
}
