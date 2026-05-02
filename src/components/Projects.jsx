import React from 'react';
import javscript from "../images/JavaScript-Emblem.png";
import chi from "../images/chi.png"
import mind from "../images/mind.png"
import auto from "../images/auto.png"
import gts from "../images/gts.png"
import shopsy from "../images/shopsy.png"
import mirsal from "../images/mirsal.png"

const Projects = () => {

  const cardItem = [
    {
      id: 1,
      logo: auto,
      name: "autocarwindscreen",
      description: "Auto Car Windscreen is a service-based web platform that provides windscreen repair and replacement solutions by offering fast response and online booking for vehicle glass services across the UK.",
      Link: "https://autocarwindscreen.uk/"
    },
    {
      id: 2,
      logo: mirsal,
      name: "mirsal2trade",
      description: "Mirsal Dubai is an admin-based Web app that manages Vehicle Clearance Certificates (VCC) by allowing secure login, record storage.",
      Link: "https://mirsal2new.dubaitrede.ae/"
    },
    {
      id: 3,
      logo: gts,
      name: "GTS",
      description: "Gafar Technical Services is a service-based website that provides construction and technical solutions.",
      Link: "https://gafartechnical.com/"
    },
    {
      id: 4,
      logo: mind,
      name: "Mindspace",
      description: "MindSpace is a web-based wellness app that helps users improve mental health through meditation, relaxation, self-care, and AI chatbot support.",
      Link: "https://mindspace-murex.vercel.app/"
    },
    {
      id: 5,
      logo: chi,
      name: "chichi Enterprises",
      description: "ChiChiEnt is a travel agency website offering tailored solutions for vacations, adventures, business trips, and religious journeys like Umrah and Hajj.",
      Link: "https://www.chichient.com/"
    },
    {
      id: 6,
      logo: shopsy,
      name: "Shopsy",
      description: "Responsive shopsy UI designs using React+Tailwind CSS",
      Link: "https://shopsy-dusky.vercel.app/"
    },
  ];

  return (
    <>
    <div data-aos="fade-left" name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
    
      {/* Heading */}
      <h1 className=" text-gray-800 mb-10 hover:cursor-pointer text-center md:text-left font-bold text-3xl border-b-2 border-red-700 inline-block">
        Projects
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {cardItem.map(({ id, logo, name, description, Link }) => (
          <div
            data-aos="fade-up"
            data-aos-delay={id * 100}
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
    <hr/>
    </>
  );
};

export default Projects;
