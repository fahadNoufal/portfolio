import React from 'react'
import certificates from '../resources/certificats.png'

const Certificates = () => {
  return (
    <div className='xl:h-[130svh] h-[100svh] flex relative justify-center items-center overflow-hidden '>
        <div className="certif-heading font-humane-black leading-[80%] tracking-wide text-yellow-bg text-center
                         text-[6rem] sm:text-[10rem] md:text-[8rem] xl:text-[12rem] 2xl:text-[16rem]">
            ENOUGH OF DIALOGUES
        </div>
        {/* <img src={certificates} className='z-[-10]' alt="" /> */}
        <img src={certificates} className='absolute scale-[3] sm:scale-125 right-[-100%] sm:right-[-40%] bottom-[10%] sm:bottom-[-25%]' alt="" />



    </div>
  )
}

export default Certificates