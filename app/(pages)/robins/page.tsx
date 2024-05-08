import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import ServicesCard from "@/app/sharecomponents/ServicesCard";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="text-black overflow-hidden">
      <Navbar />
      <div className="h-[calc(100vh)] px-[40px] flex flex-col xl:flex-row w-screen items-center justify-center gap-20">
        <Image
          src={"/vector_smart_object_4.webp"}
          height={200}
          width={200}
          alt="vector"
        />
        <div className="xl:w-[30%]">
          <h1 className="text-[35px] font-bold">CSI Robins</h1>
          <h1 className="text-[35px] font-bold text-[#355496]">
            Helping Young Minds take Flight
          </h1>
          <p className="mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </p>
        </div>
      </div>
      <div>
        <div className="xl:mt-16">
          <div className="w-[100%] lg:hidden flex flex-col items-center">
            <ServicesCard
              title="Value Centered"
              description="Your brand's identity and user experience are paramount to your success. We design products that are useful, enjoyable to use, and align seamlessly with your business objectives. With Synapse Solutions, you can create digital experiences that engage users at every touchpoint, driving meaningful interactions and fostering long-term relationships."
            />
            <ServicesCard
              title="Mobile App Development"
              description="The best apps are the ones that prioritize the user experience. From sleek interfaces to seamless navigation, we design apps using React Native and Firebase to ensure users keep coming back for more."
            />
            <ServicesCard
              title="Holistic"
              description="With our team of expert developers at your side, you can rest assured that your online presence is in capable hands. Whether you need a custom website, a robust web application, or anything in between, we've got you covered."
            />
            <ServicesCard
              title="Focused on care and nature"
              description="The journey doesn't end once your digital product is launched. Continuously operational software is required to ensure smooth business processes. Our team stays on top of updates, bug fixes, and technical support."
            />
            <ServicesCard
              title="Play And Project Based"
              description="The journey doesn't end once your digital product is launched. Continuously operational software is required to ensure smooth business processes. Our team stays on top of updates, bug fixes, and technical support."
            />
          </div>
          <div className="lg:flex justify-center hidden ">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] " />
            <div className="flex flex-col items-center w-[15%] xl:w-[15%] 2xl:w-[10%]">
              <div className="bg-[#355496] rounded-full w-[20px] h-[20px] flex items-center justify-center"></div>
              <div className="w-[5px] h-[50vh] 2xl:h-[calc(30vh)] bg-[#355496]"></div>
            </div>

            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] ">
              <ServicesCard
                rightSideCard={true}
                title="Value Centered"
                description="The best apps are the ones that prioritize the user experience. From sleek interfaces to seamless navigation, we design apps using React Native and Firebase to ensure users keep coming back for more."
              />
            </div>
          </div>
          <div className="lg:flex justify-center hidden ">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] justify-end h-auto  flex">
              <ServicesCard
                title="Informed By Research"
                description="Your brand's identity and user experience are paramount to your success. We design products that are useful, enjoyable to use, and align seamlessly with your business objectives. With Synapse Solutions, you can create digital experiences that engage users at every touchpoint, driving meaningful interactions and fostering long-term relationships."
              />
            </div>
            <div className="flex flex-col items-center w-[15%] xl:w-[15%] 2xl:w-[10%]">
              <div className="bg-[#355496] rounded-full w-[20px] h-[20px] flex items-center justify-center"></div>
              <div className="w-[5px] h-[50vh] 2xl:h-[calc(30vh)] bg-[#355496]"></div>
            </div>
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%]" />
          </div>
          <div className="lg:flex justify-center hidden ">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] " />
            <div className="flex flex-col items-center w-[15%] xl:w-[15%] 2xl:w-[10%]">
              <div className="bg-[#355496] rounded-full w-[20px] h-[20px] flex items-center justify-center"></div>
              <div className="w-[5px] h-[50vh] 2xl:h-[calc(30vh)] bg-[#355496]"></div>
            </div>

            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] ">
              <ServicesCard
                rightSideCard={true}
                title="Holistic"
                description="The best apps are the ones that prioritize the user experience. From sleek interfaces to seamless navigation, we design apps using React Native and Firebase to ensure users keep coming back for more."
              />
            </div>
          </div>
          <div className="lg:flex justify-center hidden">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%] justify-end h-auto  flex">
              <ServicesCard
                title="Focused on care and nature"
                description="With our team of expert developers at your side, you can rest assured that your online presence is in capable hands. Whether you need a custom website, a robust web application, or anything in between, we've got you covered."
              />
            </div>
            <div className="flex flex-col items-center w-[15%] xl:w-[15%] 2xl:w-[10%]">
              <div className="bg-[#355496] rounded-full w-[20px] h-[20px] flex items-center justify-center"></div>
              <div className="w-[5px] h-[50vh] 2xl:h-[calc(30vh)] bg-[#355496]"></div>
            </div>
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%]" />
          </div>
          <div className="lg:flex justify-center hidden">
            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%]" />
            <div className="flex flex-col items-center w-[15%] xl:w-[15%] 2xl:w-[10%]">
              <div className="bg-[#355496] rounded-full w-[20px] h-[20px] flex items-center justify-center"></div>
              {/* <div className="w-[5px] h-[50vh] 2xl:h-[calc(30vh)] bg-[#355496]"></div> */}
            </div>

            <div className="w-[35%] xl:w-[35%] 2xl:w-[40%]">
              <ServicesCard
                rightSideCard={true}
                title="Play And Project Based"
                description="The journey doesn't end once your digital product is launched. Continuously operational software is required to ensure smooth business processes. Our team stays on top of updates, bug fixes, and technical support."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[10%]">
        <Image
          src={"/child.webp"}
          height={500}
          width={500}
          alt="child"
          className="w-[26%] h-auto object-contain"
        />
        <Image
          src={"/child.webp"}
          height={500}
          width={500}
          alt="child"
          className="w-[26%] h-auto object-contain"
        />
        <Image
          src={"/child.webp"}
          height={500}
          width={500}
          alt="child"
          className="w-[26%] h-auto object-contain"
        />
      </div>
      <div className="mt-[10%] flex items-end">
        <Image
          src={"/tree_1.webp"}
          height={500}
          width={500}
          alt="tree"
          className="w-[80px] h-auto object-contain"
        />
        <Image
          src={"/fox_color_1.webp"}
          height={500}
          width={500}
          alt="tree"
          className="w-[150px] h-auto object-contain ml-[10%]"
        />
        <Image
          src={"/tree_2.webp"}
          height={500}
          width={500}
          alt="tree"
          className="w-[50px] h-auto object-contain ml-[70%] mb-[-20px]"
        />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
