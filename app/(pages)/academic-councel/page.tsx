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
        <Image
          src={"/academic_1.png"}
          height={2000}
          width={2000}
          alt="student well being"
          className="w-full h-auto object-contain"
        />
      </section>
      <section>
        <div className="bg-[#F1F1F1] w-full p-8 xl:p-20 ">
          <h1 className="text-[30px] xl:text-[52px] font-[700] text-center uppercase">
            Academic Insights councel
          </h1>
          <p className="mt-10 text-[16px] xl:text-[22px] text-center">
            Our Academic Insights Council is composed solely of leading
            educationists who advise CSI in creating, adapting and implementing
            its academic programs. Our Council members all hold a doctorate and
            bring significant expertise within education to CSI. Collectively,
            Council members engage with international discourses and best
            practices to ensure that CS's academic programs reflect the very
            best trends in schooling and education globally
          </p>
        </div>
      </section>
      <section className="px-8 xl:px-20">
        <div className="flex flex-col xl:flex-row gap-10 mt-20">
          <div className="w-full xl:w-[20%]">
            <Image
              src={"/academic_2.png"}
              height={500}
              width={500}
              alt="member"
              className="h-auto w-[90%] object-contain "
            />
          </div>
          <p className="w-full xl:w-[80%]">
            Dr. Sohail received his Ph.D in Sociology from Paris Nanterre
            University, France and joined the civil service in 1984. He has
            since been actively involved in research and teaching. He has taught
            courses at both the Paris University, France and Punjab University,
            Pakistan. He has also served as the Founding Executive Director of
            the Pakistan Institute of Trade and Development, the CPEC Centre of
            Excellence, the Social Protection Resource Center. He has also
            served as the Dean of the National Institute of Public Policy
            (NSPP), Lahore. Dr. Safdar Sohail brings vast experience of teaching
            and research to better design the co-curricular and extra-curricular
            activities present within our extended learning program so that they
            better meet the goals of developing CSI's Constellation of Character
            within our students.
          </p>
        </div>
        <div className="flex flex-col-reverse xl:flex-row gap-10 mt-20">
          <p className="w-full xl:w-[80%]">
            Dr. Shams, received his Ph.D/EdD from the world renowened Institute
            of Education, University College London (IOE-UCL), UK and his M.Sc.
            in Economic History from London School of Economics & Political
            Science (LSE), UK. Dr. Shams is globally recognized for his
            innovative methods of Teacher Training and Continuous Profession
            Development (CPD). He has been providing technical advice to
            International Development Partners such as USAID, FCDO, ADB and
            British Council. He is known for his groundbreaking work to improve
            learning outcomes of students in Pakistan, Afghanistan, Nepal,
            Kyrgyzstan, Philippines, South Sudan and United Kingdom (UK) Не
            brings invaluable experience of Teaching and Learning (T&L)
            methodologies and practices to CSI and helps CSI to better train its
            team of teachers and improve the learning environment of students
            within the classrooms.
          </p>
          <div className="w-full xl:w-[20%]">
            <Image
              src={"/academic_3.png"}
              height={500}
              width={500}
              alt="member"
              className="h-auto w-[90%] object-contain "
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-10 mt-20">
          <div className="w-full xl:w-[20%]">
            <Image
              src={"/academic_4.png"}
              height={500}
              width={500}
              alt="member"
              className="h-auto w-full xl:w-[90%] object-contain "
            />
          </div>
          <p className="w-full xl:w-[80%]">
            Dr. Shahzad, received her Ph.D from Deakin University, Australia and
            is a known expert on the techniques of designing student
            assessments, and the preparation of cuttig edge teaching and
            supplimatery materials that support students to better acquire
            knowledge and skills. Dr Shahazad has been working on educaton
            projects in Pakistan, Afghanistan and Australia. She has been
            associated with Institute of Social and Policy Science (I-SAPS) on a
            variety of projects dealing with education sector reforms. She is
            known for her work on Professional Autonomy and Digital Assessments
            (PADA). The PADA project examined the growing role of EdTech in
            educational assessments and its impact on the professional practices
            and autonomy of teachers. The project generated contextualised
            evidence from four different countries in North and Central America,
            Europe and Africa. She brings vast experience and strategic guidance
            for designing and delivering cutting edge student assessment tools
            to CSI. Through her expert advice we ensure that our students'
            learning and academic development is always accurately and
            effectively gauged.
          </p>
        </div>
      </section>

      <footer className="mt-[250px]">
        <Footer />
      </footer>
    </div>
  );
}
