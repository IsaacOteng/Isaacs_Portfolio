import React from 'react'
import { Star, Quote } from 'lucide-react'
import AnimatedOnScroll from './AnimatedOnScroll'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Asamoah Daniel",
            role: "Project Manager",
            company: "Tech Innovations Inc.",
            content: "Isaac delivered an exceptional web application that exceeded all our expectations. His attention to detail and problem-solving skills are outstanding.",
            rating: 5,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Asamoah"
        },
        {
            id: 2,
            name: "Alexis Darko",
            role: "CEO",
            company: "StartUp",
            content: "Working with Isaac was a game-changer for our business. His Front-End expertise and ability to translate requirements into scalable solutions is remarkable.",
            rating: 5,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
        },
        {
            id: 3,
            name: "David Tetteh",
            role: "Project Lead",
            company: "Creative Studios",
            content: "Isaac doesn't just code, he collaborates. His understanding of both technical and design aspects made our project incredibly successful.",
            rating: 5,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Asamoahjkkjkj"
        },
        {
            id: 4,
            name: "Prosper Kudjo",
            role: "CTO",
            company: "Digital Enterprises",
            content: "Your expertise in frontend development and building scalable, user-friendly interfaces made a significant impact on our project. Highly recommend you.",
            rating: 5,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prosper"
        }
    ]

    return (
        <section className='mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-40'>
            <div className='text-center mb-12'>
                <p className='text-3xl md:text-4xl text-green-700 dark:text-green-400 font-bold'>Client Testimonials</p>
                <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2'>What clients say about working with me</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {testimonials.map((testimonial, i) => (
                    <AnimatedOnScroll
                        key={testimonial.id}
                        className='bg-linear-to-b from-green-200 via-green-50 to-green-200
                                   dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
                                   rounded-2xl border-2 border-green-200 dark:border-gray-700
                                   p-8 hover:shadow-xl hover:shadow-green-200/40 dark:hover:shadow-green-900/20
                                   hover:border-green-400 dark:hover:border-green-600
                                   glow-green-hover hover:-translate-y-1'
                        delay={i * 0.06}
                    >
                        <Quote className='text-green-200 dark:text-green-800 mb-4' size={32} />

                        <div className='flex gap-1 mb-4'>
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={18} className='fill-yellow-400 text-yellow-400' />
                            ))}
                        </div>

                        <p className='text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6'>
                            "{testimonial.content}"
                        </p>

                        <div className='flex items-center gap-4 pt-6 border-t border-green-200 dark:border-gray-700'>
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className='w-12 h-12 rounded-full border-2 border-green-300 dark:border-green-600 hover:scale-110'
                            />
                            <div>
                                <p className='font-bold text-gray-800 dark:text-gray-100'>{testimonial.name}</p>
                                <p className='text-sm text-gray-600 dark:text-gray-400'>{testimonial.role}</p>
                                <p className='text-xs text-green-700 dark:text-green-400 font-semibold'>{testimonial.company}</p>
                            </div>
                        </div>
                    </AnimatedOnScroll>
                ))}
            </div>

            <div className='grid grid-cols-3 gap-4 mt-12 bg-green-100 dark:bg-gray-800 p-8 rounded-2xl border-2 border-green-200 dark:border-gray-700'>
                {[
                    { value: '15+',  label: 'Happy Clients' },
                    { value: '4.9/5',label: 'Avg. Rating' },
                    { value: '100%', label: 'Satisfaction' },
                ].map((stat, i) => (
                    <div key={i} className='text-center hover:scale-105 cursor-default'>
                        <p className='text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400'>{stat.value}</p>
                        <p className='text-gray-600 dark:text-gray-400 text-sm mt-2'>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials
