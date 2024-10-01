import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import pic from "../images/photo.avif";
import {Link} from "react-scroll";

function Navbar  () {
    const [menu,setMenu]=useState(false)
    const navItems=[
    {
        id:1,
        text:"Home",
    },
    {
        id:2,
        text:"About",
    },
    {
        id:3,
        text:"Portfolio",
    },
    {
        id:4,
        text:"Experiance",
    },
    {
        id:5,
        text:"Contact",
    },
]
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
            <div className="flex justify-between items-center h-16">
                        <div className="left flex space-x-2">
                        <img className="h-12 w-12 rounded-full" src={pic} alt="" />
                        <h1 className="font-semibold text-xl cursor-pointer">Azha<span className="text-green-500 text-2xl">r</span>
                        <p className="text-sm">Web Developer</p>
                        </h1>
                        
                    </div>
                    <div className="right">
                        <ul className=" space-x-8 hidden md:flex" >
                        {
                                navItems.map(({id,text})=>(
                                    <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                                        <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active"> {text}</Link>
                                    
                                    </li>
                                ))
                            }
                        </ul>

                         <div onClick={() => setMenu(!menu)} className="md:hidden">
                        {menu ? <IoMdClose size={24}/> : <FiMenu size={24}/>}
                    </div>
                    </div>
            </div>

                {/* Mobile navevar */}
                {menu &&(

                <div className="bg-white">
                <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-4 text-xl">
                    {
                        navItems.map(({id,text})=>(
                            <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}> <Link onClick={() => setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass="active"> {text}</Link></li>
                        ))
                    }
                    </ul>
                </div>
                )}
    </div>
    </>
  )
}

export default Navbar
