import React from 'react'
import { Mail, Linkedin, Download, Github, Twitter, Heart } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: Mail, label: 'Email', url: 'mailto:izaacoteng@gmail.com', color: 'hover:text-red-500' },
        { icon: Github, label: 'GitHub', url: 'https://github.com/IsaacOteng', color: 'hover:text-gray-800' },
        { icon: Linkedin, label: 'LinkedIn', url: 'www.linkedin.com/in/isaac-oteng-1b046b287', color: 'hover:text-blue-600' },
        { icon: Twitter, label: 'X', url: 'https://x.com/izaacjnr', color: 'hover:text-blue-400' },
    ]

    const quickLinks = [
        { label: 'Home', url: '#home' },
        { label: 'About', url: '#about' },
        { label: 'Skills', url: '#skills' },
        { label: 'Projects', url: '#projects' },
        { label: 'Contact', url: '#contact' },
    ]

    return (
        <footer className='bg-linear-to-b from-gray-50 to-gray-100 border-t-2 border-gray-200 pt-16 pb-8'>
            <div className='max-w-6xl mx-0 sm:mx-5 px-4'>
                
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
                    
                    {/* Brand Section */}
                    <div>
                        <h3 className='text-2xl font-bold text-green-700 mb-3'>Isaac Oteng</h3>
                        <p className='text-gray-600 text-sm mb-4'>Fullstack Software Engineer crafting elegant solutions</p>
                        <a 
                            href="https://drive.google.com/file/d/1BZp6jggB0OTTQWXGFji6Mji18WPvhXUt/view?usp=sharingf" 
                            target='_blank'
                            download 
                            className='inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold text-sm'
                        >
                            <Download size={16}/>
                            <span>Download CV</span>
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-lg font-bold text-gray-800 mb-4'>Navigation</h4>
                        <ul className='space-y-1'>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.url}
                                        className='text-gray-600 hover:text-green-700 transition-colors text-sm font-medium'
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className='text-lg font-bold text-gray-800 mb-4'>Services</h4>
                        <ul className='space-y-3'>
                            <li className='text-gray-600 hover:text-green-700 transition-colors text-sm font-medium'>Web Development</li>
                            <li className='text-gray-600 hover:text-green-700 transition-colors text-sm font-medium'>Full-Stack Solutions</li>
                            <li className='text-gray-600 hover:text-green-700 transition-colors text-sm font-medium'>API Development</li>
                            <li className='text-gray-600 hover:text-green-700 transition-colors text-sm font-medium'>Security Consulting</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='text-lg font-bold text-gray-800 mb-4'>Contact</h4>
                        <div className='space-y-3'>
                            <div>
                                <p className='text-sm text-gray-600 font-semibold'>Email</p>
                                <a href='mailto:izaacoteng@gmail.com' className='text-green-700 hover:text-green-800 font-medium text-sm'>
                                    izaacoteng@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className='text-sm text-gray-600 font-semibold'>Location</p>
                                <p className='text-gray-700 text-sm'>Accra, Ghana</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className='border-t border-gray-300 pt-8 mb-8'>
                    <p className='text-gray-600 text-sm font-semibold mb-4'>Follow Me</p>
                    <div className='flex gap-4'>
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={`p-3 bg-white rounded-full border border-gray-300 text-gray-600 transition-all hover:scale-110 hover:border-green-400 ${social.color}`}
                                title={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className='border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-600'>
                    <div className='flex items-center gap-2 mb-4 md:mb-0'>
                        <p>© {currentYear} Isaac Oteng. All rights reserved.</p>
                        <Heart size={14} className='text-green-600' fill='currentColor' />
                    </div>
                    <div className='flex gap-6 flex-wrap justify-center md:justify-end'>
                        <p className='hover:text-green-700 transition-colors font-medium'>Privacy Policy</p>
                        <p href='#' className='hover:text-green-700 transition-colors font-medium'>Terms of Service</p>
                        <a href='#contact' className='hover:text-green-700 transition-colors font-medium'>Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
