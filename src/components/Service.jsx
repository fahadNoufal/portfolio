import React from "react";
import aws from '../resources/tech-stack/aws_icon.svg'
import docker from '../resources/tech-stack/Docker.svg'
import pandas from '../resources/tech-stack/Pandas.svg'
import googleCloud from '../resources/tech-stack/Google Cloud.svg'

import git from "../resources/tech-stack/Git.svg";
import python from "../resources/tech-stack/Python.svg";
import django from "../resources/tech-stack/Django.svg";
import FastAPI from "../resources/tech-stack/FastAPI.svg";
import pytorch from "../resources/tech-stack/pytorch_logo.svg";
import langgraph from "../resources/tech-stack/Langgraph.svg"

import bento1 from "../resources/service/service-creative-sol.jpg";
import nlp from '../resources/service/nlp-circle.gif'
import insights from '../resources/service/insights.jpg'
import dataVisualization from '../resources/service/data-visualization.jpeg'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: "power2.out", duration: 1 });

const HowCanIHelp = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Top bento boxes entrance with smoother, natural spring feel
    gsap.from(".bento-box-t", {
      y: 500,
      opacity: 0,
      rotateX: -6,
      transformOrigin: "center bottom",
      stagger: 0.2,
      ease: "power4.out",
      duration: 1.4,
      scrollTrigger: {
        trigger: ".bento-container",
        start: "30% bottom",
        toggleActions: "play none none reverse",
      },
    });

    // Bottom bento boxes entrance with natural lift
    gsap.from(".bento-box-b", {
      y: 50,
      opacity: 0,
      rotateX: 4,
      stagger: 0.25,
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".bento-container",
        start: "50% bottom",
        toggleActions: "play none none reverse",
      },
    });

    // Parallax effect for images (desktop only)
    if (window.innerWidth > 768) {
      gsap.to(".bento-box img", {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: ".bento-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Title reveal animation - more organic motion
    gsap.from(".how-help", {
      y: 30,
      opacity: 0,
      scale: 0.96,
      ease: "power4.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: ".how-help",
        start: "10% bottom",
        toggleActions: "play none none reverse",
      },
    });

    // Tech stack container smooth stagger with natural bounce

    // Line text reveal with smooth slide
    gsap.from(".line-txt .text", {
      yPercent: 120,
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
      stagger: 0.2,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".line-txt",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    const textElements = gsap.utils.toArray(".line-txt .text");

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 100%",
          end: "center 20%",
          scrub: true,
        },
      });
    });

    // Hover animations for bento tags
    gsap.utils.toArray(".bento-tag").forEach((tag) => {
      tag.addEventListener("mouseenter", () => {
        gsap.to(tag, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      tag.addEventListener("mouseleave", () => {
        gsap.to(tag, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    // Hover image zoom for bento boxes
    gsap.utils.toArray(".bento-box").forEach((box) => {
      const img = box.querySelector("img");
      if (img) {
        box.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.04, duration: 0.4, ease: "power2.out" });
        });
        box.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
        });
      }
    });
  });

  const ArrowMark = () => {
    return (
      <svg
        className="aspect-square h-[6rem] md:h-[10rem] lg:h-[15rem] xl:h-[20rem] -rotate-45 "
        viewBox="0 0 127 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.1086 66.5246L37.1086 60.189H80.5533L61.0937 40.7294L65.6192 36.2039L92.7721 63.3568L65.6192 90.5097L61.0937 85.9842L80.5533 66.5246L37.1086 66.5246Z"
          fill="#b6b6b633"
        />
      </svg>
    );
  };

  const serviceText = "EXPERTISE".split("").map((char, index) => (
    <div
      className="service-letters leading-[90%] opacity-0 translate-y-[50%] bg-gradient-to-t from-[#333] to-white bg-clip-text text-[35vw] md:text-[28svw] text-transparent"
      key={index}
    >
      <div className="inline-block">{char}</div>
    </div>
  ));
  useGSAP(() => {
    gsap.to(".service-letters", {
      y: 0,
      stagger: 0.08,
      ease: "power4.out",
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".service-txt-container",
        start: "top 45%",
        end: "50% top",
        toggleActions: "play play play reverse",
        onLeave: () => {
          gsap.to(".service-desc-text", {
            yPercent: 100,
            opacity: 0,
            duration: 1,
          });
        },
      },
      onComplete: () => {
        gsap.to(".service-desc-text", {
          y: 0,
          opacity: 0.4,
          ease: "power4.out",
          duration: 1,
        });
      },
      
      
    });
  });

  return (
    <div
      id="services"
      data-scroll-section
      className="text-center sm:mt-20 xl:mt-40 py-[11rem] items-center w-full "
    >
      <h1
        className=" relative z-10 text-white font-humane-black 
                         text-[3.2rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem]"
      >
        <span className=" overflow-hidden inline-block  tracking-wide pt-3 px-6">
          <h1 className="service-txt-container mt-20 md:mt-0 h-[30svh] md:h-[70dvh] flex font-humane-black ">
            <span className="flex overflow-hidden pt-8 flex-col items-center md:items-start">
              <div className="flex overflow-hidden">{serviceText}</div>
            </span>
          </h1>
        </span>
      </h1>

      <div
        className="bento-container relative overflow-hidden mt-[5rem]  lg:h-[100svh] gap-4 flex lg:flex-row flex-col rounded-[1.5rem]
                         p-[1.2rem] sm:p-[2.5rem] lg:p-[1.5rem] sm:tag-lg"
      >
        <div className="bc-1 flex-[3] gap-4 flex flex-col">
          <div
            className=" bento-box-t bento-1 h-[55%] w-full flex flex-col justify-between bento-box z-10
                                gap-[2rem] lg:gap-0 "
          >
            <img className=" opacity-70 " src={bento1} alt="" />
            <div className="flex items-start justify-between font-humane-black">
              <div className=" items-start tracking-wider text-yellow-bg flex flex-col">
                <span
                  className=" mt-[-2rem] lg:mt-0 xl:mt-[-3rem]
                                            text-[3.5rem] sm:text-[7rem] md:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] mb-[-1.6rem] md:mb-[-5.5rem] lg:mb-[-4rem] xl:mb-[-5.4rem] 2xl:mb-[-7rem]"
                >
                  FINDING
                </span>
                <span className=" text-[2.2rem] sm:text-[4rem] md:text-[6rem] lg:text-[4rem] xl:text-[6rem] 2xl:text-[8rem]">
                  CREATIVE SOLUTIONS
                </span>
              </div>
              <div className="b-dot h-10 md:h-14 aspect-square  border-8 md:mt-[3rem] scale-75 sm:scale-100 rounded-full bg-yellow-bg border-[#969696]"></div>
            </div>
            <div
              className="flex justify-between text-left text-white -mt-4 items-end font-sansation-light
                                    leading-[120%] sm:text-[1.2rem] md:text-[1.7rem] lg:text-[1.5rem] 2xl:text-[1.8 rem]"
            >
              <div className="w-[70%] lg:leading-[110%]  xl:leading-normal ">
                Transforming data and language into intelligent, production-ready AI.
              </div>
              <div className="bento-tag interactable  cursor-button  ">
                STRATEGY
              </div>
            </div>
          </div>

          <div className="flex flex-1 gap-4 ">
            <div className=" bento-box-b bento-2 relative bento-box h-[150px] sm:h-[30svh] lg:h-auto bento-box-border flex-[2] mix-blend-lighten">
              <img
                src={dataVisualization}
                alt=""
                className=" mix-blend-lighten mx-[-25px] object-cover "
              />
              <div className="flex text-white h-full text-sm md:text-xl w-full justify-end opacity-75 items-end">
                AI Automation
              </div>
            </div>

            <div className=" bento-box-b bento-3 bg-black  bento-box flex-[3]">
              <img className=" opacity-80" src={insights} alt="" />
              <div className="flex h-full w-full justify-end items-end">
                <div className="bento-tag interactable  cursor-button bg-black bg-opacity-50 sm:mr-8">
                  INSIGHTS
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bc-2 lg:flex-[2] gap-4  sm:flex flex-col ">
          <div
            className=" bento-box-t bento-4 justify-between items-end bento-box bento-box-border flex-[4] z-10 mix-blend-lighten  
                                h-[400px] mb-4 sm:mb-0 sm:h-auto "
          >
            <img className=" object-cover" src={nlp} alt="" />

            <svg
              className="aspect-square  
                                     h-[7rem] sm:h-[10rem] lg:h-[6rem] xl:h-[10rem] 
                                     sm:mt-[40svh] lg:mt-0"
              viewBox="0 0 127 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="63.3564"
                y="3.39411"
                width="84.8"
                height="84.8"
                rx="42.4"
                transform="rotate(45 63.3564 3.39411)"
                stroke="#D1FD0A"
                strokeWidth="4.8"
              />
              <path
                d="M37.1086 66.5246L37.1086 60.189H80.5533L61.0937 40.7294L65.6192 36.2039L92.7721 63.3568L65.6192 90.5097L61.0937 85.9842L80.5533 66.5246L37.1086 66.5246Z"
                fill="#D1FD0A"
              />
            </svg>
            <div className="bento-tag interactable  cursor-button  scale-125 mr-6 mb-4">
              NLP Engineering
            </div>
          </div>
          <div className=" bento-box-b bento-5 flex text-black font-humane-black bg-yellow-bg bento-box flex-[1]">
            <div
              className="flex flex-1 flex-col justify-center items-start
                                    pl-4 sm:pl-0"
            >
              <span
                className="  mt-[-1rem] mb-[-2.5rem] sm:my-[-2.5rem] 
                                          text-[4rem] sm:text-[6rem] xl:text-[8rem] 2xl:tracking-wide"
              >
                AI & ML
              </span>
              <span
                className=" font-sansation-light 
                                          text-[1.2rem] mt-4 xl:mt-0 xl:text-[1.5rem]"
              >
                Models to real-world impact
              </span>
            </div>
            <div className="flex flex-col justify-between pr-4 sm:pr-0">
              <span className=" font-humane-black text-[2rem] sm:text-[4rem] mt-[-.5rem]">
                ML
              </span>
              <div className=" aspect-square sm:w-12 w-7 rounded-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="tech-stack lg:tech-stack-bg  w-full overflow-hidden border-y-2 border-white border-opacity-20 
                          mt-[3.5rem] sm:mt-[8rem] lg:mt-[10rem]  py-12 sm:py-[3.5rem] lg:py-[4.5rem]"
      >
        <span className="  md:ml-[80px] flex flex-col lg:flex-row gap-[2rem] sm:gap-[3rem] lg:gap-[5rem] ">
          <section className="flex justify-around  sm:gap-[3rem] lg:gap-[5rem]">
            <div className=' tech-stack-item odd-tech-item' id="python">
              <img src={python} alt="" />
            </div>
            <div className=' tech-stack-item' id="pytorch">
              <img src={pytorch} alt="" />
            </div>
            <div className=' tech-stack-item odd-tech-item' id="pandas">
              <img src={pandas} alt="" />
            </div>
            <div className=' tech-stack-item' id="aws">
              <img src={aws} alt="" />
            </div>
            <div className=' tech-stack-item odd-tech-item' id="langgraph">
              <img src={langgraph} alt="" />
            </div>
          </section>
          <section className="flex justify-around sm:gap-[3rem] lg:gap-[5rem]">
            <div className=' tech-stack-item' id="fastapi">
              <img src={FastAPI} alt="" />
            </div>
            <div className=' tech-stack-item odd-tech-item' id="docker">
              <img src={docker} alt="" />
            </div>
            <div className=' tech-stack-item' id="google-cloud">
              <img src={googleCloud} alt="" />
            </div>
            <div className=' tech-stack-item odd-tech-item' id="git">
              <img src={git} alt="" />
            </div>
            <div className=' tech-stack-item' id="django">
              <img src={django} alt="" />
            </div>
          </section>
        </span>
      </div>

      <div className="line w-full h-[2px] mt-4 sm:mt-10 bg-white opacity-20"></div>

      <div
        className="overflow-hidden line-txt leading-[100%] mt-[10rem] uppercase 
                        text-[2.2rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] 
                        "
      >
        <div className="text interactable  cursor-button " data-type="story">
          <div className=" line-heading flex sm:gap-12  items-center">
            <h2>Automation</h2>
            <ArrowMark />
          </div>
          <span>Workflows</span>
        </div>

        <div className="text interactable " data-type="hook">
          <div className=" line-heading  flex sm:gap-12  items-center">
            <h2>BUSINESS</h2>
            <ArrowMark />
          </div>
          <span>UNDERSTANDING</span>
        </div>
        <div className="text interactable " data-type="stands-out">
          <div className=" line-heading flex sm:gap-12  items-center">
            <h2>Cloud & MLOps</h2>
            <ArrowMark />
          </div>
          <span>END TO END</span>
        </div>
        <div className="text interactable " data-type="seo">
          <div className=" line-heading flex sm:gap-12  items-center">
            <h2>Deep Learning </h2>
            <ArrowMark />
          </div>
          <span>Gen-AI Systems</span>
        </div>
        <div className="text interactable" data-type="animation">
          <div className=" line-heading flex sm:gap-12  items-center">
            <h2>ML Modeling</h2>
            <ArrowMark />
          </div>
          <span>REAL WORLD!!</span>
        </div>
      </div>
    </div>
  );
};

export default HowCanIHelp;
