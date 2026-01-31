import { ChevronRight, ExternalLink } from 'lucide-react'
import React from 'react'
import mediaapi from '../assets/mediaapi.png'
import nextstep from '../assets/nextstep.png'
import finalocs from '../assets/finalocs.png'
import extension from '../assets/extension.png'

const Services = () => {

    const projectcards = [
        {
            projectname : "Social Media API",
            projectimage: mediaapi,
            projectdescription : "API sourced from Spotify for the creation of Music Posts...",
            link : "https://social-media-api-ep3g.onrender.com/",
            tags: ["React", "API", "Spotify"]
        },
        {
            projectname : "Next Step",
            projectimage: nextstep,
            projectdescription : "A platform for students and fresh graduates gain internships and jobs... ",
            link : "https://github.com/IsaacOteng/Next-Step",
            tags: ["React", "Unstop.com", "Education"]
        },
        {
            projectname : "finalocs",
            projectimage: finalocs,
            projectdescription : "Official Booking Website for a Fina Locs...",
            link : "https://finalocs.com/",
            tags: ["React", "E-commerce", "Bookings"]
        },
        {
            projectname : "Browser Extensions",
            projectimage: extension,
            projectdescription : "An Extension toggle UI for a Browser. Enabling or disabling extensions...",
            link : "https://github.com/IsaacOteng/Browser_Extension_UI",
            tags: ["JavaScript", "Browser", "UI/UX"]
        }
    ]

    return (
        <>
        <section id="projects" className='mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-40'>
            <div className='text-center mb-12'>
                <p className='text-3xl md:text-4xl text-green-700 font-bold'>Featured Projects</p>
                <p className='text-gray-600 text-sm md:text-base mt-2'>Showcasing my recent work and expertise</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full mx-auto">
                {projectcards.map((item, index) => (
                    <div key={index} className="border-2 border-gray-200 p-6 shadow-sm hover:shadow-2xl rounded-3xl transition-all duration-300 hover:border-green-300 group">
                        <div className='relative overflow-hidden rounded-3xl mb-5'>
                            <img src={item.projectimage} alt={item.projectname} className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
                            <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                <ExternalLink size={32} className='text-white' />
                            </div>
                        </div>
                        
                        <div className='flex flex-wrap gap-2 mb-3'>
                            {item.tags.map((tag, idx) => (
                                <span key={idx} className='text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.projectname}</h3>
                        <p className="text-base text-gray-700 leading-relaxed pb-6 min-h-12">
                        {item.projectdescription}
                        </p>
                        
                        <a  
                            href={item.link || '#'}
                            target={item.link ? '_blank' : '_self'}
                            rel={item.link ? 'noopener noreferrer' : ''}>
                        <button className='w-full p-3 font-semibold bg-linear-to-r from-green-600 to-green-700 text-white rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group/btn'>
                            {item.link ? 'View Project' : 'Coming Soon'}
                            <ChevronRight size={20} className='group-hover/btn:translate-x-1 transition-transform'/>
                        </button>
                        </a>
                    </div>
                ))}
            </div>
            
        </section>
        </>
    )
}

export default Services