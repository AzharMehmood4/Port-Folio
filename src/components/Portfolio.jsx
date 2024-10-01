import React from 'react';
import javscript from "../images/JavaScript-Emblem.png";
import bootstrap from "../images/bootstap.png";
import css from "../images/css.jpg";
import html from "../images/html.png";
import java from "../images/java.png";
import react from "../images/reactjs.png";
import tailwind from "../images/tailwind_css.png";
// import { python } from '..';
const Portfolio = () => {
    const cardItem=[
        {
            id:1,
            logo:html,
            name:"html",
            description:"I have crafted a variety of impressive projects using HTML And Css both, showcasing innovation and attention to detail",
            Link: "https://github.com/Azharmehmod/Food-Store"

        },
        {
            id:2,
            logo:css,
            name:"css",
            description:"I have crafted a variety of impressive projects using CSS, showcasing innovation and attention to detail"

        },
        {
            id:3,
            logo:javscript,
            name:"javascript",
            description:"I have crafted a variety of impressive projects using Javascript, showcasing innovation and attention to detail"

        },
        {
            id:4,
            logo:react,
            name:"react js",
            description:"I have crafted a variety of impressive projects using React js, showcasing innovation and attention to detail",
            Link: "https://github.com/Azharmehmod/Shopsy"

        },        
        {
            id:5,
            logo:tailwind,
            name:"tailwindcss",
            description:"I have crafted a variety of impressive projects using Tailwindcss, showcasing innovation and attention to detail",
            Link: "https://github.com/Azharmehmod/Landing-page"

        },
        {
            id:6,
            logo:bootstrap,
            name:"bootsrtap",
            description:"I have crafted a variety of impressive projects using Bootstrap, showcasing innovation and attention to detail"

        },
        {
            id:6,
            logo:java,
            name:"java",
            description:"I have crafted a variety of impressive projects using Java, showcasing innovation and attention to detail"

        },
    ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <p className="font-semibold underline">Featured Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 my-5">
            {
                cardItem.map(({ id, logo, name, description, Link}) =>(
                    <div className="md:w-[290px] md:h-[350px] border-[2px] rounded-lg shadow-lg cursor-pointer hover:scale-105 duration-300 p-1" key={id}>
                        <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="" />
                        <div>
                            <div className="px-2 font-bold mb-2 text-xl">{name}</div>
                            <p className="px-2 text-gray-700">{description}</p>
                        </div>
                        <div className="justify-around space-x-3 py-4 px-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ">Video</button>
                            <a href={Link} target="_blank"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ">Source Code</button></a>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
