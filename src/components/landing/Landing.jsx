import React from 'react'
import creative from '../../resources/Creative.svg'
import flower from '../../resources/flower.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Landing = () => {

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.to('.loading-wave',{
             yPercent:-190,duration:3, opacity:0,ease: 'power3.in', repeat:-1 ,
             scrollTrigger:{
                trigger:'.landing',
                start:'bottom 110%',
                end:'bottom 10%',
                scroller:'#app'

             }
        })
        gsap.to('.landing-text',{scale:0.7, opacity:0.5, ease:'',
            scrollTrigger:{
                trigger:'.landing-text',
                start:'bottom 99%',
                toggleActions:'restart play play reverse',
                end:'bottom 50%',
                scrub:1,
                scroller:'#app'

            }
        })

        gsap.to('.about-me',{yPercent:-50,ease:'power3.out',
            scrollTrigger:{
                trigger:'.about-me',
                start:'top bottom',
                end:'top 20%',
                scrub:1,
                scroller:'#app'
            }
        })
    })
    

  return (
    <div data-scroll-section className='landing bg-black-bg h-[100svh] w-full overflow-hidden relative '>
        <div className="landing-text relative flex flex-col justify-center text-center items-center h-full z-[1] ">
            <h4 className=' font-sansation-light  text-white
                             sm:text-[1.25rem]'>
                Hi there, i am
            </h4>
            <h2 className=" font-allison text-[#bfbfbf]
                             mt-[-0.5rem] sm:mt-0 text-[3.5rem] sm:text-[6rem] lg:text-[7.25rem]">
                Fahad Noufal
            </h2>
            <img src={creative} alt="" className=' px-2 sm:w-[70%] lg:w-[50%]' />
            <h3 className=' font-days-one  text-[#bfbfbf]
                             mt-[1.5rem] sm:mt-[2rem] lg:mt-[3.5rem] sm:text-[1.2rem] lg:text-[1.8rem]' >
                FRONTEND DEVELOPER
            </h3>
            <div className="flower absolute z-[-1] ">
                <img src={flower} alt=""  className=' mt-[16rem] sm:w-auto w-[60%] mx-auto mb-28 sm:mb-0 sm:h-[80svh]'/>
            </div>
            <div className="land-circle absolute w-[150%] sm:w-[120%] xl:w-[90%] aspect-square outline outline-[#444444a6] rounded-full bottom-[50%] z-[-2]">
            </div>
        </div>
        
        
        <svg className=' loading-wave absolute left-0 right-0 bottom-[-110%] ' viewBox="0 0 1280 851" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_323_298)">
                <g filter="url(#filter0_f_323_298)">
                    <path d="M640 1357.5C843.567 1357.5 1029.07 1296.64 1164.4 1196.75C1299.72 1096.86 1386.5 956.405 1386.5 798.5C1386.5 640.595 1299.72 500.14 1164.4 400.255C1029.07 300.363 843.567 239.5 640 239.5C436.433 239.5 250.93 300.363 115.599 400.255C-19.7232 500.14 -106.5 640.595 -106.5 798.5C-106.5 956.405 -19.7232 1096.86 115.599 1196.75C250.93 1296.64 436.433 1357.5 640 1357.5Z" 
                          stroke="white" strokeOpacity="0.1" strokeWidth="61"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_f_323_298" x="-251" y="95" width="1782" height="1407" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="57" result="effect1_foregroundBlur_323_298"/>
                </filter>
                <clipPath id="clip0_323_298">
                    <rect width="1280" height="851" fill="white"/>
                </clipPath>
            </defs>
        </svg>

        
    </div>
  )
}

export default Landing