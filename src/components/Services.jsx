import { ChevronRight } from 'lucide-react'
import React from 'react'

const Services = () => {

    const projectcards = [
        {
            projectname : "Social Media API",
            projectimage: "./src/assets/mediaapi.png",
            projectdescription : "API sourced from Spotify for the creation of Music Posts...",
            link : "https://social-media-api-ep3g.onrender.com/"
        },
        {
            projectname : "Next Step",
            projectimage: "./src/assets/nextstep.png",
            projectdescription : "A platform for students and fresh graduates gain internships and jobs... ",
            link : ""
        },
        {
            projectname : "finalocs",
            projectimage: "./src/assets/finalocs.png",
            projectdescription : "Official Booking Website for a Finas Locs[Replica]...",
            link : "https://finalocs.com/"
        },
        {
            projectname : "Browser Extensions",
            projectimage: "./src/assets/extension.png",
            projectdescription : "An Extension toggle UI for a web Browser. Easily enabling or disabling extensions with a clean interface.",
            link : ""
        }
    ]

    return (
        <>
        <section className='mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-40'>
            <div className='text-center'>
                <p className='text-3xl text-green-700 font-bold'>Projects</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto my-10">
                {projectcards.map((item, index) => (
                    <div key={index} className="border-2 border-gray-200 p-5 shadow-sm rounded-4xl ">
                        <img src={item.projectimage} alt="SisterLocs" className="w-full h-48 object-cover mb-5 rounded-3xl" />
                        <h3 className="text-2xl font-bold mb-3">{item.projectname}</h3>
                        <p className="text-lg text-gray-700 leading-relaxed pb-7">
                        {item.projectdescription}
                        </p>
                        <a  
                            href={item.link}
                            target='_blank'
                            rel='api'>
                        <button className='w-[50%] p-4 font-semibold border border-green-400 bg-green-100 rounded-2xl mb-8 cursor-pointer'>
                            View Project
                            <ChevronRight size={24} className='pl-1 -mt-0.5 inline'/>
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