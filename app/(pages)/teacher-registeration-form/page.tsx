"use client";
import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";

import { uploadToS3 } from "@/app/service/upload-resume";

export default function page() {
<<<<<<< HEAD



  const { register, handleSubmit, reset, setValue} = useForm();


  const sendEmail = async (data: any) => {

    // const formData = new FormData();

    // formData.append("data", JSON.stringify(data));
    // formData.append("resume", data.resume[0]); 

    const resume_url = await uploadToS3(data.resume[0], data.resume[0].name);

    data.resume_url = resume_url;
    data.resume_file_name = data.resume[0].name;

    try {
      const response = await fetch("/api/teacher-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:  JSON.stringify(data)
      });

   
      if (response.ok) {
      
        toast('Thank you for contacting us !',
        {
          icon: '🤗',
          style: {
            borderRadius: '10px',
            background: '#122749',
            color: '#fff',
          },
        }
      );
       
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

=======
>>>>>>> 7ad212ff1a696a2b72c5a1c42a8b35b3444eb189
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
  const handleAdd = (e: any) => {
    e.preventDefault();
    let updatedArray = [...educationDetails];
    updatedArray.push({
      qualification: "",
      institute: "",
      board: "",
      marks: "",
    });
    setEducationDetails(updatedArray);
  };
  const handleAddExperience = (e: any) => {
    e.preventDefault();
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
            backgroundImage: "url(/teacher_traning_bg.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[400px] xl:h-[700px] w-screen relative"
        >
          <div className="text-white hidden xl:block absolute bottom-[30%] right-[15%]">
            <h1 className="text-[20px] xl:text-[35px] font-bold">
              Our Teacher’s Training
            </h1>
            <p className="text-[20px] xl:text-[35px]">Empowerment Process</p>
          </div>
        </div>
      </section>
      <section className="px-[10%] hidden xl:block">
        <div className="relative text-black text-[16px] xl:text-[22px] font-bold">
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
<<<<<<< HEAD
        <form onSubmit={handleSubmit(sendEmail)} className="border border-[#1F4694] rounded-md p-10">
          <div className="flex items-center justify-between">
=======
        <div className="border border-[#1F4694] rounded-md p-5 xl:p-10">
          <div className="flex flex-col xl:flex-row gap-3 xl:gap-0 xl:items-center justify-between">
>>>>>>> 7ad212ff1a696a2b72c5a1c42a8b35b3444eb189
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedForm(1)}
                className="bg-[#028676] text-white border border-[#1F4694] rounded-full h-[40px] w-[40px] flex items-center justify-center"
              >
                1
              </button>
              <p>General Details</p>
              <div className="h-[1px] w-[100px] bg-[#1F4694] hidden xl:block"></div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedForm(2)}
                className="bg-[#028676] text-white border border-[#1F4694] rounded-full h-[40px] w-[40px] flex items-center justify-center"
              >
                2
              </button>
              <p>Education Details</p>
              <div className="h-[1px] w-[100px] bg-[#1F4694] hidden xl:block"></div>
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
                <div className="flex flex-col xl:flex-row items-center gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
<<<<<<< HEAD
                    className="bg-[#d2daea] rounded-md w-1/2 p-3"
                    {...register("teacher_first_name")}
=======
                    className="bg-[#d2daea] rounded-md w-full xl:w-1/2 p-3"
>>>>>>> 7ad212ff1a696a2b72c5a1c42a8b35b3444eb189
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
<<<<<<< HEAD
                    className="bg-[#d2daea] rounded-md w-1/2 p-3"
                    {...register("teacher_last_name")}
=======
                    className="bg-[#d2daea] rounded-md w-full xl:w-1/2 p-3"
>>>>>>> 7ad212ff1a696a2b72c5a1c42a8b35b3444eb189
                  />
                </div>
              </div>
              <div className="mt-5">
                <p>Father’s Name</p>
                <div className="flex flex-col xl:flex-row items-center gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
<<<<<<< HEAD
                    className="bg-[#d2daea] rounded-md w-1/2 p-3"
                    {...register("father_first_name")}
=======
                    className="bg-[#d2daea] rounded-md w-full xl:w-1/2 p-3"
>>>>>>> 7ad212ff1a696a2b72c5a1c42a8b35b3444eb189
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
<<<<<<< HEAD
                    className="bg-[#d2daea] rounded-md w-1/2 p-3"
                    {...register("father_last_name")}
=======
                    className="bg-[#d2daea] rounded-md w-full xl:w-1/2 p-3"
>>>>>>> 7ad212ff1a696a2b72c5a1c42a8b35b3444eb189
                  />
                </div>
              </div>
              <div className="mt-5">
                <p>Date of Birth</p>
                <div className="flex items-center gap-5">
                  <input
                    type="date"
                    className="bg-[#d2daea] rounded-md w-full p-3"
                    {...register("date_of_birth")}
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
                    {...register("languages_known")}
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
                    {...register("first_language")}
                  />
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[18px] font-[600]">
                  English Language Proficiency*
                </p>
<<<<<<< HEAD
                <div className="flex items-center gap-3 mt-5">
                  <p className="font-[600] w-[100px] mr-10">Reading</p>
                  <div className="flex items-center gap-2">
      <input type="radio" value="proficient" className="bg-[#d2daea]" {...register("reading_proficiency")} />
      <p>Proficient</p>
    </div>
    <div className="flex items-center gap-2">
      <input type="radio" value="intermediate" className="bg-[#d2daea]" {...register("reading_proficiency")} />
      <p>Intermediate</p>
    </div>
    <div className="flex items-center gap-2">
      <input type="radio" value="beginner" className="bg-[#d2daea]" {...register("reading_proficiency")} />
      <p>Beginner</p>
    </div>
=======
                <div className="flex flex-col xl:flex-row xl:items-center gap-3 mt-5">
                  <p className="font-[600] w-[100px] mr-10">Reading</p>{" "}
                  <div className="flex items-center gap-3">
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
>>>>>>> 7ad212ff1a696a2b72c5a1c42a8b35b3444eb189
                </div>
                <div className="flex flex-col xl:flex-row xl:items-center gap-3 mt-5">
                  <p className="font-[600] w-[100px] mr-10">Writing</p>
<<<<<<< HEAD
                  <div className="flex items-center gap-2">
      <input type="radio" value="proficient" className="bg-[#d2daea]" {...register("writing_proficiency")} />
      <p>Proficient</p>
    </div>
    <div className="flex items-center gap-2">
      <input type="radio" value="intermediate" className="bg-[#d2daea]" {...register("writing_proficiency")} />
      <p>Intermediate</p>
    </div>
    <div className="flex items-center gap-2">
      <input type="radio" value="beginner" className="bg-[#d2daea]" {...register("writing_proficiency")} />
      <p>Beginner</p>
    </div>
=======
                  <div className="flex items-center gap-3">
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
>>>>>>> 7ad212ff1a696a2b72c5a1c42a8b35b3444eb189
                </div>
                <div className="flex flex-col xl:flex-row xl:items-center gap-3 mt-5">
                  <p className="font-[600] w-[100px] mr-10">Speaking</p>
<<<<<<< HEAD
                  <div className="flex items-center gap-2">
      <input type="radio" value="proficient" className="bg-[#d2daea]" {...register("speaking_proficiency")} />
      <p>Proficient</p>
    </div>
    <div className="flex items-center gap-2">
      <input type="radio" value="intermediate" className="bg-[#d2daea]" {...register("speaking_proficiency")} />
      <p>Intermediate</p>
    </div>
    <div className="flex items-center gap-2">
      <input type="radio" value="beginner" className="bg-[#d2daea]" {...register("speaking_proficiency")} />
      <p>Beginner</p>
    </div>
=======
                  <div className="flex items-center gap-3">
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
>>>>>>> 7ad212ff1a696a2b72c5a1c42a8b35b3444eb189
                </div>
                <div className="flex flex-col xl:flex-row xl:items-center gap-3 mt-5">
                  <p className="font-[600] w-[100px] mr-10">Listening</p>
<<<<<<< HEAD
                  <div className="flex items-center gap-2">
      <input type="radio" value="proficient" className="bg-[#d2daea]" {...register("listening_proficiency")} />
      <p>Proficient</p>
    </div>
    <div className="flex items-center gap-2">
      <input type="radio" value="intermediate" className="bg-[#d2daea]" {...register("listening_proficiency")} />
      <p>Intermediate</p>
    </div>
    <div className="flex items-center gap-2">
      <input type="radio" value="beginner" className="bg-[#d2daea]" {...register("listening_proficiency")} />
      <p>Beginner</p>
    </div>
=======
                  <div className="flex items-center gap-3">
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
>>>>>>> 7ad212ff1a696a2b72c5a1c42a8b35b3444eb189
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
                      {...register(`education.${index}.qualification`)}
                    />
                  </div>
                  <div>
                    <p>Institute</p>
                    <input
                      type="text"
                      placeholder="Enter Institute"
                      className="bg-[#d2daea] rounded-md p-3"
                      {...register(`education.${index}.institute`)}
                    />
                  </div>
                  <div>
                    <p>Board</p>
                    <input
                      type="text"
                      placeholder="Enter Board"
                      className="bg-[#d2daea] rounded-md p-3"
                      {...register(`education.${index}.board`)}
                    />
                  </div>
                  <div>
                    <p>Marks/Grade</p>
                    <input
                      type="text"
                      placeholder="Enter Marks"
                      className="bg-[#d2daea] rounded-md p-3"
                      {...register(`education.${index}.marks`)}
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
                      {...register(`experience.${index}.organization`)}
                    />
                  </div>
                  <div>
                    <p>Position/Designation</p>
                    <input
                      type="text"
                      placeholder="Enter Your Position/Designation"
                      className="bg-[#d2daea] rounded-md p-3"
                      {...register(`experience.${index}.position`)}
                    />
                  </div>
                  <div>
                    <p>Tenure</p>
                    <input
                      type="text"
                      placeholder="Enter the tenure time spent"
                      className="bg-[#d2daea] rounded-md p-3"
                      {...register(`experience.${index}.tenure`)}
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
                  {...register("interests")}
                />
              </div>
              <div className="mt-5">
                <p>Upload Updated Resume </p>
                <input type="file"  {...register("resume")} />
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

            {selectedForm === 3 ? ( <button type="submit" className="bg-[#637eb5] rounded-md w-[60%] flex justify-center py-3 mt-5 text-white">
              Submit
            </button>) : 
            
            <button  onClick={(e) => {e.preventDefault(); setSelectedForm(prev => prev + 1)}} className="bg-[#637eb5] rounded-md w-[60%] flex justify-center py-3 mt-5 text-white">
              Next
            </button>
            }
           
          </div>
        </form>
      </section>
      <footer className="mt-[370px]">
        <Footer />
      </footer>
    </div>
  );
}
