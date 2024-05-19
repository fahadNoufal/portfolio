import React from 'react'
import Project from './Project'
import p1 from '../resources/works/work-chat-circle.png'
import p2 from '../resources/works/work-fashion-site.png'
import p3 from '../resources/works/work-task-flow.png'
import ProjectDetails from './ProjectDetails'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Works = () => {

    useGSAP(()=>{
        gsap.to('.work-letters',{
            y:0,
            stagger:0.2,
            ease:'power4.out',
            duration:1.5,
            opacity:1,
            scrollTrigger:{
                trigger:'.work-txt-container',
                start:'top 45%',
                end:'50% top',
                onLeave:()=>{
                    // gsap.to()
                },
                toggleActions:'restart play play reverse'
            }
            
        })
    })


    const allProjDetails={
        p1:{
            name:"chat circle",
            num:'01',
            type:'landing website',
            platform:'social media',
            platformSub:'application',
            description:"Online text based social media application in which the users create rooms in and people can join and share their thoughts.",
            technos:["python","mui","react","redux","router","gsap","tailwind"],
            github:'',
            visit:'',
            
        },
        p2:{

        },
        p3:{

        }
    }

    let workText ='WORKS'.split('').map((char, index) => (
            <div className=' work-letters leading-[90%] opacity-0 translate-y-[100%] bg-gradient-to-t from-[#333] to-white bg-clip-text text-transparent' key={index} >
                <div className='inline-block  translate-y- '>{char}</div>
            </div>
            // <div className='workText work-heading inline-block ' key={index}>{char}</div>
        ))




  return (
    <div className=' works overflow-hidden'>



        {/* {workText} */}
        {/* <span className='workText'> S </span> */}
        <h1 className=' work-txt-container h-[100svh] flex justify-center items-center font-humane-black 
                          text-[12.5rem] sm:text-[15rem] md:text-[20rem] lg:text-[30rem] xl:text-[40rem] '>
            {/* 
            <div className=' border leading-[90%] bg-gradient-to-t from-[#333] to-white bg-clip-text text-transparent'>
                <div className='inline-block  translate-y- '>S</div>
            </div>
            */}
            <span className='flex overflow-hidden pt-8'>
                {workText}
            </span>
        </h1>
        <div className="projs-container -mt-[0svh]">
            <Project    
                title={"Chat circle"} 
                sub1={"chat based"} 
                sub2={"social media application"} 
                thumb={"Find your circle"} 
                no={"01"}
                img={p1}
            />
            
            {/* <ProjectDetails 
                {...allProjDetails.p1}
            /> */}

            <Project 
                title={"fashion site"} 
                sub1={"online"} 
                sub2={"Ecommerse website"} 
                thumb={"Get your best outfit"} 
                no={"02"}
                img={p2}
            />

            <Project 
                title={"Task flow"} 
                sub1={"Modern todo app"} 
                sub2={"with stunning animation"} 
                thumb={"Get your things done"} 
                no={"03"}
                img={p3}
            />
        </div>

        <div className="flex justify-center mt-[8rem] mb-[20rem] border-y-[2px] border-[#ffffff40] text-[#ffffff90] font-sansation-light items-center
                        xl:text-[5rem] sm:text-[3.5rem] text-[2rem]">
            <span className=' leading-[100%]'>
                More Works
            </span>
            <svg className='aspect-square sm:ml-[-1.5rem] xl:ml-0 h-[5rem] sm:h-[8rem] xl:h-[12rem] -rotate-45  text-yellow-bg' viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* <rect x="63.3564" y="3.39411" width="84.8" height="84.8" rx="42.4" transform="rotate(45 63.3564 3.39411)" stroke="#D1FD0A" stroke-width="4.8"/> */}
                <path d="M37.1086 66.5246L37.1086 60.189H80.5533L61.0937 40.7294L65.6192 36.2039L92.7721 63.3568L65.6192 90.5097L61.0937 85.9842L80.5533 66.5246L37.1086 66.5246Z" fill='#D1FD0A'/>
            </svg>
        </div>


    </div>
  )
}

export default Works