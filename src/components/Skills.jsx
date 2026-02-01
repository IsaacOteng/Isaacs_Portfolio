import { Verified } from "lucide-react";
import React from "react";
import AnimatedOnScroll from './AnimatedOnScroll';

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

  const tools = [
    { language: "Git", level: "Experienced" },
    { language: "Docker", level: "Novice" },
    { language: "VS Code", level: "Experienced" },
    { language: "Figma", level: "Novice" },
  ];

  return (
    <section id="skills" className="mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-30">
      {/* TITLE */}
      <div className="text-center mb-12">
        <p className="text-3xl md:text-4xl text-green-700 font-bold">
          Skills & Expertise
        </p>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Proficient in modern technologies and tools
        </p>
      </div>

      {/* SKILL CATEGORIES */}
      <div
          className="grid grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-8"
      >
        {/* FRONTEND */}
        <AnimatedOnScroll className="bg-linear-to-br from-green-50 to-green-100 py-10 border-2 border-green-300 rounded-3xl hover:shadow-2xl transition-all duration-300" delay={0.05}>
          <h1 className="text-center text-green-700 text-xl md:text-2xl font-bold mb-8">
            Frontend Development
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
            {frontend.map((item, index) => (
              <div key={index} className="flex gap-3 items-start hover:scale-x-105 hover:translate-x-2 transition-all">
                <Verified color="white" fill="green" size={20} className="shrink-0" />

                <div>
                  <p className="font-bold text-base md:text-lg text-gray-800">
                    {item.language}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </AnimatedOnScroll>

        {/* BACKEND */}
        <AnimatedOnScroll className="bg-linear-to-br from-green-50 to-green-100 py-10 border-2 border-green-300 rounded-3xl hover:shadow-2xl transition-all duration-300" delay={0.12}>
          <h1 className="text-center text-green-700 text-xl md:text-2xl font-bold mb-8">
            Backend Development
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
            {backend.map((item, index) => (
              <div key={index} className="flex gap-3 items-start hover:scale-x-105 hover:translate-x-2 transition-all">
                <Verified color="white" fill="green" size={20} className="shrink-0" />

                <div>
                  <p className="font-bold text-base md:text-lg text-gray-800">
                    {item.language}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </AnimatedOnScroll>

        {/* TOOLS & PLATFORMS */}
        <AnimatedOnScroll className="bg-linear-to-br from-green-50 to-green-100 py-10 border-2 border-green-300 rounded-3xl hover:shadow-2xl transition-all duration-300" delay={0.19}>
          <h1 className="text-center text-green-700 text-xl md:text-2xl font-bold mb-8">
            Tools & Platforms
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
            {tools.map((item, index) => (
              <div key={index} className="flex gap-3 items-start hover:scale-x-105 hover:translate-x-2 transition-all">
                <Verified color="white" fill="green" size={20} className="shrink-0" />

                <div>
                  <p className="font-bold text-base md:text-lg text-gray-800">
                    {item.language}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </AnimatedOnScroll>
      </div>
    </section>
  
  );
};

export default Skills;
