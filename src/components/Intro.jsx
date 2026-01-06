import React from "react";
import { Dot } from "lucide-react";

const Intro = () => {
    return (
        <section
        className="w-full mb-28 flex justify-center pt-10
                    sm:pt-16 md:pt-20 lg:pt-24"
        >
        {/* Card */}
        <div
            className="relative w-full mx-4 sm:mx-8 md:mx-12 lg:mx-10 bg-white shadow-2xl rounded-3xl
                    flex flex-col md:flex-row overflow-visible"
        >
            {/* LEFT: Text content */}
            <div className="flex-1 p-6 sm:p-10 md:p-16 lg:p-20 pb-32 mb-10 md:mb-0 sm:mb-0  ">
            <p className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                Heyy, I'm Isaac Oteng.
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-700">
                Fullstack
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Software Engineer
            </h2>

            <p className="text-gray-700 text-base md:text-lg lg:text-xl max-w-2xl mb-8">
                Innovative problem solver with a passion for creating secure & scalable
                solutions. Leveraging cutting-edge technologies to craft intuitive user
                experiences and robust backend systems. Let's build the future of tech
                together!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 md:px-8 md:py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300">
                Hire Me!
                </button>

                <button className="px-4 py-3 md:px-6 md:py-4 flex items-center gap-1 text-green-700 bg-green-200/60 rounded-full border border-green-300 hover:bg-green-200 transition-all duration-300">
                <Dot size={26} />
                <span className="text-sm md:text-base lg:text-lg">Available</span>
                </button>

                <a
                href="/src/assets/isaac_resume.pdf"
                download
                className="px-6 py-3 md:px-8 md:py-4 bg-green-700 text-white rounded-xl hover:opacity-90 transition-all duration-300"
                >
                Download CV
                </a>
            </div>
            </div>

            {/* RIGHT: Image */}
            <div
            className="relative flex-1 flex items-center justify-center
                        p-6 md:p-0
                        -mt-12 sm:-mt-16 md:-mt-16 mb-5"
            >
            <img
                src="./src/assets/pic.png"
                alt="Isaac Junior"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg  
                        object-contain z-10"
            />

            {/* Gradient fade */}
            
            </div>

            {/* EXPERIENCE OVERLAY — FULL WIDTH */}
            <div
            className="absolute -bottom-10 md:-bottom-10 left-1/2 -translate-x-1/2
                        w-full grid grid-cols-3 sm:grid-cols-3 gap-4
                        bg-linear-to-b from-transparent to-green-300
                        rounded-3xl p-6 shadow-lg z-30"
            >
            <div className="bg-black text-white rounded-2xl text-center p-5">
                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                3+
                </span>
                <p className="text-gray-400 text-sm md:text-base mt-1">
                Years of Experience
                </p>
            </div>

            <div className="bg-black text-white rounded-2xl text-center p-5">
                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                17+
                </span>
                <p className="text-gray-400 text-sm md:text-base mt-1">
                Completed Projects
                </p>
            </div>

            <div className="bg-black text-white rounded-2xl text-center p-5">
                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                100%
                </span>
                <p className="text-gray-400 text-sm md:text-base mt-1">
                Client Satisfaction
                </p>
            </div>
            </div>
        </div>
        </section>
    );
    };

export default Intro;
