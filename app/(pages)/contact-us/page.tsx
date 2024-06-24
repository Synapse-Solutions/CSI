"use client";
import Footer from "@/app/sharecomponents/Footer";
import Map from "@/app/sharecomponents/Map";
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
      <div className="h-[120px]"></div>
      <section className="px-[10%] mt-[5%] text-[#1F4694]">
        <div className="flex justify-between gap-10">
          <div className="border border-[#1F4694] rounded-md p-10 w-1/2">
            <>
              <div className="">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#d2daea] rounded-md w-full p-3"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-5">
                  <div className="w-1/2">
                    <p>Email</p>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="bg-[#d2daea] rounded-md w-full p-3"
                    />
                  </div>
                  <div className="w-1/2">
                    <p>Phone Number</p>
                    <input
                      type="number"
                      placeholder="Enter Number"
                      className="bg-[#d2daea] rounded-md w-full p-3"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p>Message</p>
                <div className="flex items-center gap-5">
                  <textarea
                    rows={3}
                    className="bg-[#d2daea] rounded-md w-full p-3"
                  ></textarea>
                </div>
              </div>
            </>

            <button className="bg-[#637eb5] rounded-md px-10 flex justify-center py-3 mt-5 text-white">
              Submit
            </button>
          </div>
          <div className="w-1/2">
            <h1 className="font-[700] text-[30px] 2xl:text-[45px]">
              Contact Us!
            </h1>
            <p className="mt-5">
              We'd love to hear from you! Whether you have questions, need
              information, or want to schedule a visit, our team is here to
              assist you. Reach out to us via phone, email, or the contact form
              to the left, and we'll get back to you promptly.{" "}
            </p>
            <div className="mt-10">
              <div className="flex items-center gap-2">
                <div className="h-[30px] w-[30px] bg-[#009c93] p-2 rounded-full flex items-center justify-center">
                  <Image
                    src={"/phone_icon.png"}
                    height={25}
                    width={25}
                    alt="phone"
                  />
                </div>
                <p>+92 300 21 11 274, +92 310 11 11 274</p>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <div className="h-[30px] w-[30px] bg-[#009c93] p-2 rounded-full flex items-center justify-center">
                  <Image
                    src={"/mail_icon.png"}
                    height={25}
                    width={25}
                    alt="phone"
                  />
                </div>
                <p>info@csi.edu.pk</p>{" "}
              </div>
              <div className="flex items-center gap-2 mt-5">
                <div className="h-[30px] w-[30px] bg-[#009c93] p-2 rounded-full flex items-center justify-center">
                  <Image
                    src={"/location_icon.png"}
                    height={25}
                    width={25}
                    alt="phone"
                  />
                </div>
                <p>Head Office, 8 KM, West Canal Road Lahore, Pakistan</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <Map />
      </section>
      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
