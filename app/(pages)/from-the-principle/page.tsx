"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <div className="h-[130px]"></div>
      <section>
        <div className="flex flex-col items-end relative">
          <Image
            src={"/fakhra_shahid.png"}
            height={2500}
            width={1500}
            className="w-full xl:w-[65%] h-auto object-contain"
            alt="fakhra shahid"
          />
          <Image
            src={"/sign.png"}
            height={1000}
            width={1000}
            className="w-full xl:w-[50%] h-auto object-contain mt-20 px-20 xl:px-0"
            alt="fakhra shahid signature"
          />

          <div className="xl:absolute xl:top-0  w-full mt-10 xl:mt-0 px-20 xl:px-0">
            <h1 className="text-[52px] text-center xl:text-start font-[700] xl:ml-10">
              From the desk <br /> of the principal
            </h1>
            <div
              style={{
                backgroundImage: "url(/from_principles_bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-full xl:w-[45%] xl:ml-10 h-auto pt-20 text-white text-[22px] flex flex-col items-center relative"
            >
              <div className="px-10 mt-10 2xl:mt-20 flex flex-col gap-5 text-[14px] 2xl:text-[24px]">
                <p>
                  It is my honour and privilege as the Principal of the first
                  campus of Central School International to welcome you to our
                  school. As an educator with over 25 years of experience in
                  leading primary and secondary schools offering international
                  curricula, I strongly believe that every child has the
                  potential to learn and a right to enjoy learning. With a safe,
                  supportive, and happy school environment at CSI, my team and I
                  are creating the very conditions for meaningful learning for
                  each child, each day.
                </p>
                <p>
                  At CSI, every child's everyday matters. The school day starts
                  with your child being greeted every morning at the school gate
                  by me and my team. Students spend their extended school day
                  under our care and supervision, enjoying opportunities for
                  interaction and learning, within and beyond classrooms.
                  Cafeteria time, snack breaks, sports, and club hours are some
                  of the many ways the CSi community connects and learns with
                  and from each other.
                </p>
                <p>
                  Through play, inquiry, and technology, we tap into children's
                  natural curiosity, talent, and ability to shape academic
                  learning. Learning spaces and school days are curated to
                  encourage our students to explore, experiment, express,
                  examine, evaluate, and ENJOY learning to learn and in doing so
                  foster a love for lifelong learning.
                </p>
                <p>
                  It takes a village to raise a child" (African Proverb). We at
                  CSI believe in building a school community where the school,
                  parents, and the larger community take an active and
                  responsible role in contributing towards the education of our
                  students. I invite the parent community to join me and the
                  team at CSI in creating and celebrating the learning journey
                  of our students. Let's work together to help our children
                  develop as proud Pakistanis, who value their responsibility as
                  global citizens of the future.
                </p>
              </div>
              <div className="h-[400px]"></div>
              <div className="absolute right-0 bottom-0 w-full">
                <Image
                  src={"/fly2.gif"}
                  height={1000}
                  width={1000}
                  className=" w-full h-auto object-contain"
                  alt="tree"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
