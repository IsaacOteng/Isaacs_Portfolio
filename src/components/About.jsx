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
            icon: Handshake,
            title: "Collaborative Mindset",
        },
        ];
    
        return (
            <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-30">
            {/* TEXT */}
            <div className="text-center mb-12 flex flex-col items-center">
            <p className="text-3xl md:text-4xl text-green-700 font-bold mb-4">
                About Me
            </p>
    
            <p
                className="text-base sm:text-lg md:text-xl lg:text-xl
                        font-serif text-center max-w-4xl leading-relaxed"
            >
                My expertise in cybersecurity ensures that every solution I deliver is
                not just functional, but also fortified against potential threats. I
                approach each project with enthusiasm, whether it's developing web
                applications, creating software solutions, or implementing security
                measures. What sets me apart is my blend of technical proficiency and
                creative problem solving. I don't just write code; I craft experiences.
                Each project is an opportunity to explore new possibilities and deliver
                solutions that exceed expectations.
            </p>
            </div>
    
            {/* CARDS */}
            <div
            className="grid grid-cols-1
                        lg:grid-cols-2
                        gap-6 bg-green-200 p-6 rounded-2xl"
            >
            {aboutdetails.map((item, index) => (
                <div
                key={index}
                className="min-h-32 rounded-xl bg-green-300
                            flex flex-col gap-3 justify-center items-center p-6
                            text-center"
                >
                <div className="bg-green-700/80 rounded-full p-3">
                    <item.icon color="white" size={22} />
                </div>
    
                <p className="font-serif text-base md:text-lg">
                    {item.title}
                </p>
                </div>
            ))}
            </div>
        </section>
        );
    };

    export default About;
