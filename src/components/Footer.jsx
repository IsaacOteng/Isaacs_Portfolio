import React from 'react'
import { Mail, Linkedin, Download } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='border-t pt-6 pb-10'>
            <div className='max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4'>
                <div className='text-left'>
                    <p className='font-bold'>Isaac Oteng</p>
                    <p className='text-sm text-gray-600'>Fullstack Software Engineer</p>
                </div>

                <div className='flex items-center gap-4'>
                    <a href="/src/assets/isaac_resume.pdf" download className='flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-md'>
                        <Download size={16}/>
                        <span>Download CV</span>
                    </a>
                    <a href='mailto:izaacoteng@gmail.com' className='text-gray-600 hover:text-gray-900'>
                        <Mail size={18} />
                    </a>
                    <a href='https://www.linkedin.com/in/isaac-oteng-1b046b287/7'
                        target='_blank' rel='noreferrer' className='text-gray-600 hover:text-gray-900'>
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
