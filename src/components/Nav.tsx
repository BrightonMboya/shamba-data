import React, { useState } from "react";
// import { RiMenu3Line } from "react-icons/ri";
// import { FaTimes } from "react-icons/fa";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="w-full z-[100]">
      <div
        onClick={() => setShowNav(!showNav)}
        className="absolute right-5 top-5 cursor-pointer z-10 md:hidden"
      >
        {showNav ? (
          <div className="text-4xl text-green font-bold">X</div>
        ) : (
          <div className="text-4xl text-green font-bold">^</div>
          // <FaTimes size={30} color="#fff" />

          // <RiMenu3Line size={30} color="#46783E" />
        )}
      </div>
      <ul
        className={
          !showNav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-[400px] bg-green flex flex-col justify-center items-center text-white font-medium text-lg gap-5"
        }
      >
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/#about">What we do</a>
        </li>
        <li>
          <a href="/zambia">Market Information</a>
        </li>
        <li>
          <a href="/careers">Careers</a>
        </li>
      </ul>

      {/* for freaking wide screens */}
      <ul className="hidden md:flex md:items-center md:justify-center md:space-x-5 md:text-lg md:h-[100px] md:bg-green text-xl text-white ">
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/#about">What we do</a>
        </li>
        <li>
          <a href="/zambia">Market Information</a>
        </li>
        <li>
          <a href="/careers">Careers</a>
        </li>
        <li>
          <button className="bg-white px-4 py-2 text-black font-semi-bold rounded-md">
            Book an Enteprise Demo
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
