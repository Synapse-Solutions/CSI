"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  console.log("🚀 ~ Navbar ~ pathname:", pathname);
  let color = pathname !== "/" ? "#355496" : "#fff";
  return (
    <div
      className={`flex justify-center fixed top-0 left-0 w-full h-[170px] items-center text-[${color}] uppercase z-20`}
    >
      <div className="flex w-[80%] items-center justify-between">
        <div className="w-[30%] flex justify-between">
          <h1 className="hover:text-[#028676] cursor-pointer">Programs</h1>

          <h1 className="hover:text-[#028676] cursor-pointer">
            See The campus
          </h1>

          <h1 className="hover:text-[#028676] cursor-pointer">Admissions</h1>
        </div>
        <div className="w-[30%] flex justify-center">
          <Image
            src={pathname !== "/" ? "/logo_blue.webp" : "/logo.webp"}
            height={200}
            width={200}
            className="h-[80px] w-auto object-contain"
            alt="logo"
          />
        </div>
        <div className="w-[30%] flex justify-between">
          <div className="flex-1">
            <h1 className="hover:text-[#028676] cursor-pointer">
              Clarity By csi
            </h1>
          </div>
          <div className="flex-1">
            <h1 className="hover:text-[#028676] cursor-pointer">
              inquire today
            </h1>
          </div>
          <div className="flex gap-10">
            <Image
              src={"/magnifyingglass.webp"}
              height={30}
              width={30}
              alt="search"
              className="cursor-pointer"
            />

            <Image
              src={"/sharenetwork.webp"}
              height={30}
              width={30}
              alt="search"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
