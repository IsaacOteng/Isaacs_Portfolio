import {
    CircleStar,
    FileHeart,
    Handshake,
    Headset,
    UserRoundCheck
    } from "lucide-react";
    import React from "react";
    
    const About = () => {
        const aboutdetails = [
        {
            icon: UserRoundCheck,
            title: "Unparalleled Technical Expertise",
        },
        {
            icon: CircleStar,
            title: "Innovative Problem Solving",
        },
        {
            icon: Headset,
            title: "Dedicated Client Support",
        },
        {
            icon: FileHeart,
            title: "Continuous Learning",
        },
        {
            icon: Handshake,
            title: "Collaborative Mindset",
        },
        {
            icon: CircleStar,
            title: "Result-Oriented Approach",
        },
        ];
    
        return (
            <section id="about" className="mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-30">
            {/* TEXT */}
            <div className="text-center mb-12 flex flex-col items-center">
            <p className="text-3xl md:text-4xl text-green-700 font-bold mb-4">
                About Me
            </p>
    
            <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl
                        font-serif text-center max-w-4xl leading-relaxed text-gray-700"
            >
                I’m a software engineer who enjoys building practical, well-thought-out solutions. I approach each 
                project with curiosity and enthusiasm, whether I’m developing web applications, designing software systems,
                or improving existing products.
                What sets me apart is how I combine solid engineering skills with creative problem-solving. I don’t just write
                code, I focus on creating experiences that feel intuitive, reliable, and purposeful. Every project is an opportunity
                to explore new ideas, refine my approach, and deliver work that goes beyond simply “working.”
            </p>
            </div>
    
            {/* CARDS */}
            <div
            className="grid grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-6 bg-linear-to-br from-green-400 via-green-100 to-green-400 p-6 rounded-2xl"
            >
            {aboutdetails.map((item, index) => (
                <div
                key={index}
                className="min-h-32 rounded-xl bg-white
                            flex flex-col gap-5 justify-center items-center p-6
                            text-center border-5 border-green-100 hover:border-green-400 hover:shadow-lg 
                            transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                <div className="bg-green-700 rounded-full p-3 text-white hover:bg-green-800 transition-colors">
                    <item.icon size={28} />
                </div>
    
                <p className="font-semibold text-base md:text-lg text-gray-800">
                    {item.title}
                </p>
                </div>
            ))}
            </div>
        </section>
        );
    };

    export default About;
