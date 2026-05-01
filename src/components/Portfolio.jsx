import React from 'react';
import javscript from "../images/JavaScript-Emblem.png";
import bootstrap from "../images/bootstap.png";
import css from "../images/css.jpg";
import html from "../images/html.png";
import java from "../images/java.png";
import react from "../images/reactjs.png";
import tailwind from "../images/tailwind_css.png";

const Portfolio = () => {

  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      description: "Projects built using HTML & CSS with clean structure and responsive design.",
      Link: "https://github.com/Azharmehmod/Food-Store"
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      description: "Modern UI designs using advanced CSS styling and animations."
    },
    {
      id: 3,
      logo: javscript,
      name: "JavaScript",
      description: "Interactive web applications built using JavaScript logic and DOM manipulation."
    },
    {
      id: 4,
      logo: react,
      name: "React JS",
      description: "Dynamic and scalable frontend apps built with React.",
      Link: "https://github.com/Azharmehmod/Shopsy"
    },
    {
      id: 5,
      logo: tailwind,
      name: "Tailwind CSS",
      description: "Responsive UI designs using utility-first Tailwind CSS framework.",
      Link: "https://github.com/Azharmehmod/Landing-page"
    },
    {
      id: 6,
      logo: bootstrap,
      name: "Bootstrap",
      description: "Responsive layouts using Bootstrap components and grid system."
    },
  ];

  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center md:text-left">
        Projects
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {cardItem.map(({ id, logo, name, description, Link }) => (
          <div
            key={id}
            className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
          >

            {/* Image Center */}
            <div className="w-24 h-24 flex items-center justify-center mb-4">
              <img
                src={logo}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 capitalize">
              {name}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-3 mb-6">
              {description}
            </p>

            {/* Button */}
            {Link ? (
              <a
                href={Link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto w-full"
              >
                <button  className="w-full py-3 rounded-xl text-white font-semibold 
                       bg-gradient-to-r from-black to-gray-700 
                       hover:from-gray-800 hover:to-black 
                       transition duration-5000 shadow-md hover:shadow-lg">
                  Live Demo
                </button>
              </a>
            ) : (
              <button
                disabled
                className="w-full bg-gray-300 text-gray-600 py-2 rounded-xl cursor-not-allowed"
              >
                No Demo
              </button>
            )}

          </div>
        ))}

      </div>
    </div>
  );
};

export default Portfolio;
