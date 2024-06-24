"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React, { useState } from "react";

export default function page() {
  const [selectedForm, setSelectedForm] = useState(3);
  const [educationDetails, setEducationDetails] = useState([
    {
      qualification: "",
      institute: "",
      board: "",
      marks: "",
    },
  ]);
  const [experienceArray, setExperienceArray] = useState([
    {
      organization: "",
      position: "",
      tenure: "",
    },
  ]);

  const handleRemove = () => {
    let updatedArray = [...educationDetails];
    updatedArray.pop();
    setEducationDetails(updatedArray);
  };
  const handleRemoveExperience = () => {
    let updatedArray = [...experienceArray];
    updatedArray.pop();
    setExperienceArray(updatedArray);
  };
  const handleAdd = () => {
    let updatedArray = [...educationDetails];
    updatedArray.push({
      qualification: "",
      institute: "",
      board: "",
      marks: "",
    });
    setEducationDetails(updatedArray);
  };
  const handleAddExperience = () => {
    let updatedArray = [...experienceArray];
    updatedArray.push({
      organization: "",
      position: "",
      tenure: "",
    });
    setExperienceArray(updatedArray);
  };
  return (
    <div>
      <Navbar />
      <section className="mb-[400px]">
        <div className="h-screen w-screen relative">
          <Image
            src={"/see_all_campush_hero.png"}
            height={1500}
            width={1500}
            alt="her"
            className="absolute top-0 left-0 w-screen h-auto"
          />

          <h1 className="text-[58px] font-[700px] absolute top-[20%] left-0 w-full text-center z-20 text-white">
            See the campus
          </h1>
          <button className="bg-white rounded-full px-10 py-2 text-black uppercase text-[28] font-[400] absolute left-20 z-20 top-[90%]">
            Book A tour
          </button>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center w-full">
          <p>Purpose Built Flagship Campus</p>
          <Image
            src={"/VDO.png"}
            height={500}
            width={500}
            alt="vdo"
            className="object-contain mt-10"
          />
        </div>
      </section>

      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
