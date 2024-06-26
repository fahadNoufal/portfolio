import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import c1 from '../resources/certificates/hackerrank-5-star.png'
import c2 from '../resources/certificates/22CDSA1.jpg'
import c3 from '../resources/certificates/BentlyInstitute(3D).jpg'
import c4 from '../resources/certificates/MachineLearningOnramp.jpg'
import c5 from '../resources/certificates/Process_Automation_Bootcamp.jpg'
import c6 from '../resources/certificates/QlikSenseDataArchitectQualification.jpg'
import c7 from '../resources/certificates/fahad noufal.jpg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Certificates = () => {

  useGSAP(()=>{

    let mobile=true

    if (window.matchMedia("(min-width: 650px)").matches) {
      mobile=false
    }

    gsap.set('.certificate-container', {
      xPercent: `${mobile?90:90}`,
      yPercent: `${mobile?-200:100}`
    });
    
    const tl=gsap.timeline();
    
    tl.to('.certificate-container',{
      xPercent:`${mobile?-200:-120}`,
      yPercent:`${mobile?-280:-100}`,
      scrollTrigger:{
        trigger:'.enough-of-dialogues',
        start:'65% bottom',
        end:'bottom 0%',
        // markers:true,
        scrub:3,
      }
    })
    
    
    const tl2=gsap.timeline();
    tl2.fromTo('.certificate-set-1 img',{
      x:500,},
      {
      x:-500
    },{
      stagger:0.2,

    })

    tl2.to('.certificate-set-2 img',{
      x:-100,
      rotate:'+=4',
      stagger:0.1,
    },"<")


    ScrollTrigger.create({
      trigger:'.enough-of-dialogues',
      start:'65% bottom',
      end:'bottom 0%',
      scrub:3,
      animation:tl2,
    })
    
  })

  let enoughOfDialogs ='ENOUGH OF DIALOGUES'.split('').map((char, index) => (
    <span className='dialog-char ' key={index}>{char}</span>
  ))


  return (
    <div data-scroll-section className= ' enough-of-dialogues overflow-x-clip h-[100svh] flex relative justify-center overflow-x-hidde items-center  '>
        <div className=" enough-text certif-heading font-humane-black leading-[80%] tracking-wide text-yellow-bg text-center
                         text-[6rem] sm:text-[10rem] md:text-[8rem] xl:text-[12rem] 2xl:text-[16rem]">
            <div className='  pt-8'>
              {enoughOfDialogs}
            </div>
        </div>

        {/* certificate-container absolute left-0 flex-col flex gap-10 md:rotate-[25deg] translate-x-[100%] 
                        top-[230%] scale-[0.6] translate-y-[-100%] rotate-[35deg] md:top-0 md:scale-[0.78] lg:scale-90 xl:scale-100 md:translate-y-[100%]  */}

        <div className="
                        certificate-container absolute left-0 flex-col flex gap-10 md:rotate-[25deg]
                        top-[230%] scale-[0.6] rotate-[35deg] md:top-0 md:scale-[0.78] lg:scale-90 xl:scale-100">
          <div className="flex gap-10 w-full certificate-set-1">
            <img src={c1} alt=""/>
            <img src={c2} alt="" />
            <img src={c3} alt="" />
            <img src={c4} alt="" />
          </div>
          <div className="flex gap-10 ml-[250px] w-full certificate-set-2">
            <img src={c5} alt="" />
            <img src={c6} alt="" />
            <img src={c7} alt="" />
          </div>
        </div>

          


    </div>
  )
}

export default Certificates