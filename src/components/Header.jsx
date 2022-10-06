import React from "react";
import Logo from "../assets/img/logo.svg";

// Import Components
import LoginRegister from "./LoginRegister";
import Nav from "./Nav";

// Import Icons
import { CgMenuRight } from "react-icons/cg";

function Header() {
  return (
    <header
      className="py-[30px] lg:pt-[60px]"
      data-aos="fade-in"
      data-aos-delay="800"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img src={Logo} alt="logo " />
        </a>
        <div className="hidden lg:flex gap-x-[55px] pl-[55px] w-full justify-between">
          <Nav />
          <LoginRegister />
        </div>
        {/* open Mobile Nav button */}
        <div className="lg:hidden cursor-pointer">
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
}

export default Header;
