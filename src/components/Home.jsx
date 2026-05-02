import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import img from "../images/azhr.png";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">

          {/* LEFT */}
          <div
            data-aos="fade-right"
            className="md:w-1/2 mt-12 md:mt-28 space-y-2 order-2 md:order-1"
          >
            <span className="text-xl">Welcome In My Feed</span>

            <div className="flex space-x-1 text-2xl md:text-3xl">
              <h1>Hello, I'm a</h1>

              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={20}
                backSpeed={50}
                loop={true}
              />
            </div>

            <br />

            <p className="text-sm md:text-md text-justify">
              A passionate Full Stack Software Developer 🚀 having an experience
              of building Web and Mobile applications with JavaScript / Reactjs
              / Nodejs / React Native and some other cool libraries and frameworks.
            </p>

            <br />

            <div className="flex flex-col space-x-2 items-center md:flex-row ">
              <Link to="Contact" smooth={true} duration={500} offset={-70}>
                <button
                  className="px-6 py-2 text-red-700 border-2 border-black rounded-lg shadow-md 
                  hover:bg-gray-100 hover:scale-105 hover:shadow-lg 
                  active:scale-95 transition-all duration-300 ease-in-out"
                >
                  Hire Me
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div
            data-aos="zoom-in"
            className="md:w-1/2 md:ml-48 mt-8 md:mt-10 order-1"
          >
            <img
              src={img}
              className="rounded-full h-[450px] md:w-[350px] mx-auto"
              alt=""
            />
          </div>

        </div>
      </div>

      <hr />
    </>
  );
};

export default Home;
