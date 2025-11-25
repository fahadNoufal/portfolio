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
          stagger: 0.1,
          duration: 0.5,
        },
        "-=0.8"
      );

    ScrollTrigger.create({
      trigger: ".about-section",
      start: "25% bottom",
      animation: tl,
      toggleActions: "play play play reverse",
    });
  });

  return (
    <section
      data-scroll-section
      className="about-section relative z-10 w-full bg-[#FDFCF9]  px-6 sm:px-10 lg:px-20 xl:px-40 py-16  overflow-hidden scale-95 pb-0"
    >
      <header className="text- m-10 mt-20">
        <h1 className="uppercase font-humane-black tracking-wide work-letters w-full text-[#444] text-[2.75rem] sm:text-[5rem] xl:text-[6rem] 2xl:text-[7.5rem]  border-y border-black border-opacity-20 px-4 sm:px-0 inline-block">
          A Little Bit About Me!
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-between mt-4 text-[#858585] text-sm sm:text-base lg:text-lg font-days-one gap-2">
          <span className="subtext-line">A creator at heart</span>
          <span className="subtext-line hidden sm:inline">| weaving a tale of</span>
          <span className="subtext-line">innovation and adventure</span>
        </div>
      </header>

      <div className="flex flex-col md:flex-row  gap-10 sm:gap-16 pb-28 items-center">
        <div className="profile-placeholder md:w-1/4 flex-col  translate-x-20 max-h-full mx-auto sm:mx-0 flex items-center justify-start transition-transform duration-500 hover:scale-105 ">
          <div className=" flex flex-col justify-center items-center ">
            <img alt="profile" src={photo} className="text-[#bbb] shadow-md text-sm  text-center z-10 relative w-full  object-cover "/>
          </div>
        </div>

        <div className="flex flex-col pl-20  sm:items-start flex-1">
          

          <div className="about-description flex py-8 px-6 sm:px-0 gap-40 xl:px-12 text-[#585858] text-center sm:text-left space-y-6 text-[1.1rem] md:text-[1.25rem] xl:text-[1.38rem] 2xl:text-[1.5rem] font-sansation tracking-wide lg:tracking-wider sm:block">
            <p>
              I'm a creative developer from Kerala, India, holding a Bachelor’s in Data Science. I combine technical skill with a strong design aesthetic to bring concepts to life.
            </p>
            <p className=" ">
              A curious mind with a passion for blending code and creativity, turning ideas into immersive digital experiences. Skilled in crafting visually striking and user-friendly interfaces, while bringing innovation to every project. Always exploring the sweet spot where design meets technology."
            </p>
            <p className=" ">
              A curious mind with a passion for blending code and creativity, turning ideas into immersive digital experiences. Skilled in crafting visually striking and user-friendly interfaces, while bringing innovation to every project. Always exploring the sweet spot where design meets technology."
            </p>
          </div>
            
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
