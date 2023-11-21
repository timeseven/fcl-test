import Image from "next/image";
import React from "react";

import logo from "@/public/logo.jpg";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center pt-16 pl-8">
        <Image src={logo} alt="logo" className="object-cover" />
      </div>
    </>
  );
};

export default Navbar;
