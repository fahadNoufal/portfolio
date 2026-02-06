import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import photo from '../../resources/fahad_img.jpg'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".who-i-heading", {
      yPercent: 200,
      duration: 1.2,
      opacity: 0,
    })
      
      .from(
        ".name-title",
        {
          yPercent: 150,
          opacity: 0,
          duration: 1.2,
        },
        "<0.2"
      )
      .from(
        ".subtext-line",
        {
          yPercent: 50,
          opacity: 0,
          stagger: 0.15,
          duration: 0.5,
        },
        "<0.2"
      )
      .from(
        ".about-description p",
        {
          yPercent: 50,
          opacity: 0,
          stagger: 0.3,
          duration: 0.9,
        },
        "-=0.8"
      );

    ScrollTrigger.create({
      trigger: ".about-section",
      start: "25% bottom",
      animation: tl,
      toggleActions: "play play play reverse",
    });

    gsap.from('.about-head-text', {
      yPercent: 100,
      ease: 'inOutCubic',
      duration: 1.3,
      opacity: 1,
      scrollTrigger: {
        trigger: '.about-section',
        start: '25% bottom',
        // end: '50% top',
        toggleActions: 'play play play reverse',
      }
    })
  });

  

  return (
    <section
      data-scroll-section
      className="about-section relative z-10 w-full bg-[#FDFCF9]  px-6 sm:px-10 lg:px-20 xl:px-40 py-16  overflow-hidden scale-95 pb-0"
    >
      <header className=" md:m-10 mt-20">
        <h1 className="uppercase  font-humane-black md:py-8 tracking-wide work-letters w-full text-[#444] text-[4rem] md:text-[11vw] sm:text-[5rem] xl:text-[6rem] 2xl:text-[7.5rem]  border-y border-black border-opacity-20 md:px-4 sm:px-0 inline-block">
          <div className="  overflow-hidden w-full ">
            <div className=" about-head-text leading-[6rem]  transform translate-y-[5px]">
              <span className=" hidden md:inline">A Little Bit </span>
               About Me!
            </div>
          </div>
        </h1>
        <div className="flex flex-wrap justify-between mb-4 md:mb-0 mt-4 text-[#858585] text-sm sm:text-base lg:text-lg font-days-one gap-2">
          <span className="subtext-line">A creator at heart</span>
          <span className="subtext-line hidden md:inline"> weaving a tale of</span>
          <span className="subtext-line">innovation and adventure</span>
        </div>
      </header>

      <div className="flex flex-col  md:flex-row gap-10 sm:gap-16 pb-14 md:pb-28 items-center">
        <div className="profile-placeholder w-full md:w-1/4 flex-col  md:translate-x-20 bg-red-100 fill-available mx-auto sm:mx-0 flex items-center justify-start transition-transform duration-500 hover:scale-105 ">
          <div className=" flex flex-col justify-center items-center h-full ">
            <img alt="profile" src={photo} className="text-[#bbb] shadow-md text-sm h-full  text-center z-10 relative w-full  object-cover "/>
          </div>
        </div>

        <div className="flex flex-col md:pl-20  sm:items-start flex-1">
          

          <div className="about-description md:py-8 md:px-6 sm:px-0 gap-40 xl:px-12 text-[#585858] text-left space-y-6 text-[1rem] md:text-[1.25rem] xl:text-[1.38rem] 2xl:text-[1.5rem] font-sansation tracking-wide lg:tracking-wider sm:block">
            <p>
              I’m an aspiring data scientist from Kerala, India, holding a Bachelor’s degree in Data Science. I combine technical skills with real world practical applications to bring concepts to life.
            </p>
            <span className=" md:hidden w-full block h-[0.5px] opacity-10 bg-black"></span>
            <p className=" ">
              A curious mind with a passion for solving problems and building solutions that can create a positive impact in everyday life lead to meaningful business breakthroughs which I can truly call my own.
            </p>
            <span className=" md:hidden w-full block h-[0.5px] opacity-10 bg-black"></span>
            <p className=" ">
              I have a strong foundation in programming and mathematics, along with a solid understanding of business. I learn quickly, think deeply, and always push myself to go the extra mile. I don’t just aim to complete tasks, I focus more on quality and strive to do my work better than the rest.
            </p>
          </div>
            
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
