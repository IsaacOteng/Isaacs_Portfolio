import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import AnimatedOnScroll from './AnimatedOnScroll'
import mediaapi from '../assets/mediaapi.png'
import nextstep from '../assets/nextstep.png'
import finalocs from '../assets/finalocs.png'
import extension from '../assets/extension.png'
import tertitask from '../assets/tertitask.png'
import traveltogether from '../assets/traveltogether.png'


const Services = () => {

    const projectcards = [
        {
            projectname : "Tertitask",
            projectimage: tertitask,
            meta: "Ghana · Accra · 2026",
            projectdescription : "A full-stack freelance marketplace that brings task management, payments and conversations into one clean workspace — find work, hire talent, get paid. No spreadsheets, no back-and-forth.",
            link : "https://tertitask.vercel.app",
            features: [
                "Integrated task management and live job listings",
                "Real-time conversations between clients and freelancers",
                "Seamless Paystack payments for secure transactions",
                "Firebase-backed authentication and live updates",
            ],
            tags: ["Django", "React", "Paystack", "Firebase", "WebSockets"]
        },
        {
            projectname : "Travel Together",
            projectimage: traveltogether,
            meta: "Global · Web · 2025",
            projectdescription : "A full-stack travel platform connecting travelers to plan and share journeys together — discover companions, map routes and coordinate trips in real time.",
            link : "https://github.com/IsaacOteng/Travel_Together",
            features: [
                "Connect with travelers to plan shared journeys",
                "Interactive maps powered by OpenStreetMap",
                "Real-time chat and trip coordination via WebSockets",
                "Automated email updates through Brevo & Celery",
            ],
            tags: ["Django", "React", "Firebase", "Brevo", "Celery", "WebSockets", "OpenStreetMap"]
        },
        {
            projectname : "finalocs",
            projectimage: finalocs,
            meta: "Ghana · Accra · 2025",
            projectdescription : "The official booking website for Fina Locs — a brand-focused storefront where clients browse services and book appointments through a streamlined checkout.",
            link : "https://finalocs.com/",
            features: [
                "Elegant booking flow for Fina Locs services",
                "Streamlined e-commerce checkout experience",
                "Responsive, brand-focused interface",
            ],
            tags: ["React", "E-commerce", "Bookings"]
        },
        {
            projectname : "Social Media API",
            projectimage: mediaapi,
            meta: "Web · API · 2024",
            projectdescription : "A social platform for music lovers — create and share posts powered by live data sourced from the Spotify API, served through a clean React frontend.",
            link : "https://social-media-api-ep3g.onrender.com/",
            features: [
                "Create and share music posts sourced from Spotify",
                "Clean REST API powering a React frontend",
                "Live music data integration",
            ],
            tags: ["React", "API", "Spotify"]
        },
        {
            projectname : "Browser Extensions",
            projectimage: extension,
            meta: "Web · UI/UX · 2024",
            projectdescription : "An extension manager UI for the browser — a polished toggle interface for enabling or disabling extensions at a glance, with accessibility baked in.",
            link : "https://github.com/IsaacOteng/Browser_Extension_UI",
            features: [
                "Toggle UI to enable or disable browser extensions",
                "Accessible, keyboard-friendly controls",
                "Pixel-perfect responsive design",
            ],
            tags: ["JavaScript", "Browser", "UI/UX"]
        },
        {
            projectname : "Next Step",
            projectimage: nextstep,
            meta: "Education · Web · 2024",
            projectdescription : "A platform helping students and fresh graduates land internships and jobs — curated opportunities and a guided experience to take the next step in their careers.",
            link : "https://github.com/IsaacOteng/Next-Step",
            features: [
                "Helping students and graduates land internships and jobs",
                "Curated opportunities via Unstop.com",
                "Education-focused, intuitive experience",
            ],
            tags: ["React", "Unstop.com", "Education"]
        }
    ]

    return (
        <>
        <section id="projects" className='mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-40'>
            <div className='text-center mb-16'>
                <p className='heading-display text-3xl md:text-4xl text-green-700 dark:text-green-400'>
                    Featured <span className='font-serif-italic font-medium'>Projects</span>
                </p>
                <p className='font-mono text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-2 tracking-tight'>Showcasing my recent work and expertise</p>
            </div>

            <div className='flex flex-col gap-10 lg:gap-14'>
                {projectcards.map((item, index) => {
                    const reversed = index % 2 === 1
                    return (
                        <AnimatedOnScroll
                            key={index}
                            className='group relative overflow-hidden rounded-[2rem]
                                       bg-linear-to-br from-gray-950 via-black to-gray-900
                                       border border-white/10 shadow-2xl
                                       p-6 sm:p-10 lg:p-16'
                            delay={index * 0.05}
                        >
                            <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
                                {/* Image stack — three duplicates fanned in 3D; hover any card to bring it forward */}
                                <div className={`relative h-72 sm:h-80 lg:h-112 px-6 py-8 perspective-[1800px] ${reversed ? 'lg:order-2' : ''}`}>
                                    {/* back card (duplicate) */}
                                    <img
                                        src={item.projectimage}
                                        alt=''
                                        aria-hidden='true'
                                        className='absolute inset-0 m-auto w-[80%] h-[78%] object-cover rounded-2xl
                                                   shadow-xl shadow-black/50 opacity-55 z-10 cursor-pointer
                                                   transform-[translate(38%,30%)_rotateY(-15deg)_rotateX(6deg)_scale(.9)]
                                                   hover:z-40 hover:opacity-100
                                                   hover:transform-[translate(38%,30%)_rotateY(0deg)_rotateX(0deg)_scale(1)]
                                                   transition-all duration-500 ease-out'
                                    />
                                    {/* middle card (duplicate) */}
                                    <img
                                        src={item.projectimage}
                                        alt=''
                                        aria-hidden='true'
                                        className='absolute inset-0 m-auto w-[80%] h-[78%] object-cover rounded-2xl
                                                   shadow-xl shadow-black/50 opacity-80 z-20 cursor-pointer
                                                   transform-[translate(19%,15%)_rotateY(-13deg)_rotateX(5deg)_scale(.95)]
                                                   hover:z-40 hover:opacity-100
                                                   hover:transform-[translate(19%,15%)_rotateY(0deg)_rotateX(0deg)_scale(1)]
                                                   transition-all duration-500 ease-out'
                                    />
                                    {/* front card */}
                                    <img
                                        src={item.projectimage}
                                        alt={item.projectname}
                                        className='absolute inset-0 m-auto w-[80%] h-[78%] object-cover rounded-2xl
                                                   ring-2 ring-emerald-400/70 shadow-2xl shadow-emerald-500/20 z-30 cursor-pointer
                                                   transform-[rotateY(-11deg)_rotateX(3deg)]
                                                   hover:z-40 hover:transform-[rotateY(0deg)_rotateX(0deg)_scale(1.02)]
                                                   transition-all duration-500 ease-out'
                                    />
                                </div>

                                {/* Content */}
                                <div className={reversed ? 'lg:order-1' : ''}>
                                    <p className='font-mono text-xs md:text-sm tracking-wide text-gray-400 mb-5'>
                                        {item.meta}
                                    </p>

                                    <h3 className='heading-display text-white text-4xl sm:text-5xl lg:text-6xl leading-[0.95] mb-6'>
                                        {item.projectname}
                                    </h3>

                                    <p className='text-gray-300 text-base md:text-lg leading-relaxed mb-7 max-w-xl'>
                                        {item.projectdescription}
                                    </p>

                                    <ul className='space-y-3 mb-9'>
                                        {item.features.map((feature, idx) => (
                                            <li key={idx} className='flex items-start gap-3 text-gray-200 text-sm md:text-base'>
                                                <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400' />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10'>
                                        <div className='flex flex-wrap gap-x-5 gap-y-2'>
                                            {item.tags.map((tag, idx) => (
                                                <span key={idx} className='font-mono text-[0.7rem] md:text-xs uppercase tracking-[0.15em] text-gray-400'>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={item.link || '#'}
                                            target={item.link ? '_blank' : '_self'}
                                            rel={item.link ? 'noopener noreferrer' : ''}
                                            className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                                                       bg-linear-to-r from-green-600 to-emerald-500 text-white font-semibold text-sm
                                                       hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5
                                                       transition-all group/btn'
                                        >
                                            {item.link ? 'View Project' : 'Coming Soon'}
                                            <ArrowUpRight size={18} className='group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </AnimatedOnScroll>
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default Services
