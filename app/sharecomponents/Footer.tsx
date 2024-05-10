"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div
      style={{
        backgroundImage: "url(/footer_learning.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-screen p-[5%] flex flex-col xl:flex-row text-white justify-between text-[13px] xl:text-[17px] relative"
    >
      <div className="w-screen xl:flex z-10 absolute xl:-top-[230px] 2xl:-top-[320px] left-0 hidden">
        <Image
          src={"/Animation003.GIF"}
          height={1500}
          width={1500}
          alt="tree"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-full xl:w-[50%] pt-[50px] xl:pt-0 z-20 ">
        <Image
          src={"/logo.webp"}
          height={300}
          width={300}
          className="h-[100px] w-auto object-contain"
          alt="logo"
        />
        <h1 className="font-bold text-[25px] mt-5">Quick Links</h1>
        <div className="flex gap-3 xl:gap-10 mt-5 ">
          <Link href={"/learning-program"}>
            <p className="hover:text-[#028676]">Programs</p>
          </Link>
          <p className="hover:text-[#028676]">See the Campus</p>
          <Link href={"/learning-program"}>
            <p className="hover:text-[#028676]">Admissions</p>
          </Link>
          <p className="hover:text-[#028676]">Clarity by CSI</p>
        </div>
        <h1 className="font-bold text-[25px] mt-5">Follow Us</h1>
        <div className="flex gap-10 mt-5">
          <Image
            src={"/linkedinlogo.webp"}
            height={100}
            width={100}
            className="h-[50px] w-auto object-contain"
            alt="logo"
          />
          <Image
            src={"/facebooklogo.webp"}
            height={100}
            width={100}
            className="h-[50px] w-auto object-contain"
            alt="logo"
          />
          <Image
            src={"/instagramlogo.webp"}
            height={100}
            width={100}
            className="h-[50px] w-auto object-contain"
            alt="logo"
          />
        </div>
        <p className="mt-5">
          © Central School International 2024 | Terms & Privacy 
        </p>
      </div>
      <div className="w-full xl:w-[30%] flex flex-col items-center justify-center gap-10 mt-20 xl:mt-0">
        <p className="text-center">
          The care, safety and wellbeing of all children and vulnerable people
          is a core and fundamental responsibility for our community.
        </p>
        <Image
          src={"/sun.webp"}
          height={400}
          width={400}
          className="h-[150px] w-auto object-contain"
          alt="logo"
        />
      </div>
    </div>
  );
}
