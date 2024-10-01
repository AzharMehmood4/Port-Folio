import React from 'react';
import css from "../images/css.jpg";
import html from "../images/html.png";
import java from "../images/java.png";
import javascript from "../images/javascript.png"
import tailwind from "../images/tailwind_css.png";
import react from "../images/reactjs.png";
import bootstrap from "../images/bootstap.png";
// import { python } from '..';
const Experiance = () => {
    const cardItem=[
        {
            id:1,
            logo:html,
            name:"html"

        },
        {
            id:2,
            logo:css,
            name:"css"

        },
        {
            id:3,
            logo:javascript,
            name:"javascript"

        },
        {
            id:4,
            logo:react,
            name:"react js"

        },
        {
            id:5,
            logo:tailwind,
            name:"tailwindCss"
            
        },
        {
            id:6,
            logo:bootstrap,
            name:"Bootstrap"
            
        },
        
        {
            id:6,
            logo:java,
            name:"java"

        },
    ]
  return (
    <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <span className="">I've 1 years of Experiance in below technologies.</span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 my-3">
            {
                cardItem.map(({ id, logo, name}) =>(
                    <div className="flex justify-center flex-col items-center border-[2px] rounded-full  md:w-[200px] md:h-[200px]  cursor-pointer hover:scale-105 duration-300 p-1" key={id}>
                        <img src={logo} className="w-[150px]  rounded-full " alt="" />
                        <div>
                            <div className="">{name}</div>
                            </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Experiance
