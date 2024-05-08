"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const array = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Admission",
    link: "/admission",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
export default function Navbar() {
  const pathname = usePathname();
  let color = pathname !== "/" ? "#355496" : "#fff";

  const [isHeaderShow, setIsHeaderShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHambergerShow, setIsHambergerShow] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsHambergerShow(false);
      setIsClosing(false);
    }, 1000);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: isHeaderShow ? "white" : "transparent",
          transition: "background-color 1s ease",
          opacity: 1,
        }}
        className={`hidden lg:flex justify-center fixed top-0 left-0 w-full h-[120px] items-center text-[${color}] uppercase z-50`}
      >
        <div className="flex w-[80%] items-center justify-between">
          <div className="w-[40%] 2xl:w-[30%] flex justify-between">
            <h1 className="hover:text-[#028676] cursor-pointer">Programs</h1>

            <h1 className="hover:text-[#028676] cursor-pointer">
              See The campus
            </h1>
            <Link href={"/admission"}>
              <h1 className="hover:text-[#028676] cursor-pointer">
                Admissions
              </h1>
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
      <div className="lg:hidden fixed top-[calc(8vh)] right-5 z-30">
        <Image
          src={"/options.webp"}
          alt="logo"
          width={50}
          height={30}
          onClick={() => setIsHambergerShow(true)}
          className="cursor-pointer hover:animate-pulse h-[30px] w-auto object-contain"
          style={{ filter: pathname === "robins" ? "invert(1)" : "" }}
        />
      </div>
      {isHambergerShow && (
        <div
          data-aos="fade-right"
          className={`${
            isClosing ? "fade-left" : ""
          } lg:hidden flex flex-col items-center fixed top-0 left-0 h-screen w-screen z-50 bg-[#028676]`}
        >
          <div className="w-full flex items-end justify-end p-5">
            <Image
              src={"/X.png"}
              alt="logo"
              width={50}
              height={30}
              onClick={handleCloseMenu}
              className="cursor-pointer hover:animate-pulse h-[50px] object-contain"
            />
          </div>
          <Image
            src={"/logo.webp"}
            alt="logo"
            width={100}
            height={80}
            className="cursor-pointer hover:animate-pulse h-[60px] w-auto mt-10 object-contain"
          />
          <div className="flex flex-col space-y-5 text-white mt-10">
            {array?.map((item, index) => (
              <Link
                href={item.name !== "Services" ? item.link : ""}
                key={index}
                className="relative"
              >
                <p
                  style={{
                    color: pathname === item.link ? "#93F1FE" : "white",
                  }}
                  className="cursor-pointer transform hover:text-[#93F1FE]"
                >
                  {item.name}
                </p>
                <div></div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
