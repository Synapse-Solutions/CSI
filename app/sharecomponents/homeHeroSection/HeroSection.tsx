"use client";
import React, { useEffect, useState } from "react";
import "./HomeHero.css"; // Ensure this file exists for styling

const images = [
  "/banner_1.webp",
  "/banner_2.webp",
  "/banner_3.webp",
  "/banner_video.mp4", // Assuming this is your video file path
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
    setIntervalDuration(currentImageIndex === 3 ? 12000 : 6000);
  }, [currentImageIndex]);

  return (
    <div className="h-[calc(40vh)] image-wrap w-screen flex items-center justify-center md:h-[calc(60vh)] xl:h-[calc(100vh)] bg-white bg-opacity-75">
      <ul className="slideshow">
        {images.map((image, index) => (
          <li key={index}>
            <span></span>
          </li>
        ))}
      </ul>
      {currentImageIndex === 0 || currentImageIndex === 1 ? (
        <div className="absolute top-0 left-0 w-full flex h-full items-center justify-center mt-[70px] xl:mt-0 ">
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
      ) : null}
      {currentImageIndex === 3 && (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={images[currentImageIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
