import { Verified } from "lucide-react";
import React from "react";
import AnimatedOnScroll from './AnimatedOnScroll';

const Skills = () => {
  const frontend = [
    { language: "HTML",          level: "Experienced" },
    { language: "CSS",           level: "Experienced" },
    { language: "React",         level: "Experienced" },
    { language: "Next.js",       level: "Experienced" },
    { language: "JavaScript",    level: "Experienced" },
    { language: "Tailwind",      level: "Experienced" },
    { language: "Framer Motion", level: "Experienced" },
    { language: "Bootstrap",     level: "Experienced" },
  ];

  const backend = [
    { language: "Python",     level: "Experienced" },
    { language: "Django",     level: "Experienced" },
    { language: "Node.js",    level: "Intermediate" },
    { language: "MySQL",      level: "Experienced" },
    { language: "PostgreSQL", level: "Intermediate" },
  ];

  const tools = [
    { language: "Git",    level: "Experienced" },
    { language: "Docker", level: "Novice" },
    { language: "VS Code",level: "Experienced" },
    { language: "Figma",  level: "Novice" },
  ];

  return (
    <section id="skills" className="mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-30">
      <div className="text-center mb-12">
        <p className="heading-bricolage text-4xl md:text-5xl lg:text-6xl text-green-700 dark:text-green-400">
          Skills &amp; <span className="font-serif-italic font-medium bg-linear-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent gradient-shift">Expertise</span>
        </p>
        <p className="font-mono text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-3 tracking-tight uppercase">
          <span className="text-green-700 dark:text-green-400">/</span> Proficient in modern technologies &amp; tools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <AnimatedOnScroll
            className="bg-linear-to-br from-green-50 to-green-100
                       dark:from-gray-800 dark:to-gray-900
                       py-10 border-2 border-green-300 dark:border-gray-700
                       rounded-3xl hover:shadow-2xl hover:shadow-green-200/50 dark:hover:shadow-green-900/20
                       hover:border-green-400 dark:hover:border-green-600
                       glow-green-hover"
            delay={0.05}
        >
          <h1 className="heading-bricolage text-center text-green-700 dark:text-green-400 text-2xl md:text-3xl mb-8">
            Frontend Development
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
            {frontend.map((item, index) => (
              <div key={index} className="flex gap-3 items-start hover:translate-x-1 hover:scale-x-105">
                <Verified color="white" fill="green" size={20} className="shrink-0" />
                <div>
                  <p className="font-bold text-base md:text-lg text-gray-800 dark:text-gray-100">{item.language}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{item.level}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll
            className="bg-linear-to-br from-green-50 to-green-100
                       dark:from-gray-800 dark:to-gray-900
                       py-10 border-2 border-green-300 dark:border-gray-700
                       rounded-3xl hover:shadow-2xl hover:shadow-green-200/50 dark:hover:shadow-green-900/20
                       hover:border-green-400 dark:hover:border-green-600
                       glow-green-hover"
            delay={0.12}
        >
          <h1 className="heading-bricolage text-center text-green-700 dark:text-green-400 text-2xl md:text-3xl mb-8">
            Backend Development
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
            {backend.map((item, index) => (
              <div key={index} className="flex gap-3 items-start hover:translate-x-1 hover:scale-x-105">
                <Verified color="white" fill="green" size={20} className="shrink-0" />
                <div>
                  <p className="font-bold text-base md:text-lg text-gray-800 dark:text-gray-100">{item.language}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{item.level}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll
            className="bg-linear-to-br from-green-50 to-green-100
                       dark:from-gray-800 dark:to-gray-900
                       py-10 border-2 border-green-300 dark:border-gray-700
                       rounded-3xl hover:shadow-2xl hover:shadow-green-200/50 dark:hover:shadow-green-900/20
                       hover:border-green-400 dark:hover:border-green-600
                       glow-green-hover"
            delay={0.19}
        >
          <h1 className="heading-bricolage text-center text-green-700 dark:text-green-400 text-2xl md:text-3xl mb-8">
            Tools &amp; Platforms
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
            {tools.map((item, index) => (
              <div key={index} className="flex gap-3 items-start hover:translate-x-1 hover:scale-x-105">
                <Verified color="white" fill="green" size={20} className="shrink-0" />
                <div>
                  <p className="font-bold text-base md:text-lg text-gray-800 dark:text-gray-100">{item.language}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{item.level}</p>
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
