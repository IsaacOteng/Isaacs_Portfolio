import React, { useState, useRef, useEffect } from 'react'
import { FileText, Github, HomeIcon, Twitter, Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)
    const { darkMode, toggleDarkMode } = useTheme()

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
        }
    }

    const navLinks = [
        { label: 'Home',     id: 'home' },
        { label: 'About',    id: 'about' },
        { label: 'Skills',   id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact',  id: 'contact' },
    ]

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <>
        <section className='flex justify-center px-4 sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md py-4'>
            <div className='navbar flex items-center justify-between mx-auto w-full max-w-7xl border border-green-200 dark:border-gray-700 rounded-2xl cursor-pointer px-6 py-3 shadow-lg
                            bg-linear-to-r from-green-50 to-green-200
                            dark:from-gray-800 dark:to-gray-900
                            glass-light'>

                {/* Logo */}
                <div className='heading-display text-lg md:text-xl text-green-700 dark:text-green-400'>
                    Isaac<span className='font-serif-italic font-medium'> Oteng</span>
                </div>

                {/* Desktop Nav Links */}
                <div className='hidden lg:flex items-center gap-1'>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className='px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300
                                       hover:text-green-700 dark:hover:text-green-400
                                       hover:bg-green-100/60 dark:hover:bg-green-900/20
                                       rounded-xl transition-all duration-200'
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Desktop Right — icons + dark toggle + CTA */}
                <div className='hidden lg:flex items-center gap-3 text-gray-600 dark:text-gray-300'>
                    <span className='opacity-30 dark:opacity-20'>|</span>

                    <div className='flex items-center gap-2'>
                        <a href='#' className='p-2 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-100/60 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200'>
                            <HomeIcon size={20}/>
                        </a>
                        <a href='https://x.com/izaacjnr' target='_blank' rel='noreferrer' className='p-2 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-100/60 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200'>
                            <Twitter size={20}/>
                        </a>
                        <a href='https://github.com/IsaacOteng' target='_blank' rel='noreferrer' className='p-2 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-100/60 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200'>
                            <Github size={20}/>
                        </a>
                        <a href='/isaac-oteng-resume.pdf' download="Isaac Oteng Resume.pdf" className='p-2 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-100/60 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200'>
                            <FileText size={20}/>
                        </a>
                        <button
                            onClick={toggleDarkMode}
                            className='p-2 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-100/60 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200'
                            aria-label='Toggle dark mode'
                        >
                            {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
                        </button>
                    </div>

                    <span className='opacity-30 dark:opacity-20'>|</span>

                    <a href="https://wa.me/233545573689" target='_blank'>
                        <button className='px-6 py-2 bg-green-700 dark:bg-green-600 text-white rounded-xl hover:bg-green-800 dark:hover:bg-green-700 font-semibold shadow-lg shadow-green-700/20'>
                            Let's Talk
                        </button>
                    </a>
                </div>

                {/* Mobile — dark toggle + hamburger */}
                <div className='lg:hidden flex items-center gap-1'>
                    <button
                        onClick={toggleDarkMode}
                        className='p-2 text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 rounded-lg'
                        aria-label='Toggle dark mode'
                    >
                        {darkMode ? <Sun size={22}/> : <Moon size={22}/>}
                    </button>
                    <button
                        className='p-2 text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 rounded-lg'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={26}/> : <Menu size={26}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className='absolute top-full left-4 right-4 mt-2
                               bg-linear-to-r from-green-200 via-green-50 to-green-200
                               dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
                               border border-gray-300 dark:border-gray-700
                               rounded-2xl shadow-2xl p-6 lg:hidden glass-light'
                >
                    <div className='flex flex-col gap-2 mb-4'>
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className='text-left px-4 py-2.5 text-gray-700 dark:text-gray-300
                                           hover:text-green-700 dark:hover:text-green-400
                                           hover:bg-green-100/60 dark:hover:bg-green-900/20
                                           font-semibold rounded-xl transition-all duration-200'
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                    <div className='flex items-center justify-center gap-6 py-4 border-t border-green-200 dark:border-gray-700'>
                        <a href='#' className='p-2 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400'>
                            <HomeIcon size={20}/>
                        </a>
                        <a href='https://x.com/izaacjnr' className='p-2 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400'>
                            <Twitter size={20}/>
                        </a>
                        <a href='https://github.com/IsaacOteng' className='p-2 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400'>
                            <Github size={20}/>
                        </a>
                        <a href='/isaac-oteng-resume.pdf' download="Isaac Oteng Resume.pdf" className='p-2 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400'>
                            <FileText size={20}/>
                        </a>
                    </div>
                    <a href="https://wa.me/233545573689" target='_blank'>
                        <button className='w-full mt-2 px-4 py-2.5 bg-green-700 dark:bg-green-600 text-white rounded-xl hover:bg-green-800 dark:hover:bg-green-700 font-semibold'>
                            Let's Talk
                        </button>
                    </a>
                </div>
            )}
        </section>
        </>
    )
}

export default Navbar
