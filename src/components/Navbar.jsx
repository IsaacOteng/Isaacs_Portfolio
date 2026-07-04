import React, { useState, useEffect } from 'react'
import { FileText, Github, HomeIcon, Twitter, Menu, X, Moon, Sun } from 'lucide-react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/theme'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
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

    const socialLinks = [
        { icon: HomeIcon, href: '#', label: 'Home' },
        { icon: Twitter,  href: 'https://x.com/izaacjnr', label: 'Twitter' },
        { icon: Github,   href: 'https://github.com/IsaacOteng', label: 'GitHub' },
        { icon: FileText, href: '/isaac-oteng-resume.pdf', label: 'Resume', download: 'Isaac Oteng Resume.pdf' },
    ]

    // Close on Escape + lock page scroll while the drawer is open
    useEffect(() => {
        if (!isOpen) return
        const onKeyDown = (e) => { if (e.key === 'Escape') setIsOpen(false) }
        document.addEventListener('keydown', onKeyDown)
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = prevOverflow
        }
    }, [isOpen])

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
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                                {...(social.download ? { download: social.download } : {})}
                                className='p-2 hover:text-green-700 dark:hover:text-green-400 hover:bg-green-100/60 dark:hover:bg-green-900/20 rounded-lg transition-all duration-200'
                            >
                                <social.icon size={20}/>
                            </a>
                        ))}
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
                        onClick={() => setIsOpen(true)}
                        aria-label='Open menu'
                    >
                        <Menu size={26}/>
                    </button>
                </div>
            </div>
        </section>

        {/* Mobile Drawer */}
        <AnimatePresence>
            {isOpen && (
                <div className='fixed inset-0 z-[60] lg:hidden'>
                    {/* Backdrop */}
                    <Motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setIsOpen(false)}
                        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
                    />

                    {/* Panel */}
                    <Motion.aside
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className='absolute right-0 top-0 h-full w-[78%] max-w-xs flex flex-col
                                   bg-white dark:bg-gray-950
                                   border-l border-green-200 dark:border-gray-800 shadow-2xl'
                    >
                        {/* Drawer header */}
                        <div className='flex items-center justify-between px-6 py-5 border-b border-green-100 dark:border-gray-800'>
                            <div className='heading-display text-lg text-green-700 dark:text-green-400'>
                                Isaac<span className='font-serif-italic font-medium'> Oteng</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className='p-2 text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400
                                           hover:bg-green-100/60 dark:hover:bg-green-900/20 rounded-lg'
                                aria-label='Close menu'
                            >
                                <X size={22}/>
                            </button>
                        </div>

                        {/* Links */}
                        <nav className='flex-1 overflow-y-auto px-4 py-6'>
                            <div className='flex flex-col gap-1'>
                                {navLinks.map((link, index) => (
                                    <Motion.button
                                        key={link.id}
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.08 + index * 0.05, duration: 0.3, ease: 'easeOut' }}
                                        onClick={() => scrollToSection(link.id)}
                                        className='group flex items-center gap-3 text-left px-4 py-3
                                                   text-gray-700 dark:text-gray-300 font-semibold text-lg
                                                   hover:text-green-700 dark:hover:text-green-400
                                                   hover:bg-green-50 dark:hover:bg-green-900/20 rounded-xl'
                                    >
                                        <span className='font-mono text-xs text-green-600/60 dark:text-green-400/50 group-hover:text-green-600 dark:group-hover:text-green-400'>
                                            0{index + 1}
                                        </span>
                                        {link.label}
                                    </Motion.button>
                                ))}
                            </div>
                        </nav>

                        {/* Footer — socials + CTA */}
                        <Motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}
                            className='px-6 py-6 border-t border-green-100 dark:border-gray-800'
                        >
                            <div className='flex items-center justify-center gap-4 mb-5'>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                                        {...(social.download ? { download: social.download } : {})}
                                        aria-label={social.label}
                                        className='p-2.5 rounded-xl text-gray-600 dark:text-gray-300
                                                   border border-green-200 dark:border-gray-800
                                                   hover:text-green-700 dark:hover:text-green-400
                                                   hover:border-green-400 dark:hover:border-green-600
                                                   hover:bg-green-50 dark:hover:bg-green-900/20'
                                    >
                                        <social.icon size={18}/>
                                    </a>
                                ))}
                            </div>
                            <a href="https://wa.me/233545573689" target='_blank' rel='noreferrer'>
                                <button className='w-full py-3 bg-green-700 dark:bg-green-600 text-white rounded-xl
                                                   hover:bg-green-800 dark:hover:bg-green-700 font-semibold
                                                   shadow-lg shadow-green-700/20'>
                                    Let's Talk
                                </button>
                            </a>
                        </Motion.div>
                    </Motion.aside>
                </div>
            )}
        </AnimatePresence>
        </>
    )
}

export default Navbar
