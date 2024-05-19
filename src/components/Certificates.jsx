import React from 'react'
import certificates from '../resources/certificats.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
// import { SplitText } from 'gsap/dist/SplitText'

const Certificates = () => {

  useGSAP(()=>{
    gsap.to('.certificates-img',{
      xPercent:-210,
      yPercent:-100,
      // ease:'power3.out',
      scrollTrigger:{
        trigger:'.enough-of-dialogues',
        start:'80% bottom',
        end:'bottom 50%',
        scrub:2,
        
      }
    })
    gsap.to('.enought-of-dialogues',{
      scrollTrigger:{
        trigger:'.enough-of-dialogues',
        start:'top top',
        end:'bottom 60%',
        pin:true,
        // markers:true,
      }
    })
  })

  let enoughOfDialogs ='ENOUGH OF DIALOGUES'.split('').map((char, index) => (
    <span className='dialog-char ' key={index}>{char}</span>
  ))


  return (
    <div className= ' enough-of-dialogues overflow-x-clip h-[100svh] flex relative justify-center overflow-x-hidde items-center  '>
        <div className=" enough-text certif-heading font-humane-black leading-[80%] tracking-wide text-yellow-bg text-center
                         text-[6rem] sm:text-[10rem] md:text-[8rem] xl:text-[12rem] 2xl:text-[16rem]">
            <div className='  pt-8'>
              {enoughOfDialogs}
            </div>
        </div>
        {/* <img src={certificates} className='z-[-10]' alt="" /> */}
        <img src={certificates} className=' certificates-img absolute scale-[3] sm:scale-125 right-[-100%] sm:right-[-100%] xl:bottom-[-100%] bottom-[10%] sm:bottom-[-25%]' alt="" />



    </div>
  )
}

export default Certificates