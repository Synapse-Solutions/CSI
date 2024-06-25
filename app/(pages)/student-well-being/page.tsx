"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="h-[130px]"></div>
      <section className="w-full px-10">
        <h1 className="text-[68px] font-[400] text-center">
          The Student <span className="font-[700] "> well-Being</span>
        </h1>
        <Image
          src={"/student_wellb_1.png"}
          height={2000}
          width={2000}
          alt="student well being"
          className="w-full h-auto object-contain"
        />
      </section>
      <section className="text-[20px] text-center">
        <div className="relative w-full h-auto">
          <Image
            src={"/student_wellb_2.png"}
            height={1500}
            width={1500}
            alt="student well being"
            className="w-full h-auto object-contain "
          />
          <div className="w-[40%] absolute top-0 h-full flex items-center right-20 ">
            <p>
              We offer state of the art transport facilities for our students.
              Our technology driven service allows parents to use a
              user-friendly app to monitor their children's journey, the
              location of the vehicle and the well-being of their
              children during travel.
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <Image
            src={"/student_wellb_3.png"}
            height={1500}
            width={1500}
            alt="student well being"
            className="w-full h-auto object-contain "
          />
          <div className="w-[30%] absolute top-0 h-full flex items-center left-20 ">
            <p>
              We offer Day-Boarding to ensure that CSI students feel at home
              when taking part in the varied and unique courses offered as part
              of our Extended Learning
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <Image
            src={"/student_wellb_4.png"}
            height={1500}
            width={1500}
            alt="student well being"
            className="w-full h-auto object-contain "
          />
          <div className="w-[35%] absolute top-0 h-full flex items-center right-20 ">
            <p>
              At CSI, every student's everyday matters. We use state of the art
              digital architecture to monitor and document the social and
              emotional wellbeing, academic progress, interests and strengths of
              our students. We also use this to make sure that parents as well
              as teachers are aware of the challenges that students may be
              facing in their learning so that we can address them well before
              they become genuine academic issues.
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <Image
            src={"/student_wellb_5.png"}
            height={1500}
            width={1500}
            alt="student well being"
            className="w-full h-auto object-contain "
          />
          <div className="w-[35%] absolute top-0 h-full flex items-center left-20 ">
            <p>
              We believe that it takes a village to raise a child. As such, at
              CSI we have made sure that parents have a regular meeting with the
              principal that places the child at the center. We use real life
              data gathered in real time at CSI to anchor our discussions to
              make sure that these meetings are substantive and deal with the
              core issues facing our students in their learning journey.
            </p>
          </div>
        </div>
        <div className="relative w-full h-auto">
          <Image
            src={"/student_wellb_6.png"}
            height={1500}
            width={1500}
            alt="student well being"
            className="w-full h-auto object-contain "
          />
          <div className="w-[35%] absolute top-0 h-full flex items-center right-20 ">
            <p>
              Nutrition is a critically important and often under discussed part
              of a child's education. CSI has a purpose-built in-house kitchen
              which adheres to the highest standards of hygiene which provides
              its students with freshly cooked hot meals to meet their
              nutritional needs.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
