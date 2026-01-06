import { Verified } from "lucide-react";
import React from "react";

const Skills = () => {
  const frontend = [
    { language: "HTML", level: "Experienced" },
    { language: "CSS", level: "Experienced" },
    { language: "React", level: "Experienced" },
    { language: "Next.js", level: "Experienced" },
    { language: "JavaScript", level: "Experienced" },
    { language: "Tailwind", level: "Experienced" },
    { language: "Framer Motion", level: "Experienced" },
    { language: "Bootstrap", level: "Experienced" },
  ];

  const backend = [
    { language: "Python", level: "Experienced" },
    { language: "Django", level: "Experienced" },
    { language: "Node.js", level: "Intermediate" },
    { language: "MySQL", level: "Experienced" },
    { language: "PostgreSQL", level: "Intermediate" },
  ];

  return (
    <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-30">
      {/* TITLE */}
      <div className="text-center mb-12">
        <p className="text-3xl md:text-4xl text-green-700 font-bold">
          Skills
        </p>
      </div>

      {/* SKILL CATEGORIES */}
      <div
        className="grid grid-cols-1
                   lg:grid-cols-2
                   gap-8"
      >
        {/* FRONTEND */}
        <div className="bg-green-100 py-10 border border-green-800 rounded-3xl">
          <h1 className="text-center text-green-700 text-xl md:text-2xl font-bold mb-8">
            Frontend Development
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
            {frontend.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <Verified color="white" fill="green" />

                <p>
                  <span className="font-bold text-base md:text-lg">
                    {item.language}
                  </span>
                  <br />
                  <span className="text-gray-800 text-sm md:text-base">
                    {item.level}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className="bg-green-100 py-10 border border-green-800 rounded-3xl">
          <h1 className="text-center text-green-700 text-xl md:text-2xl font-bold mb-8">
            Backend Development
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
            {backend.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <Verified color="white" fill="green" />

                <p>
                  <span className="font-bold text-base md:text-lg">
                    {item.language}
                  </span>
                  <br />
                  <span className="text-gray-800 text-sm md:text-base">
                    {item.level}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
