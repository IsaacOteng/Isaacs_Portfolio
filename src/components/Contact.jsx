import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { toast, Toaster } from 'react-hot-toast'
import AnimatedOnScroll from './AnimatedOnScroll' 


const Contact = () => {
    const [submitted, setSubmitted] = useState(false)

    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "izaacoteng@gmail.com",
            link: "mailto:izaacoteng@gmail.com"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+233 545573689",
            link: "tel:+233545573689"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Accra, Ghana",
            link: "#"
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target

        const formData = new FormData(form)

        try {
            const response = await fetch("https://formspree.io/f/xvzqpdzz", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setSubmitted(true)
                toast.success("Message sent successfully!")
                form.reset()
                setTimeout(() => setSubmitted(false), 3000)
            } else {
                toast.error("Something went wrong. Please try again.")
                const data = await response.json()
                console.error("Formspree error:", data)
            }
        } catch (err) {
            toast.error("Failed to send message. Please try again.")
            console.error("Form submission failed:", err)
        }
    }

    return (
        <section id="contact" className='mx-4 sm:mx-8 md:mx-12 lg:mx-10 mb-40'>
            <Toaster
                position="bottom-center"
                reverseOrder={true}
            />
            <div className='text-center mb-12'>
                <p className='text-3xl md:text-4xl text-green-700 font-bold'>Let's Work Together</p>
                <p className='text-gray-600 text-sm md:text-base mt-2'>Have a project in mind? Get in touch!</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
                {/* Contact Methods */}
                {contactMethods.map((method, index) => (
                    <AnimatedOnScroll key={index} className='bg-linear-to-t from-green-200 to-white rounded-2xl border-2 border-green-200 p-8 hover:border-green-400 hover:shadow-lg transition-all duration-300 text-center hover:scale-105' delay={index * 0.06}>
                        <a 
                        href={method.link}
                        >
                        <div className='flex justify-center mb-4'>
                            <div className='p-4 bg-green-100 rounded-full'>
                                <method.icon size={32} className='text-green-700' />
                            </div>
                        </div>
                        <h3 className='text-lg font-bold text-gray-800 mb-2'>{method.title}</h3>
                        <p className='text-green-700 font-semibold'>{method.value}</p>
                        </a>
                    </AnimatedOnScroll>
                ))}
            </div>

            {/* Contact Fozrm */}
            <AnimatedOnScroll className='max-w-2xl mx-auto bg-linear-to-br from-white to-green-200 rounded-2xl border-2 border-green-200 p-8 md:p-12' delay={0.06}>
                <div className='flex items-center gap-3 mb-8'>
                    <MessageSquare className='text-green-700' size={28} />
                    <h3 className='text-2xl font-bold text-gray-800'>Send Me a Message</h3>
                </div>

                {submitted && (
                    <div className='mb-6 p-4 bg-green-100 border-2 border-green-400 rounded-lg text-green-700 font-semibold'>
                        ✓ Thank you! I'll get back to you soon.
                    </div>
                )}

                <form onSubmit={handleSubmit} className='space-y-6'>

                    <div>
                        <label className='block text-gray-800 font-semibold mb-2'>Name</label>
                        <input
                            type='text'
                            name='name'
                            required
                            placeholder='Your name'
                            className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors'
                        />
                    </div>

                    <div>
                        <label className='block text-gray-800 font-semibold mb-2'>Email</label>
                        <input
                            type='email'
                            name='email'
                            required
                            placeholder='your@gmail.com'
                            className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors'
                        />
                    </div>

                    <div>
                        <label className='block text-gray-800 font-semibold mb-2'>Subject</label>
                        <input
                            type='text'
                            name='subject'
                            required
                            placeholder='Project inquiry'
                            className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors'
                        />
                    </div>

                    <div>
                        <label className='block text-gray-800 font-semibold mb-2'>Message</label>
                        <textarea
                            name='message'
                            required
                            placeholder='Tell me about your project...'
                            rows='6'
                            className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors resize-none'
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='w-full py-3 bg-linear-to-r from-green-600 to-green-700 text-white font-bold cursor-pointer rounded-lg hover:shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2 group'
                    >
                        <Send size={20} className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                        Send Message
                    </button>
                </form>

                {/* Alternative Contact */}
                <div className='mt-8 pt-8 border-t-2 border-green-200 text-center'>
                    <p className='text-gray-600 text-sm mb-2'>Prefer a quick call?</p>
                    <a 
                        href='tel:+233545573689'
                        className='inline-block px-6 py-2 border-2 border-green-600 text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors'
                    >
                        Schedule a Call
                    </a>
                </div>
                </AnimatedOnScroll>

            {/* CTA Section */}
            <AnimatedOnScroll className='mt-16 bg-linear-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white text-center' delay={0.12}>
                <h3 className='text-2xl md:text-3xl font-bold mb-4'>Ready to Start Your Project?</h3>
                <p className='text-green-100 mb-8 max-w-2xl mx-auto'>
                    Whether you have a small project or a large enterprise solution, I'm ready to help bring your ideas to life.
                </p>
                <a href='mailto:izaacoteng@gmail.com'>
                    <button className='px-8 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-colors'>
                        Get Started Now
                    </button>
                </a>
            </AnimatedOnScroll>
        </section>
    )
}

export default Contact
