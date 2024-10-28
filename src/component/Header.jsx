import React from "react";
import { IoMdGlobe } from "react-icons/io";

function Header() {
  return (
    <div className="bg-red-600 w-full h-14 text-white text-xl flex justify-center items-center gap-3  mb-12 sm:mb-20">
      <IoMdGlobe className="text-4xl" />
      <p>my travel journal.</p>
    </div>
  );
}

export default Header;
