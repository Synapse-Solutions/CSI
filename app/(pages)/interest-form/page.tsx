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
    <div className="overflow-hidden w-screen">
      <Navbar />
      <section className=" mt-20 md:mt-0">
        <div
          style={{
            backgroundImage: "url(/interest_hero_bg.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className=" h-[200px] md:h-[700px] w-screen relative  "
        ></div>
      </section>

      <section className="md:px-[10%] flex justify-center z-10 w-[80%] md:w-screen overflow-hidden text-[#000000]">
        <div className="md:border md:border-[#1F4694] md:rounded-md  md:p-10  md:bg-[#F5F9FC] w-full md:w-[80%]   ">
          <h1 className="hidden md:block  md:text-[52px]">
            Introductory <span>Line</span>
          </h1>
          <p className=" text-center px-10 md:px-0 md:text-left text-[12px] md:text-[16px]">
            Welcome to Central School International, where your child's learning
            journey starts with 3 simple steps. Experience a hassle-free
            admissions process on our website by completing the online admission
            form and our representative will reach out to you promptly.
          </p>
          <div className="flex flex-col items-center">
            <div className="bg-[#DCF1F2] rounded-md relative p-5 mt-10 md:mt-20 w-[70%]">
              <div className="w-full flex justify-center">
                <h1 className="md:text-[52px] absolute -top-[15px]   md:-top-[50px] md:left-10 text-black">
                  Step 1
                </h1>
              </div>
              <p className="text-center md:text-none text-[12px] md:text-[16px]">
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
                className="h-[100px] md:h-[150px]  w-auto absolute -right-[25px] z-10 md:-right-[70px] md:-bottom-[50px]"
              />
            </div>
            <div className="bg-[#DCF1F2] rounded-md relative p-5 mt-10 md:mt-20 w-[70%]">
              <div className="w-full flex justify-center">
                <h1 className="md:text-[52px] absolute -top-[15px] md:-top-[50px] md:left-10 text-black">
                  Step 2
                </h1>
              </div>
              <p className="text-center md:text-none text-[12px] md:text-[16px]">
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
                className="h-[100px] md:h-[150px] z-10  w-auto absolute -left-[25px] md:-left-[70px] -bottom-[50px]"
              />
            </div>
            <div className="bg-[#DCF1F2] rounded-md relative p-5 mt-10 md:mt-20 w-[70%]">
              <div className="w-full flex justify-center">
                <h1 className="md:text-[52px] absolute -top-[15px]  md:-top-[50px] md:left-10 text-black">
                  Step 3
                </h1>
              </div>
              <p className="text-center md:text-none text-[12px] md:text-[16px]">
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
                className="h-[100px] md:h-[150px] z-10 w-auto absolute  -left-[25px] md:-left-[70px] -bottom-[50px]"
              />
            </div>
          </div>
          <div className="px-10 md:px-0 mt-20">
            <p className="text-[#000000] text-[20px] md:text-[33px] text-center md:text-left   md:text-none">
              Conditions of registration
            </p>
            <p className="text-[12px] md:text-[16px] text-center md:text-left md:text-none">
              Registration does not guarantee admission. <br />
              All information and relevant documents provided must be true and
              accurate for us to process the admission. incomplete registration
              applications (forms) will not be accepted/processed. <br />
              The school reserves the right to accept/decline admission without
              giving any further information.
            </p>

            <p className=" hidden md:block text-[#000000] text-[20px] md:text-[33px] text-center md:text-left md:text-none mt-10">
              Key Suggestions
            </p>
            <p className="hidden md:block text-[12px] md:text-[16px] text-center md:text-left md:text-none">
              The admission form should be embedded within the website page,
              linked with the email <br />
              "pro@csi.edu.pk" for record maintenance
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 text-black items-center mt-10">
            <h1 className="text-[25px] md:text-[52px] font-[700] text-center">
              Our Fee <br /> <span className="font-[400]">Structure</span>
            </h1>
            <div className="bg-white border-[1px] border-[#1F4694] rounded-md p-4 mx-5">
              <p className="md:text-[22px] font-[700px]">
                Pre Nursery To KG:{" "}
                <span className="font-[400]">PKR 32000 per month</span>
              </p>
              <p className="md:text-[22px] font-[700px]">
                Grade 1 - 5:{" "}
                <span className="font-[400]">PKR 35000 per month</span>
              </p>
            </div>
          </div>
          <h1 className="text-[25px] text-center md:text-left md:text-none md:text-[52px] font-[700] uppercase mt-10 mb-5">
            Interest <br /> <span className="font-[400]">form</span>
          </h1>
          <div className="px-10 md:px-0">
            <p className="text-center md:text-left"> Child’s Name</p>
            <input
              type="text"
              className="bg-white rounded-md border-[1px] border-[#1F4694] w-full py-3"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center  md:justify-between mt-5 w-full">
            <div className="justify-center">
              <p className="text-center md:text-left">Gender</p> {" "}
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
            <div className="mt-4 md:mt-0 w-[70%] md:w-[35%]">
              <p className="text-center md:text-left">Age</p>
              <input
                type="text"
                className="bg-white rounded-md border-[1px] border-[#1F4694] py-3 w-full"
              />
            </div>
            <div className="mt-4 md:mt-0  w-[70%] md:w-[35%]">
              <p className="text-center md:text-left">
                Admission Required in Class
              </p>
              <input
                type="text"
                className="bg-white rounded-md border-[1px] border-[#1F4694] py-3 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full mt-5 justify-center  md:justify-between">
            <div className="w-[70%] md:w-[60%]">
              <p className="text-center  md:text-left">Previous School</p>
              <input
                type="text"
                className="bg-white rounded-md border-[1px] border-[#1F4694] w-full py-3"
              />{" "}
            </div>
            <div className="mt-4 md:mt-0 w-[70%] md:w-[30%]">
              <p className="text-center md:text-left">Previous School</p>
              <input
                type="date"
                className="bg-white rounded-md border-[1px] border-[#1F4694] w-full py-3 px-3"
              />{" "}
            </div>
          </div>
          <div className=" mt-10">
            <p className="text-center md:text-left">Siblings Information</p>
            <div className="flex flex-col md:flex-none  border border-[#1F4694] rounded-md p-3 mt-5">
              <div className="flex flex-col md:flex-row items-center md:items-end justify-between">
                <p> 1. Name </p>
                <input
                  type="text"
                  className="bg-transparent border-b border-[#1F4694] w-[26%]"
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
              <div className="flex mt-10 items-center justify-end gap-5">
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
              <div className="flex w-full">
                <div className="flex w-1/2 items-end">
                  <p className="">Father’s Name</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-[60%] "
                  />
                </div>
                <div className="flex w-1/2 items-end">
                  <p>Mother’s Name</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-[60%]"
                  />
                </div>
              </div>
              <div className="flex w-full mt-5">
                <div className="flex w-1/2 items-end">
                  <p className="">Contact #</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-[70%] "
                  />
                </div>
                <div className="flex w-1/2 items-end">
                  <p>Contact #</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-[70%]"
                  />
                </div>
              </div>
              <div className="flex w-full mt-5">
                <div className="flex w-1/2 items-end">
                  <p className="">Email</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-[80%] "
                  />
                </div>
                <div className="flex w-1/2 items-end">
                  <p>Email</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-[80%]"
                  />
                </div>
              </div>
              <div className="mt-10">
                <p>How did you come to know about our school (CSI)?</p>
                <div className="flex gap-2 mt-5 items-center">
                  <div className="flex items-center gap-3">
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
        className="hidden md:block w-[100%] h-auto -top-[-10%] z-0"
      />
      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
