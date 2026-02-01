import React, { useState } from 'react'
import { FileText, Github, HomeIcon, Twitter, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
        }
    }

    const navLinks = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ]

    return (
    <>
    <section className='flex justify-center px-4 sticky top-0 z-50 bg-white/95 backdrop-blur-md py-4'>
        <div className='navbar flex items-center justify-between mx-auto w-full max-w-5xl bonpm rder border-gray-300 rounded-2xl cursor-pointer px-6 py-4 shadow-lg bg-linear-to-r from-green-50 to-green-200'>
            
            {/* Logo */}
            <div className='font-bold text-lg md:text-xl text-green-700'>
                Portfolio
            </div>

            {/* Desktop Menu */}
            <div className='hidden lg:flex items-center gap-8 text-gray-600'>
                <span className='opacity-30'>|</span>
                <div className='flex justify-center items-center gap-8'>
                    <a href='#' className='hover:text-green-700 hover:scale-125 transition-all duration-700'>
                        <HomeIcon size={24}/>
                    </a>
                    <a href='https://x.com/izaacjnr' target='_blank' rel='noreferrer' className='hover:text-green-700 hover:scale-125 transition-all duration-700'>
                        <Twitter size={24}/>
                    </a>
                    <a href='https://github.com/IsaacOteng' target='_blank' rel='noreferrer' className='hover:text-green-700 hover:scale-125 transition-all duration-700'>
                        <Github size={24}/>
                    </a>
                    <a href='https://drive.google.com/file/d/1BZp6jggB0OTTQWXGFji6Mji18WPvhXUt/view?usp=sharing' target='_blank' className='hover:text-green-700 hover:scale-125 transition-all duration-700'>
                        <FileText size={24}/>
                    </a>
                </div>
                <span className='opacity-30'>|</span>

                <a href="https://wa.me/233545573689" target='_blank'>
                <button className='px-6 py-2 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-all duration-300 font-semibold'>
                    Let's Talk
                </button>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className='lg:hidden text-gray-600 hover:text-green-700 transition-colors'
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
            <div className='absolute top-full left-4 right-4 mt-2 bg-white border border-gray-300 rounded-2xl shadow-lg p-6 lg:hidden'>
                <div className='flex flex-col gap-4'>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className='text-left text-gray-700 hover:text-green-700 font-semibold transition-colors py-2'
                        >
                            {link.label}
                        </button>
                    ))}
                    <div className='flex gap-4 py-4 border-t'>
                        <a href='#' className='p-2 hover:bg-green-100 rounded-lg transition-colors'>
                            <HomeIcon size={20}/>
                        </a>
                        <a href='#' className='p-2 hover:bg-green-100 rounded-lg transition-colors'>
                            <Twitter size={20}/>
                        </a>
                        <a href='#' className='p-2 hover:bg-green-100 rounded-lg transition-colors'>
                            <Github size={20}/>
                        </a>
                    </div>
                    <button className='w-full px-4 py-2 bg-green-700 text-white rounded-xl hover:bg-green-800 transition-all font-semibold'>
                        Let's Talk
                    </button>
                </div>
            </div>
        )}
    </section>
















    </>
    )
}

export default Navbar