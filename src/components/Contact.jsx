import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { toast, Toaster } from 'react-hot-toast'
import AnimatedOnScroll from './AnimatedOnScroll'


const Contact = () => {
    const [submitted, setSubmitted] = useState(false)

    const contactMethods = [
        { icon: Mail,   title: "Email",    value: "izaacoteng@gmail.com", link: "mailto:izaacoteng@gmail.com" },
        { icon: Phone,  title: "Phone",    value: "+233 545573689",        link: "tel:+233545573689" },
        { icon: MapPin, title: "Location", value: "Accra, Ghana",          link: "#" }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        try {
            const response = await fetch("https://formspree.io/f/xvzqpdzz", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
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
            <Toaster position="bottom-center" reverseOrder={true} />

            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-12'>
                    <p className='heading-display text-3xl md:text-4xl text-green-700 dark:text-green-400'>
                        Let's <span className='font-serif-italic font-medium'>Work Together</span>
                    </p>
                    <p className='font-mono text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-2 tracking-tight'>Have a project in mind? Get in touch!</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-start'>
                    <div className='lg:col-span-2 flex flex-col gap-4'>
                        {contactMethods.map((method, index) => (
                            <AnimatedOnScroll
                                key={index}
                                variant='fade-left'
                                className='bg-linear-to-t from-green-200 to-white
                                           dark:from-gray-800 dark:to-gray-900
                                           rounded-2xl border-2 border-green-200 dark:border-gray-700
                                           hover:border-green-400 dark:hover:border-green-600
                                           hover:shadow-lg hover:shadow-green-200/40 dark:hover:shadow-green-900/20
                                           hover:scale-[1.02] glow-green-hover'
                                delay={index * 0.06}
                            >
                                <a href={method.link} className='flex items-center gap-4 p-5'>
                                    <div className='p-3 bg-green-100 dark:bg-green-900/40 rounded-xl shrink-0'>
                                        <method.icon size={22} className='text-green-700 dark:text-green-400' />
                                    </div>
                                    <div className='min-w-0'>
                                        <h3 className='text-sm font-bold text-gray-800 dark:text-gray-100'>{method.title}</h3>
                                        <p className='text-green-700 dark:text-green-400 font-semibold text-sm truncate'>{method.value}</p>
                                    </div>
                                </a>
                            </AnimatedOnScroll>
                        ))}

                        <AnimatedOnScroll
                            variant='fade-left'
                            className='rounded-2xl border-2 border-dashed border-green-300 dark:border-gray-700 p-5
                                       flex items-center justify-between gap-4'
                            delay={0.18}
                        >
                            <p className='text-gray-600 dark:text-gray-400 text-sm'>Prefer a quick call?</p>
                            <a
                                href='tel:+233545573689'
                                className='shrink-0 px-4 py-2 text-sm border-2 border-green-600 dark:border-green-500 text-green-700 dark:text-green-400 font-semibold rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20'
                            >
                                Schedule a Call
                            </a>
                        </AnimatedOnScroll>
                    </div>

                    <AnimatedOnScroll
                        variant='fade-right'
                        className='lg:col-span-3 bg-linear-to-br from-white to-green-200
                                   dark:from-gray-800 dark:to-gray-900
                                   rounded-2xl border-2 border-green-200 dark:border-gray-700
                                   p-6 md:p-8'
                        delay={0.06}
                    >
                        <div className='flex items-center gap-3 mb-6'>
                            <MessageSquare className='text-green-700 dark:text-green-400' size={24} />
                            <h3 className='heading-display text-xl md:text-2xl text-gray-800 dark:text-gray-100'>Send Me a <span className='font-serif-italic font-medium text-green-700 dark:text-green-400'>Message</span></h3>
                        </div>

                        {submitted && (
                            <div className='mb-4 p-3 bg-green-100 dark:bg-green-900/30 border-2 border-green-400 dark:border-green-600 rounded-lg text-green-700 dark:text-green-400 font-semibold text-sm'>
                                ✓ Thank you! I'll get back to you soon.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {[
                                    { label: 'Name',  name: 'name',  type: 'text',  placeholder: 'Your name' },
                                    { label: 'Email', name: 'email', type: 'email', placeholder: 'your@gmail.com' },
                                ].map((field) => (
                                    <div key={field.name}>
                                        <label className='block text-sm text-gray-800 dark:text-gray-200 font-semibold mb-1.5'>{field.label}</label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            required
                                            placeholder={field.placeholder}
                                            className='w-full px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600
                                                       bg-white dark:bg-gray-700/60
                                                       text-gray-900 dark:text-gray-100
                                                       placeholder-gray-400 dark:placeholder-gray-500
                                                       rounded-lg focus:outline-none focus:border-green-500 dark:focus:border-green-400
                                                       focus:ring-2 focus:ring-green-500/20'
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <label className='block text-sm text-gray-800 dark:text-gray-200 font-semibold mb-1.5'>Subject</label>
                                <input
                                    type='text'
                                    name='subject'
                                    required
                                    placeholder='Project inquiry'
                                    className='w-full px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600
                                               bg-white dark:bg-gray-700/60
                                               text-gray-900 dark:text-gray-100
                                               placeholder-gray-400 dark:placeholder-gray-500
                                               rounded-lg focus:outline-none focus:border-green-500 dark:focus:border-green-400
                                               focus:ring-2 focus:ring-green-500/20'
                                />
                            </div>
                            <div>
                                <label className='block text-sm text-gray-800 dark:text-gray-200 font-semibold mb-1.5'>Message</label>
                                <textarea
                                    name='message'
                                    required
                                    placeholder='Tell me about your project...'
                                    rows='4'
                                    className='w-full px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600
                                               bg-white dark:bg-gray-700/60
                                               text-gray-900 dark:text-gray-100
                                               placeholder-gray-400 dark:placeholder-gray-500
                                               rounded-lg focus:outline-none focus:border-green-500 dark:focus:border-green-400
                                               focus:ring-2 focus:ring-green-500/20 resize-none'
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full py-3 bg-linear-to-r from-green-600 to-green-700 text-white font-bold cursor-pointer rounded-lg
                                           hover:shadow-lg hover:shadow-green-600/30 hover:from-green-700 hover:to-green-800
                                           hover:-translate-y-0.5 flex items-center justify-center gap-2 group'
                            >
                                <Send size={20} className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                                Send Message
                            </button>
                        </form>
                    </AnimatedOnScroll>
                </div>

                <AnimatedOnScroll
                    className='mt-12 bg-linear-to-r from-gray-950 to-gray-700 rounded-2xl px-6 py-10 md:p-10 text-white text-center shadow-xl shadow-white-700/20'
                    delay={0.12}
                >
                    <h3 className='heading-display text-2xl md:text-3xl mb-3'>Ready to Start Your <span className='font-serif-italic font-medium'>Project?</span></h3>
                    <p className='text-green-100 mb-6 max-w-2xl mx-auto'>
                        Whether you have a small project or a large enterprise solution, I'm ready to help bring your ideas to life.
                    </p>
                    <a href='mailto:izaacoteng@gmail.com'>
                        <button className='px-8 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-lg'>
                            Get Started Now
                        </button>
                    </a>
                </AnimatedOnScroll>
            </div>
        </section>
    )
}

export default Contact
