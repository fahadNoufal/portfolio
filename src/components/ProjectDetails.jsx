import django from "../resources/tech-stack/Django.svg"
import docker from "../resources/tech-stack/Docker.svg"
import aws from "../resources/tech-stack/aws_icon.svg"
import fastapi from "../resources/tech-stack/FastAPI.svg"
import git from "../resources/tech-stack/Git.svg"
import gcp from "../resources/tech-stack/Google Cloud.svg"
import pandas from "../resources/tech-stack/Pandas.svg"
import python from "../resources/tech-stack/Python.svg"
import pytorch from "../resources/tech-stack/pytorch_logo.svg"
import langgraph from "../resources/tech-stack/Langgraph.svg"

import arrow from "../resources/bw-logo/arrow-proj-details.png"


const ProjectDetails = ({technos=[],type,description,name='',num,platform,platformSub,github='',visit='',referenceImg='',handleBackClick}) => {

    const techStack={
        python:["python" , python ],
        django:["django" , django],
        fastapi:["fastapi" , fastapi],
        docker:["docker" , docker],
        aws:["aws" , aws],
        gcp:["gcp" , gcp],
        git:["git" , git],
        pandas:["pandas" , pandas],
        pytorch:["pytorch" , pytorch],
        langgraph:["langgraph", langgraph],
    }

    const Tech=({name,img})=>{
      return(
        <div className=" tech-stack-item items-center w-full capitalize flex flex-col gap-1 sm:gap-2 font-sansation text-[0.9rem] sm:text-[1rem] 
                        scale-75 sm:scale-90 md:scale-100 xl:scale-125 text-center sm:text-left">
            <img className=' w-[60px]  object-cover' src={img} alt={name} />
            <span className=''>{name}</span>
        </div>
    )
    }

    const techs= technos.map((tech)=>{
        return technos&&(
            <Tech key={techStack[tech][0]} name={techStack[tech][0]}  img={techStack[tech][1]}/>
        )
    }
    )


  

  return (
    <div className=" bg-black-bg overflow-x-hidden ">

        <div className=' rounded-b-[1.5rem] overflow-hidden sm:rounded-b-[3rem] bg-[#f4f4f4]  pl-4 sm:pl-[2rem] pb-[3rem] sm:pb-[4.25rem] pt-[2.25rem] relative
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
                    <h4 className=' sm:ml-8 -mt-1 sm:-mt-2'> 
                        {platformSub}
                    </h4>
                </div>
            </div>
            <div className=" proj-details-line h-[3px] w-full absolute bg-black left-0 right-0 opacity-10"></div>
            <div className="proj-num font-humane-black text-[14rem]  absolute  opacity-30 -top-[5rem]
                            right-3 sm:right-[4rem] xl:right-[8.75rem]">
                {num}
            </div>

            <div className=" pt-[6rem] sm:pt-[12rem] w-full flex justify-between items-start
                            flex-col sm:flex-row pb-[4rem] xl:pb-[8rem]">
                <div className="proj-info w-full gap-[4rem] flex flex-col items-start">
                    <h1 className='font-sansation overflow-hidden relative text-[4rem] md:text-[5.5rem] xl:text-[7.5rem] capitalize'>
                        <div className="projd-name-cover absolute w-full h-full bg-[#f4f4f4] top-0 left-0"></div>
                        <div className="proj-details-name">
                            .{name}
                        </div>
                    </h1>
                    <img 
                        className=' proj-detail-img sm:mx-0 sm:mb-0 sm:w-[80%] h-[450px] sm:h-[650px] xl:h-auto xl:max-h-[90svh] mt-[-3rem] w-full object-cover md:object-contain' 
                        src={referenceImg} 
                        alt="" 
                    />
                    <p className=' text-[1.25rem] sm:text-[1.5rem] font-sansation-light opacity-70  leading-6 sm:leading-7
                                    sm:w-[90%] xl:w-[60%] mt-[-1rem] sm:mt-0 '>
                        {description}
                    </p>
                </div>
                <div className="tech-stack flex mt-6 sm:mt-10 sm:flex-col 
                                sm:gap-6 md:gap-12 xl:gap-16 -mx-4 ">
                    {techs}
                </div>
            </div>

            <div className="flex justify-between font-humane-black tracking-wide uppercase
                             -mx-4 sm:mx-0 text-[2.5rem] sm:text-[3.5rem] xl:text-[5rem]">
                <div className="go-back  items-center flex sm:gap-3 opacity-60 
                                interactable scale-cursor" data-type='details-back'
                    onClick={handleBackClick}>
                    <img src={arrow} className=' scale-[0.4] sm:scale-50 md:scale-[0.8] rotate-[-135deg] ' alt="" />
                    <span className=' -ml-2 sm:-ml-0 leading-[100%]'>back</span>
                </div>
                <div className=" flex gap- md:gap-[5rem]">
                    {visit && <div className="go-back  items-center flex md:gap-3 cursor-pointer interactable " data-type='visit'>
                        <a target='_blank' rel='noreferrer' href={visit} className=' leading-[100%]'>visit</a>
                        <img src={arrow} className=' -ml-3 sm:ml-0 scale-50 md:scale-[0.95] ' alt="" />
                    </div>}
                    {github && <div className="go-back  items-center flex md:gap-3 cursor-pointer interactable"  data-type='visit'>
                        <a target='_blank' rel='noreferrer' href={github} className=' leading-[100%]'>github</a>
                        <img src={arrow} className=' -ml-3 sm:ml-0 scale-50 md:scale-[0.95] ' alt="" />
                    </div>}
                </div>
            </div>




        </div>
        <div className=" w-full ">
            <div className=' py-5 text-2xl text-[#e8e8e8] mt-2 tracking-wide  opacity-80 font-sansation justify-around flex sm:justify-between gap-4 sm:gap-10 sm:w-[40%] 
                             text-[1rem]  sm:text-[1.2rem] sm:pl-[4rem] xl:pl-[6rem]'>
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