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


const ProjectDetails = ({technos,type,description,name,num,platform,platformSub,github='',visit=''}) => {

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

    const Tech=({name,img})=>{
      return(
        <div className=" w-full  capitalize flex scale-125 flex-col gap-2 font-sansation text-[1rem] ">
            <img className=' w-[64px] h-[54px] object-cover' src={img} alt={name} />
            <span className=''>{name}</span>
        </div>
    )
    }

    const techs= technos.map((tech)=>{
        console.log(techStack[tech]);
        return(
            <Tech name={techStack[tech][0]} img={techStack[tech][1]}/>
        )
    }
    )


  

  return (
    <div className=" bg-black-bg ">
        <div className=' rounded-b-[3rem] bg-white-bg  pl-[2rem] pb-[4.25rem] pt-[2.25rem] pr-[8.75rem] relative'>
            <div className="flex capitalize font-sansation w-[40%] pb-[6.5rem] justify-between items-start text-[1.6rem] opacity-50">
                <h4>
                    {/* Landing Website */}
                    {type}
                </h4>
                <div>
                    <h4>
                        {/* Social Media */}
                        {platform}
                    </h4>
                    <h4 className=' ml-8 -mt-2'> 
                        {/* Application */}
                        {platformSub}
                    </h4>
                </div>
            </div>
            <div className="h-[3px] w-full bg-black absolute left-0 right-0 opacity-10"></div>
            <div className="proj-num font-humane-black text-[14rem]  absolute right-[8.75rem] opacity-30 -top-[5rem]">
                {/* 01 */}
                {num}
            </div>

            <div className=" pt-[12rem] pb-[8rem] w-full flex justify-between items-start">
                <div className="proj-info w-full gap-[4rem] flex flex-col items-start">
                    <h1 className=' font-sansation text-[7.5rem] capitalize'>
                        .{name}
                    </h1>
                    <img className=' w-[80%] h-[1000px] mt-[-3rem]' src={cc} alt="" />
                    <p className=' text-[1.5rem] font-sansation-light opacity-70 w-[60%] leading-7'>
                        {/* Online text based social media application in which the users create rooms in and people can join and share their thoughts. */}
                        {description}
                    </p>
                </div>
                <div className="tech-stack gap-16 flex mt-10 flex-col ">
                    {/* <Tech name={"python"} img={py}/>
                    <Tech name={"Material UI"} img={mui}/>
                    <Tech name={"react"} img={reactlogo}/>
                    <Tech name={"redux"} img={reduxlogo}/>
                    <Tech name={"router"} img={routerlogo}/>
                    <Tech name={"GSAP"} img={gsaplogo}/>
                    <Tech name={"tailwind"} img={tailwindlogo}/> */}
                    {techs}
                </div>
            </div>

            <div className="flex justify-between text-[5rem] font-humane-black tracking-wide uppercase">
                <div className="go-back  items-center flex gap-3 opacity-60">
                    <img src={arrow} className=' scale-[0.8] rotate-[-135deg] ' alt="" />
                    <span className=' leading-[100%]'>go back</span>
                </div>
                <div className=" flex gap-[5rem]">
                    <div className="go-back  items-center flex gap-3">
                        <a href={visit} className=' leading-[100%]'>visit</a>
                        <img src={arrow} className=' scale-[0.95] ' alt="" />
                    </div>
                    <div className="go-back  items-center flex gap-3">
                        <a href={github} className=' leading-[100%]'>github</a>
                        <img src={arrow} className=' scale-[0.95] ' alt="" />
                    </div>
                </div>
            </div>




        </div>
        <div className=" w-full ">
            <div className=' py-5 text-2xl text-[#e8e8e8] mt-2 tracking-wide pl-[6rem] opacity-80 font-sansation flex justify-between gap-10 w-[40%] '>
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