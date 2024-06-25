"use client";
import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import Image from "next/image";

const images = [
  "/banner_1.png",
  "/banner_2.png",

  "/banner_video.mp4",
  "/banner_3.png",
];
export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(8000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  useEffect(() => {
    if (currentImageIndex === 2) {
      setIntervalDuration(12000);
    } else {
      setIntervalDuration(8000);
    }
  }, [currentImageIndex]);
  return (
    <div className="h-[calc(40vh)] image-wrap w-screen flex items-center justify-center md:h-[calc(60vh)] xl:h-[calc(100vh)] bg-black bg-opacity-75">
      <div
        className={`${
          currentImageIndex !== 3 && currentImageIndex !== 2 && "animate_img"
        } h-[calc(60vh)] xl:h-[calc(100vh)] mt-80 md:mt-0`}
      >
        {currentImageIndex === 2 ? (
          <video
            src="/banner_video.mp4"
            autoPlay
            muted
            controls
            playsInline
            className="w-full h-auto object-contain"
          ></video>
        ) : currentImageIndex === 3 ? (
          <Image
            height={1500}
            width={1500}
            alt="image"
            src={images[currentImageIndex]}
            className=" w-full h-auto object-contain"
          />
        ) : (
          <Image
            height={1500}
            width={1500}
            alt="image"
            src={images[currentImageIndex]}
            className="animate_img w-full h-auto object-contain"
          />
        )}
      </div>
      {(currentImageIndex === 0 || currentImageIndex === 1) && (
        <div className="absolute top-0 left-0 w-full flex h-full items-center justify-center mt-[70px] xl:mt-0">
          <div className="flex flex-col items-center">
            <h1 className="text-[#fff] text-[25px] xl:text-[45px]">
              Knowledge, Action, Resolve
            </h1>{" "}
            <br />
            <p className="hidden md:block text-white mt-5 text-[18px] xl:text-[22px] w-[50%]">
              Empowering students with the wisdom to learn, the courage to act,
              and the determination to succeed.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
