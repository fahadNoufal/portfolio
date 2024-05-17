import React from 'react'
import copywrite from '../resources/Frame 2762.svg'

const Contact = () => {
  return (
    <div className=' bg-white-bg  font-days-one overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[5rem]' >
        <h1 className="opacity-10 text-center
                         text-[2.8rem] sm:text-[4rem] lg:text-[5rem]">
            LETS TALK
        </h1>
        <div className=" w-full font-sansation-light rounded-t-[2.5rem] sm:rounded-t-[5rem] bg-black-bg text-white
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
            <div className="contact-form mt-[5rem] md:mt-[6rem] lg:mt-[10rem] 
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
                        <div className="name-field flex-1">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" id='name' className=' w-full' />
                        </div>
                        <div className="email-field flex-1">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="text" id='email' className=' w-full' />
                        </div>
                    </div>
                    <div className="message-field w-full">
                        <label htmlFor="message">
                            Message
                        </label>
                        <input type="text" id='message' className='w-full' />
                    </div>
                </form>
                <button className=' mt-[5rem] lg:mt-[8rem] xl:mt-[12rem] sm:text-[6rem] text-[4rem] font-humane-black tracking-wide  cursor-pointer text-white border-b-4 leading-[100%] border-[#ffffff70]'>
                    MESSAGE IT
                </button>
            </div>
        </div>
        <div className=" bg-black-bg">
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
  )
}

export default Contact