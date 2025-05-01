"use client";

import logo from "@/public/icons/logo2.svg";
import Image from "next/image";

function Loader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="spinner-container relative h-[60px] w-[60px] md:h-[80px] md:w-[80px]">
        <Image
          src={logo}
          alt="logo"
          quality={100}
          priority={true}
          className="brightness-0 invert md:w-14"
        />
      </div>
    </div>
  );
}

export default Loader;
