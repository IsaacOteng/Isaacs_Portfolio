import React from 'react'
import { FileText, Github, HomeIcon, Twitter } from 'lucide-react'

const Navbar = () => {
    return (
    <>
    <section className='flex justify-center px-4'>
        <div className='navbar flex flex-col sm:flex-row items-center sm:justify-between mx-auto mt-7 w-full max-w-4xl border border-gray-300 rounded-2xl cursor-pointer p-3'>
            <div className='flex items-center gap-3 text-gray-600'>
                <span className='hover:scale-105 duration-300 transition-all'><HomeIcon size={20} /></span>
                <span className='opacity-20'>|</span>
                <div className='flex justify-center items-center gap-4 sm:gap-6'>
                    <span className='hover:scale-110 duration-300 transition-all'>
                        <Twitter size={20}/>
                    </span>
                    <span className='hover:scale-110 duration-300 transition-all'>
                        <Github size={20}/>
                    </span>
                    <span className='hover:scale-110 duration-300 transition-all'>
                        <FileText size={20}/>
                    </span>
                </div>
            </div>

            <div className='mt-3 sm:mt-0'>
                <button className='px-4 py-2 bg-black text-white rounded-xl hover:opacity-90 duration-300'>
                    Blog
                </button>
            </div>
        </div>
    </section>
















    </>
    )
}

export default Navbar