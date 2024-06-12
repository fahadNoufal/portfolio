import React from 'react'
import cc from "../resources/works/work-chat-circle.png"
import djangologo from "../resources/bw-logo/django-logo.png"
import gsaplogo from "../resources/bw-logo/django-logo.png"
import js from "../resources/bw-logo/js-logo.png"
import mui from "../resources/bw-logo/mui-logo.png"
import py from "../resources/bw-logo/py-logo.png"
import reactlogo from "../resources/bw-logo/react-logo.png"
import reduxlogo from "../resources/bw-logo/redux-logo.png"
import tailwindlogo from "../resources/bw-logo/tailwind-logo.png"
import routerlogo from "../resources/bw-logo/router-logo.png"

import arrow from "../resources/bw-logo/arrow-proj-details.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const ProjectDetails = ({technos,type,description,name,num,platform,platformSub,github='',visit='',handleBackClick}) => {

    const techStack={
        python:["Python" , py],
        django:["django",djangologo],
        js:["javascript",js],
        mui:["material UI",mui],
        gsap:["gsap",gsaplogo],
        react:["react",reactlogo],
        redux:["redux",reduxlogo],
        tailwind:["tailwind",tailwindlogo],
        router:["router",routerlogo],
    }

    const tl=gsap.timeline();

    useGSAP(()=>{

    tl.set('.proj-details-curtain',{y:0})
    tl.to('.details-curtain',{y:0,duration:1,stagger:{each:0.05,from:'edges'}})

    tl.set('.project-details-container',{
        y:0,opacity:1,
    })
    tl.from(".proj-detail-img",{
        width:"100%",
        yPercent:100,
        duration:2,
        ease:'power3.out'
    })
    tl.from([".proj-subheads",".proj-num"],{
        yPercent:-200,
        opacity:0,
        duration:2,
        ease:'power3.out'
    },"<")
    tl.from('.tech-stack-item',{
        yPercent:200,
        opacity:0,
        duration:1.5,
        delay:0.6,
        ease:'back.out'
    },"<")
    tl.to('.projd-name-cover',{
        yPercent:100,
        duration:2.5,
        ease:'power3.out'
    },"-=1")
    tl.from('.proj-details-line',{
        xPercent:100,
        duration:2,
        delay:0.3,
        ease:'power3.out'
    },"<")
    })


    const Tech=({name,img})=>{
      return(
        <div className=" tech-stack-item w-full  capitalize flex flex-col gap-1 sm:gap-2 font-sansation text-[0.9rem] sm:text-[1rem] 
                        scale-75 sm:scale-90 md:scale-100 xl:scale-125 text-center sm:text-left">
            <img className=' w-[64px] h-[54px] object-cover' src={img} alt={name} />
            <span className=''>{name}</span>
        </div>
    )
    }

    const techs= technos.map((tech)=>{
        return(
            <Tech name={techStack[tech][0]} img={techStack[tech][1]}/>
        )
    }
    )


  

  return (
    <div className=" bg-black-bg overflow-x-hidden ">

        <div className=' rounded-b-[1.5rem] overflow-hidden sm:rounded-b-[3rem] bg-white-bg  pl-4 sm:pl-[2rem] pb-[3rem] sm:pb-[4.25rem] pt-[2.25rem] relative
                        pr-4 sm:pr-[3rem] xl:pr-[8.75rem]'>
            <div className=" proj-subheads flex capitalize font-sansation  w-[40%] pb-[6.5rem] justify-between items-start opacity-50
                            flex-col gap-14 sm:gap-0 sm:flex-row md:text-[1.25rem] xl:text-[1.6rem]">
                <h4>
                    {type}
                </h4>
                <div>
                    <h4>
                        {platform}
                    </h4>
                    <h4 className=' ml-8 -mt-2'> 
                        {platformSub}
                    </h4>
                </div>
            </div>
            <div className=" proj-details-line h-[3px] w-full bg-black absolute left-0 right-0 opacity-10"></div>
            <div className="proj-num font-humane-black text-[14rem]  absolute  opacity-30 -top-[5rem]
                            right-3 sm:right-[4rem] xl:right-[8.75rem]">
                {num}
            </div>

            <div className=" pt-[9rem] sm:pt-[12rem] w-full flex justify-between items-start
                            flex-col sm:flex-row pb-[4rem] xl:pb-[8rem]">
                <div className="proj-info w-full gap-[4rem] flex flex-col items-start">
                    <h1 className='font-sansation overflow-hidden relative text-[4rem] md:text-[5.5rem] xl:text-[7.5rem] capitalize'>
                        <div className="projd-name-cover absolute w-full h-full bg-white-bg top-0 left-0"></div>
                        <div className="proj-details-name">
                            .{name}
                        </div>
                    </h1>
                    <img 
                        className=' proj-detail-img m-auto sm:mx-0 sm:mb-0 sm:w-[80%] h-[450px] sm:h-[650px] xl:h-[1000px] mt-[-3rem]' 
                        src={cc} 
                        alt="" 
                    />
                    <p className=' text-[1.25rem] sm:text-[1.5rem] font-sansation-light opacity-70  leading-6 sm:leading-7
                                    sm:w-[90%] xl:w-[60%] mt-[-1rem] sm:mt-0 '>
                        {description}
                    </p>
                </div>
                <div className="tech-stack flex mt-6 sm:mt-10 sm:flex-col 
                                sm:gap-6 md:gap-12 xl:gap-16 -mx-4">
                    {techs}
                </div>
            </div>

            <div className="flex justify-between font-humane-black tracking-wide uppercase
                             -mx-4 sm:mx-0 text-[2.5rem] sm:text-[3.5rem] xl:text-[5rem]">
                <div className="go-back  items-center flex sm:gap-3 opacity-60 
                                interactable scale-cursor" data-type='details-back'
                    onClick={handleBackClick}>
                    <img src={arrow} className=' scale-50 md:scale-[0.8] rotate-[-135deg] ' alt="" />
                    <span className=' leading-[100%]'>go back</span>
                </div>
                <div className=" flex gap-4 md:gap-[5rem]">
                    <div className="go-back  items-center flex md:gap-3">
                        <a href={visit} className=' leading-[100%]'>visit</a>
                        <img src={arrow} className=' scale-50 md:scale-[0.95] ' alt="" />
                    </div>
                    <div className="go-back  items-center flex md:gap-3">
                        <a href={github} className=' leading-[100%]'>github</a>
                        <img src={arrow} className=' scale-50 md:scale-[0.95] ' alt="" />
                    </div>
                </div>
            </div>




        </div>
        <div className=" w-full ">
            <div className=' py-5 text-2xl text-[#e8e8e8] mt-2 tracking-wide  opacity-80 font-sansation flex justify-between gap-4 sm:gap-10 w-[40%] 
                             text-[1.2rem] pl-6 sm:pl-[4rem] xl:pl-[6rem]'>
                <a href=" ">About</a>
                <a href=" ">Service</a>
                <a href=" ">Contact</a>
                <a href=" ">Projects</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails