import React from "react";
import "./swiper.css";
import Image from "next/image";

const array = [
  {
    title: "The CSI \n Advantage",
    image: "/s_01.webp",
  },
  {
    title: "International \n Expertise",
    image: "/s_02.webp",
  },
  {
    title: "Rigorous \n Teacher \n Training",
    image: "/s_03.webp",
  },
  {
    title: "A 21st Century \n Education",
    image: "/s_04.webp",
  },
  {
    title: "World Class \n Athletics",
    image: "/s_05.webp",
  },
  {
    title: "Anchored in \n Culture and \n Values",
    image: "/s_06.webp",
  },
  {
    title: "Focused on \n  Effective \n Communication",
    image: "/s_07.webp",
  },
  {
    title: "Extended  \n Learning \n Program",
    image: "/s_08.webp",
  },
  {
    title: "Parent-school \n Community",
    image: "/s_09.webp",
  },
];
export default function Swiper() {
  const listRef = React.useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 450, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -450, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };
  return (
    <ul ref={listRef} className="overflow-hidden">
      <Image
        src={"/CaretLeft.png"}
        height={50}
        width={50}
        alt="left"
        className="absolute top-[50%] left-[28.8%] cursor-pointer z-[1000]"
        onClick={scrollLeft}
      />
      <Image
        src={"/CaretRight.png"}
        height={50}
        width={50}
        alt="left"
        className="absolute top-[50%] left-[97%] cursor-pointer z-[1000]"
        onClick={scrollRight}
      />
      {array.map((item, index) => (
        <li key={index}>
          <div className="border border-black bg-white rounded mr-[50px]">
            <Image
              alt="image"
              src={item.image}
              height={500}
              width={500}
              className="w-full max-h-[260px] h-auto object-contain mt-20"
            />
            <div className="px-10 mt-10 w-full flex flex-col items-start ">
              <div className="h-[200px]">
                {item.title.split("\n").map((line, i) => (
                  <h1
                    key={i}
                    className="font-bold text-black text-[30px] text-start "
                  >
                    {line}
                  </h1>
                ))}
              </div>
              <button className="bg-[#028676] rounded-full text-white px-10 py-3 mb-20">
                SEE MORE
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
