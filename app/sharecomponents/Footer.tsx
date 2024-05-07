import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundImage: "url(/Footer.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-screen p-[5%] flex text-white justify-between"
    >
      <div className="w-[50%]">
        <Image
          src={"/logo.webp"}
          height={300}
          width={300}
          className="h-[100px] w-auto object-contain"
          alt="logo"
        />
        <h1 className="font-bold text-[25px] mt-5">Quick Links</h1>
        <div className="flex gap-10 mt-5">
          <p>Programs</p>
          <p>See the Campus</p>
          <p>Admissions</p>
          <p>Clarity by CSI</p>
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
      <div className="w-[30%] flex flex-col items-center justify-center gap-10">
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
