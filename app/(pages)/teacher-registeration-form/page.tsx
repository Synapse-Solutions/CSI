import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <section>
        <div
          style={{
            backgroundImage: "url(/teacher_traning_bg.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[700px] w-screen relative"
        >
          <div className="text-white absolute bottom-[30%] right-[15%]">
            <h1 className="text-[35px] font-bold">Our Teacher’s Training</h1>
            <p className="text-[35px]">Empowerment Process</p>
          </div>
        </div>
      </section>
      <section className="px-[10%]">
        <div className="relative text-black text-[22px] font-bold">
          <Image
            src={"/arrows_pic.png"}
            height={1000}
            width={1000}
            alt="arrows"
            className="w-full h-auto object-contain "
          />
          <div className="absolute top-8 left-12">
            <h1>
              Reach Out <br />
              through the <br />
              form below
            </h1>
          </div>
          <div className="absolute top-[5%] left-[65%]">
            <h1>Interview</h1>
          </div>
          <div className="absolute top-[30%] left-[63%]">
            <h1>
              Learning <br />
              Development <br />
              Center
            </h1>
          </div>
          <div className="absolute top-[28%] left-[10%]">
            <h1>
              Capacity <br />
              Building <br />
              Trips to engage <br />
              with policy <br />
              experts
            </h1>
          </div>
          <div className="absolute top-[55%] left-[30%]">
            <h1>
              Talks And <br />
              Engagement <br />
              Sessions <br />
              With Our <br />
              International <br />
              Partners
            </h1>
          </div>
          <div className="absolute top-[55%] left-[80%]">
            <h1>
              Gain a <br />
              Charter by <br />
              the Charter <br />
              College of <br />
              Teaching, UK
            </h1>
          </div>
          <div className="absolute top-[85%] left-[50%]">
            <h1>
              Cycles of <br /> Continuous <br /> Professional <br /> Development
            </h1>
          </div>
        </div>
      </section>
      <section className="px-[10%] mt-[5%]">
        <h1 className="text-[35px] font-bold text-center text-[#1F4694]">
          Teacher’s Registration Form
        </h1>
        <div className="border border-[#1F4694] rounded-md">
          <div className="flex items-center gap-3">
            <div className="bg-[#028676] text-white border border-[#1F4694] rounded-full h-[40px] w-[40px] flex items-center justify-center">
              1
            </div>
            <p>General Details</p>
            <div className="h-1 w-[100px] bg-[#1F4694]"></div>
          </div>
        </div>
      </section>
      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
