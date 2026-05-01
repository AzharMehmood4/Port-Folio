import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      {/* Heading */}
      <h1 className="font-bold text-3xl mb-6 border-b-2 border-red-700 inline-block">
        About Me
      </h1>

      {/* Intro */}
      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Hello, I'm <span className="font-semibold text-black">Azhar</span>, a
          <span className="text-red-700 font-semibold">
            {" "}
            Full Stack Software Developer{" "}
          </span>
          specializing in both{" "}
          <span className="font-medium">
            Web and Mobile Application Development
          </span>
          .
        </p>

        <p>
          I build scalable, high-performance applications using modern
          technologies like
          <span className="font-medium">
            {" "}
            React.js, Node.js, and React Native
          </span>
          . My focus is on delivering seamless user experiences, clean
          architecture, and efficient backend systems.
        </p>

        <p>
          I am passionate about turning ideas into real-world digital products
          that are fast, responsive, and user-friendly across all platforms.
        </p>
      </div>

      {/* Education */}
      <div className="mt-8">
        <h2 className="text-red-700 font-semibold text-xl mb-2">
          🎓 Education
        </h2>
        <p className="text-gray-700">
          <span className="font-medium">BS Software Engineering</span> — Abasyn
          University
          <br />
        </p>
      </div>

      {/* Skills */}
      <div className="mt-8">
        <h2 className="text-red-700 font-semibold text-xl mb-2">
          💻 Technical Skills
        </h2>
        <p className="text-gray-700">
          <span className="font-medium">Languages:</span> JavaScript, Python
          <br />
          <span className="font-medium">Frontend (Web):</span> HTML, CSS,
          Tailwind CSS,React|Next.js
          <br />
          <span className="font-medium">Mobile Development:</span> React Native
          <br />
          <span className="font-medium">Backend:</span> Node.js, Express.js
          (REST APIs)
          <br />
          <span className="font-medium">Databases:</span> MongoDB, MySQL,
          Firebase
          <br />
          <span className="font-medium">Tools:</span> Git, GitHub, Vercel,
          Render, VS Code
        </p>
      </div>
    </div>
  );
};

export default About;
