import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url("/home_hero.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[95vh] w-screen flex items-center justify-center"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-[#028676] text-[45px]">
            Knowledge, Action, Resolve
          </h1>
          <Image
            src={"/urdu.webp"}
            height={1000}
            width={1000}
            alt="urdu"
            className="h-[100px] w-auto object-contain"
          />
        </div>
      </div>
      <Image
        src={"/color_bar.webp"}
        height={100}
        width={2000}
        className="h-[50px] w-screen"
        alt="bar"
      />
      <div className="flex items-center">
        <div className="w-[30%] px-[5%]">
          <h1 className="font-bold text-[40px] ">The CSI Way</h1>
          <p>
            CSi’s Approach takes the best from international best practics,
            local expertise & the latest in research to deliver an education
            best suited for 21st century.
          </p>
        </div>
        <div className="w-[70%]">
          <div className="border border-black rounded w-[23%]">
            <Image
              alt="image"
              src={"/s_01.webp"}
              height={500}
              width={500}
              className="w-full h-auto object-contain"
            />
            <div className="px-10">
              <h1>
                The CSI <br />
                Advantage
              </h1>
              <button className="bg-[#028676] rounded-full text-white px-10 py-3">
                SEE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
