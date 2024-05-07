"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  console.log("🚀 ~ Navbar ~ pathname:", pathname);
  let color = pathname !== "/" ? "#355496" : "#fff";
  const [isHeaderShow, setIsHeaderShow] = useState(false);

  let lastScrollTop = 0;
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset;
      //when the user scrolls down 20px from the top of the document, show the button
      if (st < 10) {
        setIsHeaderShow(false);
      } else if (st > lastScrollTop) {
        setIsHeaderShow(true);
      } else {
        setIsHeaderShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: isHeaderShow ? "white" : "transparent",
        transition: "background-color 1s ease",
        opacity: 1,
      }}
      className={`flex justify-center fixed top-0 left-0 w-full h-[120px] items-center text-[${color}] uppercase z-50`}
    >
      <div className="flex w-[80%] items-center justify-between">
        <div className="w-[40%] 2xl:w-[30%] flex justify-between">
          <h1 className="hover:text-[#028676] cursor-pointer">Programs</h1>

          <h1 className="hover:text-[#028676] cursor-pointer">
            See The campus
          </h1>
          <Link href={"/admission"}>
            <h1 className="hover:text-[#028676] cursor-pointer">Admissions</h1>
          </Link>
        </div>
        <div className="w-[25%] 2xl:w-[30%] flex justify-center">
          <Link href={"/"}>
            <Image
              src={
                pathname !== "/" || isHeaderShow
                  ? "/logo_blue.webp"
                  : "/logo.webp"
              }
              height={200}
              width={200}
              className="h-[80px] w-auto object-contain"
              alt="logo"
            />
          </Link>
        </div>
        <div className="w-[40%] 2xl:w-[30%]  flex justify-between">
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
              src={
                pathname !== "/" || isHeaderShow
                  ? "/search_green.webp"
                  : "/magnifyingglass.webp"
              }
              height={30}
              width={30}
              alt="search"
              className="cursor-pointer"
            />

            <Image
              src={
                pathname !== "/" || isHeaderShow
                  ? "/share_green.webp"
                  : "/sharenetwork.webp"
              }
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
