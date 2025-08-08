import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutMe = () => {

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from('.who-i-heading', {
            yPercent: 200,
            duration: 1,
            opacity: 0,
            ease: 'power3.out',
        })
        tl.from('.profile-placeholder', {
            scale: 0.6,
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
        }, "<")
        tl.from('.name-title', {
            yPercent: 200,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, "<")
        tl.from('.subtext-line', {
            yPercent: 150,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
        }, "<")
        tl.from('.about-description p', {
            yPercent: 150,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        }, "-=1.5")

        ScrollTrigger.create({
            trigger: '.about-section',
            start: '25% bottom',
            animation: tl,
            toggleActions: 'play play play reverse',
        })
    })

    return (
        <section data-scroll-section className='about-section relative z-10 w-full bg-[#FDFCF9] rounded-3xl px-6 sm:px-10 lg:px-20 py-16 sm:h-[100svh] overflow-hidden'>
            <header className='text-center mb-10'>
                <h1 className="who-i-heading text-[#444] text-[2.75rem] sm:text-[5rem] xl:text-[6rem] 2xl:text-[7.5rem] font-bruno-ace border-y border-black border-opacity-20 px-4 sm:px-0 inline-block">
                    Who am I?
                </h1>
                <div className="flex flex-wrap justify-center sm:justify-between mt-4 text-[#858585] text-sm sm:text-base lg:text-lg font-days-one gap-2">
                    <span className="subtext-line">A creator at heart</span>
                    <span className="subtext-line hidden sm:inline">| weaving a tale of</span>
                    <span className="subtext-line">innovation and adventure</span>
                </div>
            </header>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 sm:gap-16">
                {/* Placeholder instead of image */}
                <div className="profile-placeholder w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] bg-white border border-dashed border-[#999] rounded-2xl shadow-md mx-auto sm:mx-0 flex items-center justify-center">
                    <span className="text-[#bbb] text-sm text-center">Image Placeholder</span>
                </div>

                <div className="flex flex-col items-center sm:items-start flex-1">
                    <h2 className="name-title font-sansation-light text-[#585858] text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] 2xl:text-[5.4rem] mb-6 text-center sm:text-left tracking-tight">
                        Fahad Noufal
                    </h2>

                    <div className="about-description border-y border-black border-opacity-20 py-8 px-6 sm:px-0 xl:px-12 text-[#585858] text-center sm:text-left space-y-6 text-[1.1rem] md:text-[1.25rem] xl:text-[1.38rem] 2xl:text-[1.5rem] font-sansation tracking-wide lg:tracking-wider">
                        <p>
                            I'm a creative developer from Kerala, India, holding a Bachelor’s in Data Science. I combine technical skill with a strong design aesthetic to bring concepts to life.
                        </p>
                        {/* <p>
                            My expertise bridges design and development — integrating beautiful user interfaces with fluid animations and robust functionality to create engaging user experiences, from frontend to backend.
                        </p>
                        <p>
                            I embrace every challenge with curiosity and a desire to solve problems creatively. Learning and evolving is part of my process.
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
