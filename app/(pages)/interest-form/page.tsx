"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

export default function page() {
  const { register, handleSubmit, reset, setValue } = useForm();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const sendEmail = async (data: any) => {
    console.log(data);

    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast("Thank you for your interest!", {
          icon: "🤗",
          style: {
            borderRadius: "10px",
            background: "#122749",
            color: "#fff",
          },
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const [siblingDetails, setSiblingDetails] = useState([
    {
      name: "",
      age: "",
      date_of_birth: "",
    },
  ]);

  const handleAddSiblings = (e: any) => {
    e.preventDefault();
    let updatedArray = [...siblingDetails];
    updatedArray.push({
      name: "",
      age: "",
      date_of_birth: "",
    });
    setSiblingDetails(updatedArray);
  };

  const handleRemoveSiblings = () => {
    let updatedArray = [...siblingDetails];
    updatedArray.pop();
    setSiblingDetails(updatedArray);
  };

  // const [selectedForm, setSelectedForm] = useState(1);
  // const [educationDetails, setEducationDetails] = useState([
  //   {
  //     qualification: "",
  //     institute: "",
  //     board: "",
  //     marks: "",
  //   },
  // ]);
  // const [experienceArray, setExperienceArray] = useState([
  //   {
  //     organization: "",
  //     position: "",
  //     tenure: "",
  //   },
  // ]);

  // const handleRemove = () => {
  //   let updatedArray = [...educationDetails];
  //   updatedArray.pop();
  //   setEducationDetails(updatedArray);
  // };
  // const handleRemoveExperience = () => {
  //   let updatedArray = [...experienceArray];
  //   updatedArray.pop();
  //   setExperienceArray(updatedArray);
  // };
  // const handleAdd = () => {
  //   let updatedArray = [...educationDetails];
  //   updatedArray.push({
  //     qualification: "",
  //     institute: "",
  //     board: "",
  //     marks: "",
  //   });
  //   setEducationDetails(updatedArray);
  // };
  // const handleAddExperience = () => {
  //   let updatedArray = [...experienceArray];
  //   updatedArray.push({
  //     organization: "",
  //     position: "",
  //     tenure: "",
  //   });
  //   setExperienceArray(updatedArray);
  // };
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <section data-aos="fade-down">
        <div
          style={{
            backgroundImage: "url(/interest_hero_bg.webp)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[350px] xl:h-[700px] w-screen relative"
        ></div>
      </section>

      <section className="px-[10%] flex mt-[5%] justify-center z-10 w-screen text-[#000000]">
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="border border-[#1F4694] rounded-md p-10  bg-[#F5F9FC] w-full xl:w-[80%]   "
        >
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
                src={"/right_arrow.webp"}
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
                An interview with the principal or the relevant section head is
                scheduled on the day the admission assessment is conducted.
              </p>
              <Image
                src={"/left_arrow.webp"}
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
                After completing the above steps, the school office will contact
                you regarding the status of your child's application. Please
                allow 1-3 business days from the time your admission assessment
                and interview has been processed to receive an admission
                decision.
              </p>
              <Image
                src={"/right_arrow.webp"}
                height={200}
                width={200}
                alt="arrow"
                className="h-[150px] w-auto absolute -right-[70px] -bottom-[50px]"
              />
            </div>
          </div>
          <div className="mt-20">
            <p className="text-[#000000] text-[33px]">
              Conditions of registration
            </p>
            <p>
              • Registration does not guarantee admission. <br />
              • All information and relevant documents provided must be true and
              accurate for us to process the admission. incomplete registration
              applications (forms) will not be accepted/processed. <br />• The
              school reserves the right to accept/decline admission without
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
                <span className="font-[400]">PKR 32,000 per month</span>
              </p>
              <p className="text-[22px] font-[700px]">
                Grade 1 - 5:{" "}
                <span className="font-[400]">PKR 35,000 per month</span>
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
              {...register("child_name")}
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
                    value="male"
                    {...register("gender")}
                  />
                  <p>Male</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="html"
                    value="female"
                    {...register("gender")}
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
                {...register("age")}
              />
            </div>
            <div className="w-full xl:w-[35%]">
              <p>Admission Required in Class </p>
              <input
                type="text"
                className="bg-white rounded-md border-[1px] border-[#1F4694] p-3 w-full"
                {...register("class_admission")}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center w-full mt-5 justify-between gap-3 xl:gap-0">
            <div className="w-full xl:w-[60%]">
              <p>Previous School</p>
              <input
                type="text"
                className="bg-white rounded-md border-[1px] border-[#1F4694] w-full p-3"
                {...register("previous_school")}
              />{" "}
            </div>
            <div className="w-full xl:w-[30%]">
              <p>Date of Birth</p>
              <input
                type="date"
                className="bg-white rounded-md border-[1px] border-[#1F4694] w-full p-3 px-3"
                {...register("date_of_birth")}
              />{" "}
            </div>
          </div>
          <div className="mt-10">
            <p>Siblings Information</p>
            <div className="border border-[#1F4694] rounded-md p-3 mt-5">
              {siblingDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col xl:flex-row xl:items-end gap-3 xl:gap-0 justify-between mt-2"
                >
                  <p> {index + 1}. Name </p>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#1F4694] w-full xl:w-[26%] p-3"
                    {...register(`sibling.${index}.name`)}
                  />

                  <p>Age</p>
                  <input
                    type="text"
                    className="bg-white border border-[#1F4694] rounded-md p-3"
                    {...register(`sibling.${index}.age`)}
                  />

                  <p>DOB</p>
                  <input
                    type="date"
                    className="bg-white border border-[#1F4694] rounded-md p-3"
                    {...register(`sibling.${index}.date_of_birth`)}
                  />
                </div>
              ))}
              <div className="flex flex-col xl:flex-row mt-10 items-center justify-end gap-5">
                <Image
                  src={"/remove_btn.webp"}
                  height={100}
                  width={200}
                  className="h-[30px] w-auto cursor-pointer"
                  alt="add more"
                  onClick={handleRemoveSiblings}
                />
                <Image
                  src={"/add_more.webp"}
                  height={100}
                  width={200}
                  className="h-[30px] w-auto cursor-pointer"
                  alt="add more"
                  onClick={handleAddSiblings}
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
                    {...register("father_name")}
                  />
                </div>
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p>Mother’s Name</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[60%] px-3 outline-none bg-transparent"
                    {...register("mother_name")}
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row gap-3 xl:gap-0 w-full mt-5">
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p className="">Contact #</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[70%] px-3 outline-none bg-transparent"
                    {...register("father_contact")}
                  />
                </div>
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p>Contact #</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[70%] px-3 outline-none bg-transparent"
                    {...register("mother_contact")}
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row gap-3 xl:gap-0 w-full mt-5">
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p className="">Email</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[80%] px-3 outline-none bg-transparent"
                    {...register("father_email")}
                  />
                </div>
                <div className="flex flex-col xl:flex-row w-full xl:w-1/2 xl:items-end">
                  <p>Email</p>
                  <input
                    type="text"
                    className="border-b border-[#1F4694] w-full xl:w-[80%] px-3 outline-none bg-transparent"
                    {...register("mother_email")}
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
                      value="Word of Mouth"
                      {...register("know_about")}
                    />
                    <p>Word of mouth</p>
                  </div>
                  <div className="flex items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      value="Flyer"
                      {...register("know_about")}
                    />
                    <p>Flyer</p>
                  </div>
                  <div className="flex items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      value="Friend"
                      {...register("know_about")}
                    />
                    <p>Friend</p>
                  </div>
                  <div className="flex items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      value="Social Media"
                      {...register("know_about")}
                    />
                    <p>Social Media</p>
                  </div>
                  <div className="flex items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      id="html"
                      value="website"
                      {...register("know_about")}
                    />
                    <p>Website</p>
                  </div>
                  <div className="flex items-center gap-3">
                     {" "}
                    <input
                      type="radio"
                      id="html"
                      value="other"
                      {...register("know_about")}
                    />
                    <p>Other</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <button
              type="submit"
              className="bg-[#637eb5] rounded-md w-[60%] flex justify-center py-3 mt-5 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <Image
        src={"/interest_formbg.webp"}
        height={1500}
        width={1500}
        alt="bg"
        className="w-[100%] h-auto -top-[-10%] z-0"
      />
      <footer className="mt-[0px]">
        <Footer />
      </footer>
    </div>
  );
}
