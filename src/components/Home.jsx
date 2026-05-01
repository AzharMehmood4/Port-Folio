import { Link } from "react-scroll";
import React from 'react';
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaNodeJs, FaSquareFacebook, FaYoutube, } from "react-icons/fa6";
import { SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandDjango } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import img from "../images/azhr.png";
import contact from "./Contact.jsx"

const Home = () => {
  return (
    <>
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row" >
            {/* Left */}
            <div className="md:w-1/2  mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-3xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped className="text-red-700 font-bold"
                strings={["Developer","Programmer","Coder"]}
                typeSpeed={20}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.!</p>
            <br />
            <div className="flex flex-col space-x-2 items-center md:flex-row ">
  
  <Link 
    to="Contact" 
    smooth={true} 
    duration={500} 
    offset={-70}
  >
    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
      Hire Me 
    </button>
  </Link>

</div>

            </div>


            {/* right */}
            <div className="md:w-1/2 md:ml-48 mt-8 md:mt-8 order-1">
            <img src={img} className="rounded-full h-[450px] md:w-[450px] mx-auto " alt="" />
            </div>
        </div>
    </div>
    <hr className="" />
    </>
  )
}

export default Home
