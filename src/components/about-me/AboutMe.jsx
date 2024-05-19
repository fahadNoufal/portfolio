import React from 'react'
import fahad from '../../resources/fahad-img.png'

const AboutMe = () => {
  return (
    <div className=' about-me relative z-10 w-full py-[3rem] sm:h-[100svh] bg-[#fffaef] rounded-[3rem] flex flex-col
                     px-4 sm:px-[1.8rem] md:px-[3rem] lg:px-[5rem]'>
        <h1 className="who-am-i text-center border-y border-opacity-20 border-black font-bruno-ace text-[#585858]
                         text-[2.75rem] sm:text-[5rem] xl:text-[6rem] 2xl:text-[7.5rem] px-4 sm:px-0">
            Who am i ?
        </h1>
        <div className="sub-me font-days-one flex justify-center sm:justify-between text-[#858585] 
                         text-[0.75rem] sm:text-[1rem] lg:text-[1.25rem]">
            <div className="subme-txt mr-1">A creator at heart</div>
            <div className="subme-txt hidden sm:flex">weaving a tale of</div>
            <div className="subme-txt">innovation and adventure</div>
        </div>
        <div className="about-content sm:flex flex-1 items-center 
                        sm:gap-[3.5rem] ">
            <div className="name-img flex-[2] relative z-[1] my-[3.125rem] ">
                <img src={fahad} alt="" className='mx-auto  h-[250px] sm:h-auto  lg:h-[90%]' />
                <h2 className=' text-center text-nowrap w-full relative -mt-[1.2rem] sm:-mt-0 lg:-bottom-16 xl:-bottom-20 2xl:-bottom-24 text-[#585858] z-[-1] lg:absolute font-sansation-light tracking-tighter
                                2xl:text-[5.4rem] xl:text-[4.5rem] lg:text-[3.5rem] text-[2.6rem] '>
                    Fahad Noufal
                </h2>
            </div>

            <div className="about-me-txt font-sansation tracking-wide lg:tracking-widest  flex items-center  flex-[3]  text-[#585858]
                            mt-[-1.5rem] sm:mt-0 2xl:text-[1.5rem] xl:text-[1.38rem] md:text-[1.25rem] text-[1.1rem] ">
                <div className='flex flex-col justify-center h-[80%] border-y py-8 border-black border-opacity-20
                                text-center sm:text-start px-8 sm:px-0 xl:px-[3rem] 2xl:px-[4rem] gap-4 2xl:gap-8'>
                    <p>
                        Am a creative forntend developer based on Kerala, persuing 
                            {/* <span className=' bg-black text-white opacity-40 px-2 mx-2'>
                                Barchelor in Data Science
                            </span> */}
                            <span className=' border-b-2 border-black-bg border-opacity-50 bg-yellow-bg bg-opacity-60  px-2 mx-2'>
                                Barchelor in Data Science
                            </span>
                         and which opens whole new opertunities for me! I
                    </p>
                    <p>
                        I have been developing 
                        <span className=' border-b-2 border-black-bg border-opacity-50 bg-yellow-bg bg-opacity-60  px-2 mx-2'>
                            {/* Barchelor in Data Science */}
                            clean and modern websites with stunning animations 
                        </span>
                        for the past 3 years!.
                    </p>
                    <p>
                        As Creative frontend Developer / Designer, i have 
                        <span className=' border-b-2 border-black-bg border-opacity-50 bg-yellow-bg bg-opacity-60  px-2 mx-2'>
                            {/* Barchelor in Data Science */}
                            knowledge and experience in both Development and designing .
                        </span>
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AboutMe