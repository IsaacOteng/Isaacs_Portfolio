import React from 'react'
import pic from '../assets/pic.png'
import AnimatedOnScroll from './AnimatedOnScroll'

const Experience = () => {
    return (
        <>
        <section className=''>
            <div className='flex flex-col -mt-20'>
                <AnimatedOnScroll className='m-auto' delay={0.05}>
                <img className='w-full max-w-xs h-auto m-auto object-contain'
                    src={pic} 
                    alt="Isaac Junior" />
                </AnimatedOnScroll>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 -mt-8 mb-20 bg-linear-to-b from-transparent to-green-300 rounded-3xl py-6 px-3'>
                    <AnimatedOnScroll className='h-25 bg-black text-white rounded-3xl text-center p-3' delay={0.12}>
                        <span className='text-xl font-extrabold'>3 +</span> <br /> 
                        <span className='text-gray-400'>Years of Exprerience</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll className='h-25 bg-black text-white rounded-3xl text-center p-3' delay={0.18}>
                        <span className='text-xl font-extrabold'>17 +</span> <br /> 
                        <span className='text-gray-400'>Completed Projects</span>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll className='h-25 bg-black text-white rounded-3xl text-center p-3' delay={0.24}>
                        <span className='text-lg font-extrabold'>100%</span> <br /> 
                        <span className='text-gray-400'>Client Satisfaction</span>
                    </AnimatedOnScroll>
                </div>
            </div>















        </section>
        </>
    )
}

export default Experience