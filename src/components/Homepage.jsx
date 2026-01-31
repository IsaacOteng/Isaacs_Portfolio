import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Skills from './Skills'
import Services from './Services'
import Articles from './Articles'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

const Homepage = () => {
    return (
        <>
        <Navbar/>
        <Intro/>
        <About/>
        <Skills/>
        <Services/>
        <Articles/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Homepage