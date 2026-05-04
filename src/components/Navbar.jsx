import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import pic from "../images/photo.avif";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="left flex space-x-2">
            <img className="h-12 w-12 rounded-full" src={pic} alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Azha<span className="text-red-700 text-2xl">r</span>
              <p className="text-sm text-gray-700">Software Developer</p>
            </h1>
          </div>
          <div className="right">
            <ul className=" space-x-8 hidden md:flex">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer text-gray-700"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {" "}
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoMdClose size={24} /> : <FiMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile navevar */}
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-lg z-40 transition-all duration-300 ${
            menu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenu(false)}
        />
        {/* Mobile Sidebar - Portfolio Style */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 
              transform transition-all duration-500 ease-out ${
                menu ? "translate-x-0" : "translate-x-full"
              }`}
        >
          {/* Header */}
          <div className="px-6 py-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  className="h-12 w-12 rounded-2xl object-cover ring-2 ring-gray-100"
                  src={pic}
                  alt="Azhar"
                />
                <div>
                  <h2 className="font-semibold text-2xl tracking-tight text-gray-900">
                    Azha<span className="text-red-700">r</span>
                  </h2>
                  <p className="text-sm text-gray-700">Software Developer</p>
                </div>
              </div>

              <button
                onClick={() => setMenu(false)}
                className="w-11 h-11 flex items-center justify-center text-2xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-2xl transition-all"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Navigation  */}
          <div className="px-5 py-8">
            <ul className="flex flex-col space-y-2">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={text}
                    activeClass="active"
                    smooth={true}
                    duration={700}
                    activeclass='active'
                    offset={-90}
                    onClick={() => setMenu(false)}
                    className="group flex items-center px-6 py-4 text-lg font-medium text-gray-700 
                       rounded-2xl transition-all duration-200 hover:bg-gray-50 
                       hover:text-gray-900 active:scale-[0.985] relative overflow-hidden"
                  >
                    {/* Left Accent Line */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-red-600 rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform origin-center"></div>
                    <span className="capitalize tracking-wide pl-2">
                      {text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* button */}
          <div className="absolute bottom-10 left-0 right-0 px-6">
            <Link
              to="Contact"
              smooth={true}
              duration={700}
              offset={-90}
              onClick={() => setMenu(false)}
              className="block w-full bg-gradient-to-r from-black to-gray-700 
                       hover:from-gray-800 hover:to-black  text-white 
                 font-semibold text-lg py-4 rounded-3xl text-center transition-all 
                  shadow-md hover:shadow-lg active:scale-95"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
