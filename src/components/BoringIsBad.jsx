import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { scrollTrigger } from 'gsap/ScrollTrigger'
import smiley from '../resources/smiley.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const BoringIsBad = () => {

    useGSAP(()=>{
        gsap.to('.am-here-texts span',{ x:'100%',repeat:1,scrollTrigger:{
            trigger:'.am-here',
            start:'top bottom',
            end:'bottom top',
            toggleActions:'restart pause play pause'
        }})
    })

  return (
    <div className=' flex flex-col sm:gap-24 pb-20 relative z-10'>
        <div className=' h-[100svh]  flex text-white flex-col justify-center uppercase items-center font-humane-black 
                         text-[7rem] sm:text-[10rem] lg:text-[14rem]'>
        
            <h1 className="">boring</h1>

            <div className=" text-[3.5rem] sm:text-[6.5rem] ml-[40px] gap-4 sm:gap-6 items-end flex mt-[-40px] mb-[-30px]  sm:my-[-50px] lg:mt-[-70px] lg:mb-[-50px] ">
                <h2>
                    is
                </h2>
                <img src={smiley} className=' w-[160px] sm:w-auto' alt="" srcset="" />
                <h2>
                    bad
                </h2>
            </div>
            <h1> for business</h1>
        </div>


        <div className=" am-here w-[99svw] line-clamp-[20px] leading-[200%] sm:leading-[120%] overflow-hidden  my-[-10px] text-[#070707] font-allison justify-between  bg-yellow-bg
                         text-[2rem] md:text-[3rem] lg:text-[4rem]">
            <div className=" am-here-texts flex xl:w-[160%]  w-[120%] text-nowrap  justify-around
                             gap-[8rem] lg:gap-[12rem]">
                <span  className='hidden xl:block' >Thats why am here!</span>
                <span  className='hidden xl:block' >Thats why am here!</span>
                <span  className='hidden xl:block' >Thats why am here!</span>
                
                <span>Thats why am here!</span>
                <span>Thats why am here!</span>
                <span className=''>Thats why am here!</span>
            </div>

        </div>
    </div>
  )
}

export default BoringIsBad