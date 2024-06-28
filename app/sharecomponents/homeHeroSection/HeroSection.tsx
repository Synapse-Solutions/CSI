"use client";
import React, { useEffect, useState } from "react";
import "./HomeHero.css";
import Image from "next/image";

const images = [
  "/banner_1.webp",
  "/banner_2.webp",
  "/banner_3.webp",
  "/banner_video.mp4",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState<any>(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);
  const [intervalDuration, setIntervalDuration] = useState(8000);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex: any) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentImageIndex, intervalDuration]);

  useEffect(() => {
    setIntervalDuration(currentImageIndex === 3 ? 12000 : 8000);
  }, [currentImageIndex]);

  return (
    <div className="h-[calc(40vh)] image-wrap w-screen flex items-center justify-center md:h-[calc(60vh)] xl:h-[calc(100vh)] bg-white bg-opacity-75">
      {images.map((src, index) => (
        <div
          key={index}
          className={`image-div h-[calc(60vh)] xl:h-[calc(100vh)] mt-80 md:mt-0 ${
            index === currentImageIndex
              ? "active"
              : index === prevImageIndex
              ? "previous"
              : ""
          }`}
        >
          {src.endsWith(".mp4") ? (
            <video
              src={src}
              autoPlay
              muted
              playsInline
              className="w-full h-auto object-contain"
            ></video>
          ) : (
            <Image
              height={1500}
              width={1500}
              alt="image"
              src={src}
              className="w-full h-auto object-contain"
            />
          )}
        </div>
      ))}

      {(currentImageIndex === 0 || currentImageIndex === 1) && (
        <div className="absolute top-0 left-0 w-full flex h-full items-center justify-center mt-[70px] xl:mt-0 z-50">
          <div className="flex flex-col items-center">
            <h1 className="text-[#fff] text-[25px] xl:text-[45px]">
              Knowledge, Action, Resolve
            </h1>
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
