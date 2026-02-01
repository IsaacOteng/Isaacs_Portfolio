import React from 'react'
import { ArrowRight, Calendar, User } from 'lucide-react'
import AnimatedOnScroll from './AnimatedOnScroll' 

const Articles = () => {
    const articles = [
        {
            id: 1,
            title: "React Performance Optimization",
            excerpt: "Learn advanced techniques to optimize your React applications for better performance and faster load times...",
            date: "Dec 10, 2025",
            author: "Isaac Oteng",
            category: "React",
            readTime: "6 min read",
            link: ""
        },
        {
            id: 2,
            title: "Perfectionism Vs Consistency",
            excerpt: "Exploring the balance between striving for perfection and maintaining consistent delivery in software development...",
            date: "Jan 20, 2026",
            author: "Isaac Oteng",
            category: "Productivity",
            readTime: "3 min read",
            link: "https://substack.com/@izaacjnr/p-185241198"
        },
        {
            id: 3,
            title: "Full-Stack Development Best Practices",
            excerpt: "A comprehensive guide to building scalable full-stack applications with modern technologies...",
            date: "Nov 5, 2025",
            author: "Isaac Oteng",
            category: "Development",
            readTime: "5 min read",
            link: ""
        }
    ]

    return (
        <section id="articles" className='mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-40'>
            <div className='text-center mb-12'>
                <p className='text-3xl md:text-4xl text-green-700 font-bold'>Latest Articles</p>
                <p className='text-gray-600 text-sm md:text-base mt-2'>Technical insights and development tips</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {articles.map((article, index) => (
                    <AnimatedOnScroll key={article.id} className='bg-linear-to-tr from-green-50 via-white to-green-50 rounded-2xl border-2 border-gray-200 hover:border-green-300 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group' variant={index % 2 === 0 ? 'fade-right' : 'fade-left'} delay={index * 0.06}>
                        {/* Category Badge */}
                        <div className='px-6 pt-6'>
                            <span className='inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold'>
                                {article.category}
                            </span>
                        </div>

                        {/* Content */}
                        <div className='p-6'>
                            <h3 className='text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors'>
                                {article.title}
                            </h3>

                            <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                                {article.excerpt}
                            </p>

                            {/* Metadata */}
                            <div className='space-y-2 pb-4 border-b border-gray-200'>
                                <div className='flex items-center gap-2 text-xs text-gray-500'>
                                    <Calendar size={14} />
                                    <span>{article.date}</span>
                                </div>
                                <div className='flex items-center gap-2 text-xs text-gray-500'>
                                    <User size={14} />
                                    <span>{article.author}</span>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className='pt-4 flex justify-between items-center'>
                                <span className='text-xs font-semibold text-green-700'>
                                    {article.readTime}
                                </span>
                                <a href={article.link} target="_blank" rel="noopener noreferrer">
                                    <button className='flex items-center gap-1 text-green-700 hover:text-green-800 font-semibold group/btn cursor-pointer'>
                                        Read
                                        <ArrowRight size={16} className='group-hover/btn:translate-x-1 transition-transform' />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </AnimatedOnScroll>
                ))}
            </div>

            {/* View All Button */}
            <div className='flex justify-center mt-12'>
                <a href="articles">
                    <button className='px-8 py-3 bg-linear-to-r from-green-600 to-green-700
                                    text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center gap-2 hover:-translate-y-1 cursor-pointer'>
                        Read All Articles
                        <ArrowRight size={20} />
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Articles
