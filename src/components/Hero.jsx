import React from "react";
import { LuImport } from "react-icons/lu";
import benson from "../assets/profile2 (2).png"

function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold leading-none">
          AMAN <br /> JAISWAL
        </h1>
        <div className="mt-8">
          <a
            href="/Aman Jaiswal.pdf"
            target="_blank"
            className="flex items-center rounded-xl bg-lime-300 p-2 font-sans font-medium text-black hover:bg-lime-400"
            rel="noopener noreferrer"
            download
          >
            <span >Resume.pdf</span>
            <LuImport className="ml-4"/>
          </a>
          
        </div>
        <div className="w-full">
            <img src={benson} alt="Aman Jaiswal" className="mt-8 h-[35rem] w-full object-cover" />
          </div>
      </div>
    </section>
  );
}

export default Hero;
