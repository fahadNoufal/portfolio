import React from 'react'
import copywrite from '../resources/Frame 2762.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {

    useGSAP(()=>{
        
        gsap.from('.bottom-line',{ yPercent:100,ease:'power3.out',duration:1.2,
            scrollTrigger:{
            trigger:'.contact-bottom',
            start:'80% bottom',
            toggleActions:'play play play reverse',
            // scroller:'#app'

            // markers:true
        }
        })
        gsap.from([".name-field div",".email-field div",'.message-field div'],{
            xPercent:-100,
            duration:2.5,
            opacity:0,
            ease:'power3.out',
            scrollTrigger:{
                // markers:true,
                trigger:".email-field",
                start:'bottom bottom',
                end:'bottom top',
                toggleActions:'play play play reverse',
                // scroller:'#app'
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
                // scroller:'#app'
            }
        })

        // const contactTl=gsap.timeline()

        gsap.to('.connect-screen',{
            y:'-70svh',
            borderRadius:0,
            duration:2,
            marginBottom:'-80svh',
            scrollTrigger:{
                // animation:contactTl,
                trigger:'.contact-section',
                start:'top 105%',
                // markers:true,
                end:'top 20%',
                scrub:2,
                // end:' '
                toggleActions:'play play play reverse'
    
            }
        })

        gsap.to('.contact-container',{
            y:'0',
            duration:1.5,
            scrollTrigger:{
                trigger:'.contact-section',
                start:'top 90%',
                end:'top top',
                scrub:2,
                toggleActions:'play play play reverse'
    
            }
        },'-0.1')

        // ScrollTrigger.create({
        //     animation:contactTl,
        //     trigger:'.contact-section',
        //     start:'top 80%',
        //     end:'top 50%',
        //     scrub:2,
        //     // end:' '
        //     toggleActions:'play play play reverse'

        // })

    })
    
  return (
    <div className=' contact-section relative font-days-one overflow-xhidden rounded-t-[2.5rem] sm:rounded-t-[5rem]' >
        
        <div className=" translate-y-[-20svh] connect-screen bg-white-bg h-[120svh] absolute w-full top-0">
            <div className="contact-banner text-[2rem] mt-4 flex justify-around opacity-20">
                <span className=' hidden md:inline-block'>LETS CONNECT</span>
                {/* <span className=' hidden xl:inline-block'>LETS CONNECT</span> */}
                <span className=' hidden 2xl:inline-block'>LETS CONNECT</span>
                <span className=' hidden md:inline-block'>LETS CONNECT</span>
                <span className=' hidden md:inline-block'>LETS CONNECT</span>


            </div>
            <div className=" font-humane-black opacity-[0.8] text-center text-[40svw]">
                CONNECT
            </div>
        </div>
        <div className=" contact-container mt-[20svh] w-full overflow-hidden font-sansation-light rounded-t-[2.5rem] sm:rounded-t-[5rem] bg-black-bg text-white 
                        pt-[6rem] sm:pt-[8rem] pb-[6rem] 
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
                    {/* <span className=" h-[2px] z-[-10] bg-white opacity-20 absolute left-[-40%] right-[-40%]"></span> */}
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