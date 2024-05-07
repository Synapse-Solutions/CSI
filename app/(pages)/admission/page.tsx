import Navbar from "@/app/sharecomponents/Navbar";
import ButtonComponent from "@/app/sharecomponents/animatedButton/Button";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="text-black overflow-hidden">
      <Navbar />
      <div className="h-[150px]"></div>
      <div className="relative w-screen h-[85vh]">
        <Image
          src={"/admission_left.webp"}
          height={1000}
          width={1000}
          alt="image"
          className="w-[60%] h-full absolute top-0 left-0"
        />
        <Image
          src={"/admission_right.webp"}
          height={1000}
          width={1000}
          alt="image"
          className="w-[100%] h-full"
        />
        <div className="flex absolute z-20 top-[5%] w-full h-full text-white">
          <div className="w-1/2 flex flex-col items-center justify-between h-full py-[3%]">
            <h1 className="text-[40px] ">
              For <span className="font-bold">Teachers</span>
            </h1>
            <ButtonComponent text="GET  TO KNOW MORE" />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-between h-full py-[3%]">
            <h1 className="text-[40px] ">
              For <span className="font-bold"> Parents</span>
            </h1>
            {/* <button className="uppercase rounded-full px-10 py-2 border-[1px] border-white">
              Get To know more
            </button> */}
            <ButtonComponent text="GET  TO KNOW MORE" />
          </div>
        </div>
      </div>
    </div>
  );
}
