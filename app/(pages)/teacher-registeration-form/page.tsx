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
      <section className="px-[10%] mt-[5%] text-[#1F4694]">
        <h1 className="text-[35px] font-bold text-center ">
          Teacher’s Registration Form
        </h1>
        <div className="border border-[#1F4694] rounded-md p-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedForm(1)}
                className="bg-[#028676] text-white border border-[#1F4694] rounded-full h-[40px] w-[40px] flex items-center justify-center"
              >
                1
              </button>
              <p>General Details</p>
              <div className="h-[1px] w-[100px] bg-[#1F4694]"></div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedForm(2)}
                className="bg-[#028676] text-white border border-[#1F4694] rounded-full h-[40px] w-[40px] flex items-center justify-center"
              >
                2
              </button>
              <p>Education Details</p>
              <div className="h-[1px] w-[100px] bg-[#1F4694]"></div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedForm(3)}
                className="bg-[#028676] text-white border border-[#1F4694] rounded-full h-[40px] w-[40px] flex items-center justify-center"
              >
                3
              </button>
              <p>Experience Details</p>
            </div>
          </div>
          {selectedForm === 1 && (
            <>
              <div className="mt-5">
                <p>Full Name</p>
                <div className="flex items-center gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-[#d2daea] rounded-md w-1/2 p-3"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-[#d2daea] rounded-md w-1/2 p-3"
                  />
                </div>
              </div>
              <div className="mt-5">
                <p>Father’s Name</p>
                <div className="flex items-center gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-[#d2daea] rounded-md w-1/2 p-3"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-[#d2daea] rounded-md w-1/2 p-3"
                  />
                </div>
              </div>
              <div className="mt-5">
                <p>Date of Birth</p>
                <div className="flex items-center gap-5">
                  <input
                    type="date"
                    className="bg-[#d2daea] rounded-md w-full p-3"
                  />
                </div>
              </div>
              <div className="mt-5">
                <p>Languages Known</p>
                <div className="flex items-center gap-5">
                  <input
                    type="text"
                    placeholder="Language known"
                    className="bg-[#d2daea] rounded-md w-full p-3"
                  />
                </div>
              </div>
              <div className="mt-5">
                <p>First Language</p>
                <div className="flex items-center gap-5">
                  <input
                    type="text"
                    placeholder="First Language"
                    className="bg-[#d2daea] rounded-md w-full p-3"
                  />
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-[600]">
                  English Language Proficiency*
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <p className="font-[600] w-[100px] mr-10">Reading</p>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Proficient</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Intermediate</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Beginner</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <p className="font-[600] w-[100px] mr-10">Writing</p>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Proficient</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Intermediate</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Beginner</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <p className="font-[600] w-[100px] mr-10">Speaking</p>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Proficient</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Intermediate</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Beginner</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <p className="font-[600] w-[100px] mr-10">Listening</p>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Proficient</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Intermediate</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="bg-[#d2daea]" />
                    <p>Beginner</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {selectedForm === 2 && (
            <div className="mt-5">
              <p className="font-[700] text-[25px]">Education Details</p>
              {educationDetails.map((item, index) => (
                <div
                  key={index}
                  className="mt-5 flex items-center justify-between gap-5"
                >
                  <div>
                    <p>Qualifications</p>
                    <input
                      type="text"
                      placeholder="Enter Qualification"
                      className="bg-[#d2daea] rounded-md p-3"
                    />
                  </div>
                  <div>
                    <p>Institute</p>
                    <input
                      type="text"
                      placeholder="Enter Institute"
                      className="bg-[#d2daea] rounded-md p-3"
                    />
                  </div>
                  <div>
                    <p>Board</p>
                    <input
                      type="text"
                      placeholder="Enter Board"
                      className="bg-[#d2daea] rounded-md p-3"
                    />
                  </div>
                  <div>
                    <p>Marks/Grade</p>
                    <input
                      type="text"
                      placeholder="Enter Marks"
                      className="bg-[#d2daea] rounded-md p-3"
                    />
                  </div>
                  {index === educationDetails.length - 1 ? (
                    <div
                      onClick={handleRemove}
                      className="flex flex-col items-center text-[12px] justify-center cursor-pointer"
                    >
                      <Image
                        src={"/remove_icon.png"}
                        height={20}
                        width={20}
                        alt="rmove"
                      />
                      <p>Remove</p>
                    </div>
                  ) : (
                    <div className="w-[50px]" />
                  )}
                </div>
              ))}
              <button
                onClick={handleAdd}
                className="bg-[#009c93] flex items-center px-3 py-2 mt-5 text-white rounded-md gap-2"
              >
                <p>Add Row</p>
                <img
                  src="/circle_plus.png"
                  alt="plus"
                  className="h-[20px] w-[20px]"
                />
              </button>
            </div>
          )}
          {selectedForm === 3 && (
            <div className="mt-5">
              <p className="font-[700] text-[25px]">Experience</p>
              {experienceArray.map((item, index) => (
                <div
                  key={index}
                  className="mt-5 flex items-center justify-between gap-5"
                >
                  <div>
                    <p>Organization</p>
                    <input
                      type="text"
                      placeholder="Enter Organization Name"
                      className="bg-[#d2daea] rounded-md p-3"
                    />
                  </div>
                  <div>
                    <p>Position/Designation</p>
                    <input
                      type="text"
                      placeholder="Enter Your Position/Designation"
                      className="bg-[#d2daea] rounded-md p-3"
                    />
                  </div>
                  <div>
                    <p>Tenure</p>
                    <input
                      type="text"
                      placeholder="Enter the tenure time spent"
                      className="bg-[#d2daea] rounded-md p-3"
                    />
                  </div>

                  {index === educationDetails.length - 1 ? (
                    <div
                      onClick={handleRemoveExperience}
                      className="flex flex-col items-center text-[12px] justify-center cursor-pointer"
                    >
                      <Image
                        src={"/remove_icon.png"}
                        height={20}
                        width={20}
                        alt="rmove"
                      />
                      <p>Remove</p>
                    </div>
                  ) : (
                    <div className="w-[50px]" />
                  )}
                </div>
              ))}
              <button
                onClick={handleAddExperience}
                className="bg-[#009c93] flex items-center px-3 py-2 mt-5 text-white rounded-md gap-2"
              >
                <p>Add Row</p>
                <img
                  src="/circle_plus.png"
                  alt="plus"
                  className="h-[20px] w-[20px]"
                />
              </button>
              <div className="mt-5">
                <p>Interests/Talents</p>
                <input
                  type="text"
                  placeholder="Enter your Interests and Talents"
                  className="bg-[#d2daea] rounded-md p-3 w-full"
                />
              </div>
              <div className="mt-5">
                <p>Upload Updated Resume </p>
                <input type="file" className="hidden" />
                <div className="w-full bg-[#d2daea] rounded-md flex items-center justify-center h-[100px]">
                  Choose files or drag here
                </div>
              </div>
              <div className="mt-5">
                <p>Declaration*</p>
                <div className="mt-5 flex items-center gap-5">
                  <input type="checkbox" />
                  <p>
                    The information provided in this form is correct to the best
                    of my knowledge.
                  </p>
                </div>
                <div className="mt-5 flex items-start gap-5">
                  <input type="checkbox" />
                  <p>
                    In case of any information furnished by me is found to be
                    incorrect, the school has the right to take any action it
                    deems fit, including expulsion at anytime after admission.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="w-full flex justify-center">
            <button className="bg-[#637eb5] rounded-md w-[60%] flex justify-center py-3 mt-5 text-white">
              Next
            </button>
          </div>
        </div>
      </section>
      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
