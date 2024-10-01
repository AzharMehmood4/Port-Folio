import React from 'react';
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaNodeJs, FaSquareFacebook, FaYoutube, } from "react-icons/fa6";
import { SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandDjango } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import img from "../images/ktk.png";

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
            <p className="text-sm md:text-md text-justify">I'm Azhar, a Front-End Developer passionate about creating responsive, user-friendly websites. With expertise in modern web technologies, I bring designs to life with clean code and seamless interactions. I'm also expanding my skills in back-end development to offer more complete solutions. Explore my work to see how I can help bring your ideas to reality!</p>
            <br />
            {/* Social Media icons */}
            <div className="flex flex-col space-x-2 items-center md:flex-row justify-between space-y-6 md:space-y-0" >

                  <div className="space-y-2">
                      <h1 className="font-bold ">Available on</h1>
                      <ul className="flex space-x-5">
                      <li className="text-2xl cursor-pointer"><a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook />
                      </a>
                      </li>
                      <li className="text-2xl cursor-pointer"><a href="https://www.linkedin.com/" target="_blank"><FaLinkedin /></a></li>
                      <li className="text-2xl cursor-pointer"><a href="https://www.youtube.com/" target="_blank"><FaYoutube /></a></li>
                      <li className="text-2xl cursor-pointer"><a href="https://t.me/" target="_blank"><FaTelegram /></a></li>
                      </ul>
                  </div>
                  <div className="space-y-2">
                      <h1 className="font-bold">Currently Working on</h1>
                      <div className="flex space-x-5">
                        <SiMongodb className="text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                        <SiExpress className="text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                        <TbBrandDjango className="text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                        <FaNodeJs className="text-xl cursor-pointer md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                      </div>
                  </div>
            </div>
            </div>


            {/* right */}
            <div className="md:w-1/2 md:ml-48 mt-8 md:mt-20 order-1">
            <img src={img} className="rounded-full h-[450px] md:w-[450px] mx-auto " alt="" />
            </div>
        </div>
    </div>
    <hr className="" />
    </>
  )
}

export default Home
