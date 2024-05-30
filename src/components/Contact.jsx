import React from 'react'
import copywrite from '../resources/Frame 2762.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Contact = () => {

    useGSAP(()=>{
        
        gsap.from('.bottom-line',{ yPercent:100,ease:'power3.out',duration:1.2,
            scrollTrigger:{
            trigger:'.contact-bottom',
            start:'80% bottom',
            toggleActions:'play play play reverse',
            scroller:'#app'

            // markers:true
        }
        })

        gsap.from([".name-field div",".email-field div",'.message-field div'],{
            xPercent:-100,
            duration:2.5,
            opacity:0,
            ease:'power3.out',
            scrollTrigger:{
                trigger:".email-field",
                start:'bottom bottom',
                end:'bottom top',
                toggleActions:'play play play reverse',
                scroller:'#app'
            }

        })

        gsap.from('.message-btn-txt',{
            yPercent:150,
            duration:1,
            ease:'power3.out',
            scrollTrigger:{
                trigger:'.message-btn-txt',
                start:'bottom bottom',
                end:'bottom top',
                scroller:'#app'
            }
        })
    })
    
  return (
    <div data-scroll-section className=' bg-white-bg relative  font-days-one overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[5rem]' >
        <h1 className="opacity-10 text-center
                         text-[2.8rem] sm:text-[4rem] lg:text-[5rem]">
            LETS TALK
        </h1>
        <div className=" w-full overflow-hidden font-sansation-light rounded-t-[2.5rem] sm:rounded-t-[5rem] bg-black-bg text-white
                        pt-[6rem] sm:pt-[8rem] md:pt-[10rem] pb-[6rem] 
                        xl:pb-[10rem] px-[2rem] sm:px-[4rem] md:px-[6rem] lg:px-[10rem] xl:px-[15rem] 2xl:px-[20rem]">
            <div className=" text-start 
                             text-[2.1rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] lg:pt-[3rem] xl:pt-[8rem]">
                <h2 className=' opacity-80'>Innovations</h2>
                <h2 className=' mt-[-1rem] sm:mt-[-2rem]'>
                    <span className=' opacity-80'>
                        dont just {" "}
                    </span>
                    <span className=' text-opacity-100'>
                         <span className='font-sansation'>happen !!</span>
                    </span>
                </h2>
            </div>
            <div className="contact-form mt-[5rem] md:mt-[6rem] mb-[12rem] lg:mt-[10rem] 
                              sm:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.75rem]">
                <div className='contact-head z-10 bg-black-bg font-days-one relative gap-2 flex items-center 
                                  sm:text-[1.25rem] md:text-[1.5rem] lg:text-[2rem]'>
                    LET'S MAKE IT 
                    <span className=' text-black-bg relative z-  bg-yellow-bg px-2 rounded-sm  '>
                        HAPPEN !
                    </span>
                    <span className=" h-[2px] z-[-10] bg-white opacity-20 absolute left-[-40%] right-[-40%]"></span>
                </div>
                <form action="" method="post" className=' text-left gap-20 font-bruno-ace flex flex-col
                                                            mt-[6rem] md:mt-[8rem] lg:mt-[10rem] xl:mt-[14rem]'>
                    <div className="name-email-field flex gap-[10%]">
                        <div className="name-field flex-1 overflow-hidden ">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" id='name' className=' w-full' />
                            <div className="w-full h-[2px] bg-yellow-50"></div>
                        </div>
                        <div className="email-field flex-1 overflow-hidden">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="text" id='email' className=' w-full' />
                            <div className="w-full h-[2px] bg-yellow-50"></div>
                        </div>
                    </div>
                    <div className="message-field w-full overflow-hidden" >
                        <label htmlFor="message">
                            Message
                        </label>
                        <input type="text" id='message' className='w-full' />
                        <div className="w-full h-[2px] bg-yellow-50"></div>
                    </div>
                </form>
                <button className=' mt-[5rem] overflow-hidden lg:mt-[8rem] xl:mt-[12rem] sm:text-[6rem] text-[4rem] font-humane-black tracking-wide  cursor-pointer text-white border-b-4 leading-[100%] border-[#ffffff70]'>
                    <div className=' message-btn-txt'>
                        MESSAGE IT
                    </div>
                </button>
            </div>
            

            <div className=" contact-bottom overflow-hidden text-black bg-black-bg absolute bottom-0 left-0 right-0">
                <div className="bottom-line bg-white-bg flex justify-between items-center
                                pt-2 sm:pt-4 md:pt-6 xl:pt-10 sm:pb-2 md:pb-4 xl:pb-6 px-[2rem] md:px-[2.5rem] xl:px-[3.75rem] rounded-t-[2rem] sm:rounded-t-[3rem] xl:rounded-t-[5rem]">
                    <div className="footer-left font-sansation">
                        <span className=' opacity-40 
                                        sm:text-[1.25rem] md:text-[1.5rem] xl:text-[2rem]'>
                            Get in touch
                        </span>
                        <h3 className=' -mt-1 sm:mt-[-0.6rem] text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] xl:text-[3.8rem]'>
                            @fhdnaufal
                        </h3>
                    </div>
                    <div className=" scale-[0.4] sm:scale-50 md:scale-[70%] xl:scale-100">
                        <img src={copywrite} alt="" />
                    </div>
                </div>
            </div>

        </div>
        


        
    </div>
  )
}

export default Contact