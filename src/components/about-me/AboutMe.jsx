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
          yPercent: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
        },
        "<"
      )
      .from(
        ".about-description p",
        {
          yPercent: 100,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
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
      className="about-section relative z-10 w-full bg-[#FDFCF9] rounded-3xl px-6 sm:px-10 lg:px-20 py-16  overflow-hidden"
    >
      <header className="text-center mb-10">
        <h1 className="who-i-heading text-[#444] text-[2.75rem] sm:text-[5rem] xl:text-[6rem] 2xl:text-[7.5rem] font-bruno-ace border-y border-black border-opacity-20 px-4 sm:px-0 inline-block">
          Who am I?
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-between mt-4 text-[#858585] text-sm sm:text-base lg:text-lg font-days-one gap-2">
          <span className="subtext-line">A creator at heart</span>
          <span className="subtext-line hidden sm:inline">| weaving a tale of</span>
          <span className="subtext-line">innovation and adventure</span>
        </div>
      </header>

      <div className="flex flex-col md:flex-row items-center sm:items-start gap-10 sm:gap-16">
        <div className="profile-placeholder md:w-1/4   max-h-full  rounded-2xl shadow-md mx-auto sm:mx-0 flex items-center justify-center transition-transform duration-500 hover:scale-105 overflow-hidden">
          <img src={photo} className="text-[#bbb] text-sm text-center w-full h-full rounded-lg object-cover "/>
        </div>

        <div className="flex flex-col items-center sm:items-start flex-1">
          <h2 className="name-title font-sansation-light text-[#585858] text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] 2xl:text-[5.4rem] mb-6 text-center sm:text-left tracking-tight">
            Fahad Noufal
          </h2>

          <div className="about-description border-y border-black border-opacity-20 py-8 px-6 sm:px-0 xl:px-12 text-[#585858] text-center sm:text-left space-y-6 text-[1.1rem] md:text-[1.25rem] xl:text-[1.38rem] 2xl:text-[1.5rem] font-sansation tracking-wide lg:tracking-wider">
            <p>
              I'm a creative developer from Kerala, India, holding a Bachelor’s in Data Science. I combine technical skill with a strong design aesthetic to bring concepts to life.
            </p>
          </div>
            <p className=" about-description py-8 px-6 sm:px-0 xl:px-12 text-[#585858] text-center sm:text-left space-y-6 text-[1.1rem] md:text-[1.25rem] xl:text-[1.38rem] 2xl:text-[1.5rem] font-sansation tracking-wide lg:tracking-wider hidden sm:block">
              A curious mind with a passion for blending code and creativity, turning ideas into immersive digital experiences. Skilled in crafting visually striking and user-friendly interfaces, while bringing innovation to every project. Always exploring the sweet spot where design meets technology."
            </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
