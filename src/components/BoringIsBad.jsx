import React from 'react'
import smiley from '../resources/smiley.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const BoringIsBad = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.to('.boring',{yPercent:-130,scrollTrigger:{
            trigger:'.boring-is-bad',
            start:'top bottom',
            end:'75% top',
            scrub:1,
        }})
        gsap.to(['.for-business','.smiley'],{yPercent:-65,scrollTrigger:{
            trigger:'.boring-is-bad',
            start:'top bottom',
            end:'75% top',
            scrub:1,
        }})
        gsap.to('.smiley',{yPercent:-32,scale:1.5,scrollTrigger:{
            trigger:'.boring-is-bad',
            start:'top bottom',
            end:'85% top',
            scrub:1,
        }})
    })


  return (
    <div data-scroll-section className=' boring-is-bad  pb-20 relative z-10 pt-[10svh] sm:-mt-[20svh]'>
        <div className=' h-[50svh] md:h-[100svh] text-white uppercase font-humane-black 
                         text-[7rem] sm:text-[10rem] lg:text-[14rem]' data-type='boring'>
        
            <div className="flex flex-col sm:gap-24 justify-center items-center">
                <h1 className="boring  translate-y-[100%] sm:translate-y-[140%] ">boring</h1>

                <div className=" text-[3.5rem] sm:text-[6.5rem] ml-[40px] gap-4 sm:gap-6 items-end flex mt-[-40px] mb-[-30px]  sm:my-[-50px] lg:mt-[-70px] lg:mb-[-50px] ">
                    <h2>
                        is
                    </h2>
                    <img src={smiley} className=' smiley scale-50 translate-y-[25%] relative z-10 w-[160px] sm:w-auto' alt="" srcSet="" />
                    <h2>
                        bad
                    </h2>
                </div>
                <h1 className='for-business relative z-20 translate-y-[30%] sm:translate-y-[20%]'> for business</h1>
            </div>
        </div>
    </div>
  )
}

export default BoringIsBad