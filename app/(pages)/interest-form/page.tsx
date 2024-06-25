"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React, { useState } from "react";

export default function page() {
  const [selectedForm, setSelectedForm] = useState(1);
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
    <div className="w-screen overflow-hidden">
      <Navbar />
      <section>
        <div
          style={{
            backgroundImage: "url(/interest_hero_bg.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[350px] xl:h-[700px] w-screen relative"
        ></div>
      </section>

      <section className="px-[10%] flex justify-center z-10 w-screen text-[#000000]">
        <div className="border border-[#1F4694] rounded-md p-10  bg-[#F5F9FC] w-full xl:w-[80%]   ">
          <p>
            Welcome to Central School International, where your child's learning
            journey starts with 3 simple steps. Experience a hassle-free
            admissions process on our website by completing the online admission
            form and our representative will reach out to you promptly.
          </p>
          <div className="flex flex-col items-center">
            <div className="bg-[#DCF1F2] rounded-md relative p-5 mt-20 w-full xl:w-[70%]">
              <h1 className="text-[52px] absolute -top-[50px] left-10 text-black">
                Step 1
              </h1>
              <p>
                Registrations are accepted via the website or in person. After
                the registration fee deposit, you will receive an admission
                assessment and interview date. The assessment benchmarks are
                also shared for the relevant class level at the time of
                on-campus registration
              </p>
              <Image
                src={"/right_arrow.png"}
                height={200}
                width={200}
                alt="arrow"
                className="h-[150px] w-auto absolute -right-[70px] -bottom-[50px]"
              />
            </div>
            <div className="bg-[#DCF1F2] rounded-md relative p-5 mt-20 w-full xl:w-[70%]">
              <h1 className="text-[52px] absolute -top-[50px] right-10 text-black">
                Step 2
              </h1>
              <p>
                Registrations are accepted via the website or in person. After
                the registration fee deposit, you will receive an admission
                assessment and interview date. The assessment benchmarks are
                also shared for the relevant class level at the time of
                on-campus registration
              </p>
              <Image
                src={"/left_arrow.png"}
                height={200}
                width={200}
                alt="arrow"
                className="h-[150px] w-auto absolute -left-[70px] -bottom-[50px]"
              />
            </div>
            <div className="bg-[#DCF1F2] rounded-md relative p-5 mt-20 w-full xl:w-[70%]">
              <h1 className="text-[52px] absolute -top-[50px] left-10 text-black">
                Step 3
              </h1>
              <p>
                Registrations are accepted via the website or in person. After
                the registration fee deposit, you will receive an admission
                assessment and interview date. The assessment benchmarks are
                also shared for the relevant class level at the time of
                on-campus registration
              </p>
              <Image
                src={"/left_arrow.png"}
                height={200}
                width={200}
                alt="arrow"
                className="h-[150px] w-auto absolute -left-[70px] -bottom-[50px]"
              />
            </div>
          </div>
          <div className="mt-20">
            <p className="text-[#000000] text-[33px]">
              Conditions of registration
            </p>
            <p>
              Registration does not guarantee admission. <br />
              All information and relevant documents provided must be true and
              accurate for us to process the admission. incomplete registration
              applications (forms) will not be accepted/processed. <br />
              The school reserves the right to accept/decline admission without
              giving any further information.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-10 text-black items-center mt-10">
            <h1 className="text-[52px] font-[700]">
              Our Fee <br /> <span className="font-[400]">Structure</span>
            </h1>
            <div className="bg-white border-[1px] border-[#1F4694] rounded-md p-4">
              <p className="text-[22px] font-[700px]">
                Pre Nursery To KG:{" "}
                <span className="font-[400]">PKR 32000 per month</span>
              </p>
              <p className="text-[22px] font-[700px]">
                Grade 1 - 5:{" "}
                <span className="font-[400]">PKR 35000 per month</span>
              </p>
            </div>
          </div>
          <h1 className="text-[52px] font-[700] uppercase mt-10">
            Interest <br /> <span className="font-[400]">form</span>
          </h1>
          <div>
            <p> Child’s Name</p>
            <input
              type="text"
              className="bg-white rounded-md border-[1px] border-[#1F4694] w-full p-3"
            />
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center justify-between mt-5 w-full gap-3 xl:gap-0">
            <div>
              <p>Gender</p> {" "}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="male"
                  />
                  <p>Male</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="female"
                  />
                  <p>Female</p>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[35%]">
              <p>Age</p>
              <input
                type="text"
                className="bg-white rounded-md border-[1px] border-[#1F4694] p-3 w-full"
              />
            </div>
            <div className="w-full xl:w-[35%]">
              <p>Admission Required in Class </p>
              <input
                type="text"
                className="bg-white rounded-md border-[1px] border-[#1F4694] p-3 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center w-full mt-5 justify-between gap-3 xl:gap-0">
            <div className="w-full xl:w-[60%]">
              <p>Previous School</p>
              <input
                type="text"
                className="bg-white rounded-md border-[1px] border-[#1F4694] w-full p-3"
              />{" "}
            </div>
            <div className="w-full xl:w-[30%]">
              <p>Previous School</p>
              <input
                type="date"
                className="bg-white rounded-md border-[1px] border-[#1F4694] w-full p-3 px-3"
              />{" "}
            </div>
          </div>
          <div className="mt-10">
            <p>Siblings Information</p>
            <div className="border border-[#1F4694] rounded-md p-3 mt-5">
              <div className="flex flex-col xl:flex-row xl:items-end gap-3 xl:gap-0 justify-between">
                <p> 1. Name </p>
                <input
                  type="text"
                  className="bg-transparent border-b border-[#1F4694] w-full xl:w-[26%] p-3"
                />

                <p>Age</p>
                <input
                  type="text"
                  className="bg-white border border-[#1F4694] rounded-md p-3"
                />

                <p>DOB</p>
                <input
                  type="date"
                  className="bg-white border border-[#1F4694] rounded-md p-3"
                />
              </div>
              <div className="flex flex-col xl:flex-row mt-10 items-center justify-end gap-5">
                <Image
                  src={"/remove_btn.png"}
                  height={100}
                  width={200}
                  className="h-[30px] w-auto cursor-pointer"
                  alt="add more"
                />
                <Image
                  src={"/add_more.png"}
                  height={100}
                  width={200}
                  className="h-[30px] w-auto cursor-pointer"
                  alt="add more"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p>Personal Information</p>
            <div className="border border-[#1F4694] rounded-md p-5 mt-5">
              <div className="flex flex-col xl:flex-row gap-3 xl:gap-0 w-full">
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p className="">Father’s Name</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[60%] px-3 outline-none bg-transparent"
                  />
                </div>
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p>Mother’s Name</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[60%] px-3 outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row gap-3 xl:gap-0 w-full mt-5">
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p className="">Contact #</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[70%] px-3 outline-none bg-transparent"
                  />
                </div>
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p>Contact #</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[70%] px-3 outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row gap-3 xl:gap-0 w-full mt-5">
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p className="">Email</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[80%] px-3 outline-none bg-transparent"
                  />
                </div>
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p>Email</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[80%] px-3 outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="mt-10">
                <p>How did you come to know about our school (CSI)?</p>
                <div className="flex flex-col xl:flex-row gap-2 mt-5 xl:items-center">
                  <div className="flex  items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <p>Word of mouth</p>
                  </div>
                  <div className="flex items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <p>Flyer</p>
                  </div>
                  <div className="flex items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <p>Friend</p>
                  </div>
                  <div className="flex items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <p>Social Media</p>
                  </div>
                  <div className="flex items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <p>Website</p>
                  </div>
                  <div className="flex items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    <p>Other</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <button className="bg-[#637eb5] rounded-md w-[60%] flex justify-center py-3 mt-5 text-white">
              Submit
            </button>
          </div>
        </div>
      </section>
      <Image
        src={"/interest_formbg.png"}
        height={1500}
        width={1500}
        alt="bg"
        className="w-[100%] h-auto -top-[-10%] z-0"
      />
      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
