import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
}
export default function BirdCard(props: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(/${props.image}.webp)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="cursor-pointer h-[150px] xl:h-[230px] w-auto xl:w-[400px] object-contain p-5 text-white"
    >
      <h1 className="mt-2 text-[17px]">{props.title}</h1>
      <p className="text-[14px] mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        accusamus delectus quas quibusdam hic voluptatem fugit labore odit?
        Pariatur, nulla!
      </p>
      <div className="w-full text-end mt-3 flex justify-end">
        <Link href="/robins">
          <p className="bg-white text-black rounded-[30px] px-2 hover:bg-[#686262] cursor-pointer text-[12px] hover:text-white">
            Read more
          </p>
        </Link>
      </div>
    </div>
  );
}
