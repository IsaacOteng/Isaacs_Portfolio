import React from "react";
import pic from '../assets/pic.png'
import { Dot, ArrowRight } from "lucide-react";
import AnimatedOnScroll from './AnimatedOnScroll';

const Intro = () => {
    return (
        <section
        id="home"
        className="w-ull mb-28 flex justify-center pt-10 mx-0 sm:mx-0 md:mx-3 lg:mx-0 xl:mx-0
                    sm:pt-16 md:pt-20 lg:pt-15"
        >
        <div
            className="relative w-full mx-4 sm:mx-8 md:mx-12 lg:mx-10 bg-linear-to-br from-white via-green-50 to-green-200 shadow-2xl rounded-3xl
                    flex flex-col md:flex-row overflow-visible"
        >
            <AnimatedOnScroll className="flex-1 p-6 sm:p-10 md:p-16 lg:p-20 mb-10 md:mb-0 sm:mb-0" delay={0.05}>
                <p className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-gray-600">
                    Heyy, I'm Isaac Oteng.
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-700 mb-2">
                    Fullstack
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 ">
                    Software Engineer
                </h2>

                <p className="text-gray-700 text-base md:text-lg lg:text-xl max-w-3xl mb-8 leading-relaxed">
                    Innovative problem solver with a passion for creating secure & scalable
                    solutions. Leveraging cutting-edge technologies to craft intuitive user
                    experiences and robust backend systems. Let's build the future of tech
                    together!
                </p>

                <div className="flex flex-wrap gap-4 mb-0 sm:mb-10 md: lg: xl:">
                    <button className="px-4 py-2 md:px-6 md:py-2 bg-green-700 text-white rounded-xl hover:bg-green-800 hover:shadow-lg transition-all duration-300 font-semibold flex items-center gap-2">
                        Hire Me!
                        <ArrowRight size={20}/>
                    </button>
                    <button className="px-3 py-2 md:px-4 md:py-2 flex items-center gap-2 text-green-700 bg-green-200/60 rounded-full border border-green-300 hover:bg-green-200 transition-all duration-300 font-semibold">
                        <Dot size={12} className="animate-pulse" />
                        <span className="text-sm md:text-base lg:text-lg">Available for Projects</span>
                    </button>
                    <a
                        href="https://drive.google.com/file/d/1BZp6jggB0OTTQWXGFji6Mji18WPvhXUt/view?usp=sharing"
                        download
                        target="_blank"
                        className="px-6 py-3 md:px-8 md:py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold"
                        >
                        Download CV
                    </a>
                </div>
                </AnimatedOnScroll>

            <AnimatedOnScroll className="relative flex-1 flex items-center justify-center
                        p-6 md:p-0
                        -mt-23 sm:-mt-16 md:mt-16 lg:mt-22 xl:mt-0 mb-5" delay={0.15}>

                <img
                    src={pic}
                    alt="Isaac Junior"
                    className="w-full max-w-xs 
                                sm:w-md sm:h-md sm:max-w-md 
                                md:w-md md:h-md md:max-w-md 
                                lg:w-lg lg:h-lg lg:max-w-lg  
                                xl:w-full xl:h-md xl:max-w-lg  
                            object-contain z-10 hover:scale-105 transition-transform duration-500"
                />
                </AnimatedOnScroll>

            <div
            className="absolute -bottom-10 md:-bottom-10 left-1/2 -translate-x-1/2
                        w-full grid grid-cols-3 sm:grid-cols-3 gap-4
                        bg-linear-to-b from-transparent to-green-300
                        rounded-3xl p-6 shadow-lg z-30"
            >
                <AnimatedOnScroll className="bg-linear-to-br from-gray-800 to-black text-white rounded-2xl text-center p-5 hover:scale-105 transition-transform duration-300" delay={0.25}>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                    3+
                    </span>
                    <p className="text-gray-400 text-sm md:text-base mt-1">
                    Years of Experience
                    </p>
                </AnimatedOnScroll>

                <AnimatedOnScroll className="bg-linear-to-br from-gray-800 to-black text-white rounded-2xl text-center p-5 hover:scale-105 transition-transform duration-300" delay={0.32}>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                    17+
                    </span>
                    <p className="text-gray-400 text-sm md:text-base mt-1">
                    Completed Projects
                    </p>
                </AnimatedOnScroll>

                <AnimatedOnScroll className="bg-linear-to-br from-gray-800 to-black text-white rounded-2xl text-center p-5 hover:scale-105 transition-transform duration-300" delay={0.39}>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                    100%
                    </span>
                    <p className="text-gray-400 text-sm md:text-base mt-1">
                    Client Satisfaction
                    </p>
                </AnimatedOnScroll>
            </div>
        </div>
        </section>
    );
}

export default Intro;

