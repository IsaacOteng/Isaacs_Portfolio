import {
    CircleStar,
    FileHeart,
    Handshake,
    Headset,
    UserRoundCheck
    } from "lucide-react";
    import React from "react";
import AnimatedOnScroll from './AnimatedOnScroll';

    const About = () => {
        const aboutdetails = [
        { icon: UserRoundCheck, title: "Unparalleled Technical Expertise" },
        { icon: CircleStar,     title: "Innovative Problem Solving" },
        { icon: Headset,        title: "Dedicated Client Support" },
        { icon: FileHeart,      title: "Continuous Learning" },
        { icon: Handshake,      title: "Collaborative Mindset" },
        { icon: CircleStar,     title: "Result-Oriented Approach" },
        ];

        return (
            <section id="about" className="mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-30">
            <div className="text-center mb-12 flex flex-col items-center">
                <p className="heading-bricolage text-3xl md:text-5xl text-green-700 dark:text-green-400 mb-4">
                    About <span className="font-serif-italic font-medium bg-linear-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent gradient-shift">Me</span>
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl
                              font-serif text-center max-w-4xl leading-relaxed text-gray-700 dark:text-gray-300">
                    I'm a software engineer who enjoys building practical, well-thought-out solutions. I approach each
                    project with curiosity and enthusiasm, whether I'm developing web applications, designing software systems,
                    or improving existing products.
                    What sets me apart is how I combine solid engineering skills with creative problem-solving. I don't just write
                    code, I focus on creating experiences that feel intuitive, reliable, and purposeful. Every project is an opportunity
                    to explore new ideas, refine my approach, and deliver work that goes beyond simply <span className="font-serif-italic">"working."</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
                            bg-linear-to-br from-green-400 via-green-100 to-green-400
                            dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
                            p-6 rounded-2xl">
                {aboutdetails.map((item, index) => (
                    <AnimatedOnScroll
                        key={index}
                        className="trace-border min-h-32 rounded-xl
                                   bg-white dark:bg-gray-800/80
                                   flex flex-col gap-5 justify-center items-center p-6
                                   text-center border-2 border-green-100 dark:border-gray-700
                                   hover:shadow-lg hover:shadow-green-300/30 dark:hover:shadow-green-900/30
                                   hover:scale-105 glow-green-hover cursor-pointer"
                        variant={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                        delay={index * 0.06}
                    >
                        <div className="bg-green-700 dark:bg-green-600 rounded-full p-3 text-white hover:bg-green-800 dark:hover:bg-green-700 hover:scale-110">
                            <item.icon size={28} />
                        </div>
                        <p className="font-semibold text-base md:text-lg text-gray-800 dark:text-gray-100">
                            {item.title}
                        </p>
                    </AnimatedOnScroll>
                ))}
            </div>
        </section>
        );
    };

    export default About;
