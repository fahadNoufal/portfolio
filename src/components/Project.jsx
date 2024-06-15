import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const Project = ({title,sub1,sub2,thumb,no,img}) => {

    const container=useRef()

    useGSAP(()=>{
        const tl=gsap.timeline()
        tl.from(`.p${projNo}-h1`,{yPercent:150,opacity:0,duration:2,ease:'elastic.out(1,1)',stagger:0.05})
        tl.from(`.p${projNo} .proj-no`,{yPercent:100,duration:3, ease:'power4.out'},"<")
        tl.from(`.p${projNo} .proj-img`,{xPercent:200,yPercent:100,duration:3,ease:'elastic.out(1,1)'},"<")
        tl.to(`.p${projNo} .thumb-cover`,{xPercent:100,duration:2,ease:'power4.out'},"1.6")
        ScrollTrigger.create({
            animation:tl,
            trigger:`.p${projNo}`,
            start:'-30% bottom',
            toggleActions:'restart play play reverse',
        })

        gsap.to(`.p${projNo}`,{
            y:0,
            duration:1,
            scrollTrigger:{
                trigger:`.p${projNo}`,
                start:'-30% bottom',
                end:'bottom top',
                toggleActions:'restart play play reverse',
            }
        })

        let sections=gsap.utils.toArray(".proj-item")
        ScrollTrigger.create({
            trigger: '.projs-container',
            scrub: 1,
            snap: 1/(sections.length+1) ,
            ease: "power1.inOut"
        },
            
        )

    })

    let projNo=1
    if (no==="01"){
        projNo=1
    }
    else if (no==="02"){
        projNo=2

    }
    else if (no==="03"){
        projNo=3

    }
    else if (no==="04"){
        projNo=4

    }

    let titleTxt =title.split('').map((char, index) => (
        <div className={`p${projNo}-h1 bg-clip-text text-transparent`} key={index} >
            <div className='inline-block  '>{char}</div>
        </div>
    ))

  return (
    <div className={`overflow-hidden proj-item p${projNo} bg-black-bg translate-y-[100svh] h-[100svh] sm:py-8  pt-[4rem] relative`}
        ref={container}>
        <h1 className={` overflow-hidden  uppercase tracking-widest border-y-2 border-yellow-bg border-opacity-20 font-days-one leading-[100%] md:leading-normal md:py-0
                           text-center sm:text-left px-2 sm:pl-[4rem] lg:pl-[6rem] xl:pl-[10rem] 2xl:pl-[14rem] sm:pr-[10rem] text-[10svw] sm:text-[4.5rem]  md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem]
                            py-2 sm:py-5`}>
            <div className="flex pl-4">
                {titleTxt}
            </div>
        </h1>
        <div className=" uppercase border-b-2 border-opacity-20  border-yellow-bg font-sansation-light 
                          py-[0.5rem] sm:py-[0.75rem]
                          pl-[1.25rem] sm:pl-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[15rem] xl:text-[1.25rem] sm:text-[1.1rem] text-[.8rem]">
            <p>
                {sub1}
            </p>
            
            <p>
                {sub2}
            </p>
        </div>
        <div className="proj-intro flex  ">
            <div className="flex  flex-col relative
                            items-center sm:items-start ml-[1.5rem] sm:ml-0 sm:text-left px-[1.25rem] sm:pl-[4rem] lg:pl-[6rem] xl:pl-[10rem]  2xl:pl-[15rem] xl:pr-[10rem] 2xl:pr-[15rem] 
                            interactable
            " data-type='view-project-direction'>
                <h2 className="proj-thumbnail relative text-nowrap opacity-50 mt-8 capitalize font-allison 
                                  text-[3.5rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.7rem] xl:text-[4.5rem] 2xl:text-[5.5rem]
                                  w-full sm:w-auto">
                    <div className="thumb-cover"></div>
                    {thumb}
                </h2>
                <div className="proj-no opacity-10 top-[8rem] sm:top-[10rem] absolute  tracking-wider mt-[-12rem] font-humane-black
                                text-[38rem] sm:text-[35rem] lg:text-[42rem] xl:text-[45rem]
                                ml-[3.5rem] xl:ml-0">
                    {no}
                </div>
            </div>
            <div className=" proj-img-container mx-[4.2rem] mt-[15rem]  sm:mr-12 md:mr-[6rem] lg:mr-[10rem] 2xl:mr-[15rem] lg:mb-[4rem] sm:ml-[4rem] lg:ml-[8rem] xl:ml-0 sm:mt-[8rem] lg:mt-0 scale-125  2xl:mt-[-4rem] 2xl:items-start flex items-center
                            absolute z-[20] sm:relative
                            interactable scale-cursor
                            " data-type='view-project-details'>

                <div id="proj-imageContainer ">
                    <img src={img} id='proj-img-id' alt="" className=' proj-img object-cover xl:w-full 2xl:h-full ' />
                </div>
            </div>

        </div>

        <div className="proj-details-container absolute bg-white-bg w-full h-full z-[10] left-0 top-[100%]">
        </div>
        
        
        
    </div>
  )
}

export default Project