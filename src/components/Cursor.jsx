import React, { useEffect, useState } from 'react'
import animationVd from '../resources/cursor/animation.webm'
import hook from '../resources/cursor/hook.webm'
import unique from '../resources/cursor/unique.jpg'
import seo from '../resources/cursor/seo.webm'

const Cursor = () => {

    const [cursorIcon,setCursorIcon] =useState('')

    useEffect(()=>{
        const cursor= document.getElementById("custom-cursor");
        window.onmousemove=(e)=>{

          const interactable=e.target.closest(".interactable"),
                interacting=interactable!==null

          if (interacting){
            setCursorIcon(()=>(interactable.dataset.type))
          }else{
            setCursorIcon(()=>(''))
          }


          const scaleCursor=e.target.closest(".scale-cursor")
          const imgCursor=e.target.closest(".img-cursor")
          const btnCursor=e.target.closest(".cursor-button")


          const x=e.clientX - cursor.offsetWidth/2, 
                y=e.clientY - cursor.offsetHeight/2;
    
            let scaleValue;
            if (btnCursor !== null) {
                scaleValue = 8;
            }
            else if (scaleCursor !== null) {
                scaleValue = 20;
            } else {
                scaleValue = 1;
            }
          const keyframe={
            transform: `translate(${x}px,${y}px) 
                        scale(${scaleValue})
                        `,
            backgroundColor:`${imgCursor===null?'white':'transparent'}`,
          }
          cursor.animate(keyframe,{
            duration: 500,
            fill:'forwards'
          })
          

        }
      })

      const ArrowMark=()=>{
            return(
                <svg className='aspect-square rotate-90' viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.1086 66.5246L37.1086 60.189H80.5533L61.0937 40.7294L65.6192 36.2039L92.7721 63.3568L65.6192 90.5097L61.0937 85.9842L80.5533 66.5246L37.1086 66.5246Z" fill="#000"/>
                </svg>
            )
        }


        const SendSvg=()=>{
            return(
                <svg   className='absolute top-0 left-0 w-full h-full' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g mask="url(#mask0_365_7)">
                        <path d="M14.7148 96.8303V20.0303L105.915 58.4303L14.7148 96.8303ZM24.3148 82.4303L81.1948 58.4303L24.3148 34.4303V51.2303L53.1148 58.4303L24.3148 65.6303V82.4303Z" fill="#070707"/>
                    </g>
                </svg>
            )
        }





        let displayingComponent=''

         
        switch (cursorIcon){
            case 'story':
                displayingComponent= <ArrowMark/>;
                break
            case 'hook':
                displayingComponent= <video loop autoPlay src={hook} className=' max-w-[200px] sm:max-w-[500px] bg-black' alt="animation..." />
                break
            case 'stands-out':
                displayingComponent=<img src={unique} className=' max-w-[200px] sm:max-w-[500px]' alt="animation..." />
                break
            case 'seo':
                displayingComponent= <video loop autoPlay src={seo} className=' max-w-[200px]  sm:max-w-[450px] bg-black' alt="animation..." />
                break
            case 'animation':
                displayingComponent= <video loop autoPlay src={animationVd} className=' max-w-[200px] sm:max-w-[500px] bg-black' alt="animation..." />
                break

            case 'certificates':
                displayingComponent=<h1 className=' font-allison text-[4rem] scale-[0.08]  text-white rounded-full aspect-square flex justify-center items-center p-8'>Woahh!</h1>
                break
            case 'view-project-details':
                displayingComponent= <div className=' bg-yellow-bg rounded-full'>
                                        <svg className='aspect-square  -rotate-45' viewBox="0 0 127 127" >
                                            <path d="M37.1086 66.5246L37.1086 60.189H80.5533L61.0937 40.7294L65.6192 36.2039L92.7721 63.3568L65.6192 90.5097L61.0937 85.9842L80.5533 66.5246L37.1086 66.5246Z" fill="#000"/>
                                        </svg>
                                    </div>
                break
            case 'view-project-direction':
                displayingComponent= <div className='bg-white rounded-full flex scale-[2]'>
                                        <svg className='' viewBox="0 0 127 127" >
                                            <path d="M37.1086 66.5246L37.1086 60.189H80.5533L61.0937 40.7294L65.6192 36.2039L92.7721 63.3568L65.6192 90.5097L61.0937 85.9842L80.5533 66.5246L37.1086 66.5246Z" fill="#000"/>
                                        </svg>
                                    </div>
                break
            case 'details-back':
                displayingComponent= <div className=' rotate-[-135deg] rounded-full'>
                                        <svg className='aspect-square  -rotate-45' viewBox="0 0 127 127" >
                                            <path d="M37.1086 66.5246L37.1086 60.189H80.5533L61.0937 40.7294L65.6192 36.2039L92.7721 63.3568L65.6192 90.5097L61.0937 85.9842L80.5533 66.5246L37.1086 66.5246Z" fill="#000"/>
                                        </svg>
                                    </div>
                break
            case 'landing':
                displayingComponent= <ArrowMark/>;
                break
            case 'send':
                displayingComponent= <div className='-rotate-[135deg]'><ArrowMark/></div>;
                break
            case 'input':
                displayingComponent= <div className=' aspect-square w-2 h-2 flex translate-x-[1.5px] translate-y-[0.5px] scale-[0.4]'>✒</div>   
                break
            default:
                displayingComponent= ""   
                break
        }


  return (
    <div id="custom-cursor" className=' min-w-4 min-h-4'>
        <div className="cursor-icon">
            {displayingComponent}
        </div>
    </div>
  )
}

export default Cursor