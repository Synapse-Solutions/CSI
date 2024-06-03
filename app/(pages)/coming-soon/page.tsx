import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import HeroSection from "@/app/sharecomponents/homeHeroSection/HeroSection";
import HeroSection_CS from "@/app/sharecomponents/homeHeroSection/HeroSection_CS";
import React from "react";

export default function page() {
  return (
    <div className="text-black w-screen overflow-hidden">
      <Navbar />
      <div className="relative z-20">
        <HeroSection_CS />
      </div>
      <div className="mt-[160px] z-10">
        <Footer />
      </div>
    </div>
  );
}
