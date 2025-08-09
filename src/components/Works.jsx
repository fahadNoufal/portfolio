// Updated Works.jsx with viewport-consistent layout using 100dvh and animation timing fixes
import React, { useState } from 'react'
import Project from './Project'
import p1 from '../resources/works/work-chat-circle.png'
import p2 from '../resources/works/work-cc-app.png'
import p3 from '../resources/works/work-fashion-site.png'
import p4 from '../resources/works/work-task-flow.png'
import ProjectDetails from './ProjectDetails'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Works = () => {
  const [selectedProjDetails, setSelectedProjDetails] = useState(null)

  const allProjDetails = {
    p1: {
      name: "chat circle",
      num: '01',
      type: 'landing website',
      platform: 'social media',
      platformSub: 'application',
      description: "The official landing page for the Chat Circle App, this site is a showcase of modern web design with React,featuring stunning animations and a sleek user interface that enhances visitor engagement.",
      technos: ["javascript", "python", "mui", "react", "redux", "router", "gsap", "tailwind"],
      github: 'https://github.com/fahadNoufal/chat-circle',
      visit: 'https://fahadnoufal.github.io/chat-circle/',
    },
    p2: {
      name: "Chat.C-App",
      num: '03',
      type: 'Functional Application',
      platform: 'A Social Media',
      platformSub: 'application',
      description: "This social media application offers a platform for users to create chat rooms and engage in real-time discussions. The backend is developed with Django, providing a RESTful API for efficient user interactions, while the React frontend ensures a smooth user experience, all supported by SQLPlus for data management.",
      technos: ["python", "django", "javascript", "react", "redux", "router", "gsap", "tailwind", "router"],
      github: 'https://github.com/fahadNoufal/chat-circle',
      visit: 'https://fahadnoufal.github.io/chat-circle/',
    },
    p3: {
      name: "Fashion Site",
      num: '02',
      type: 'Website for shopping',
      platform: 'Ecommerce',
      platformSub: 'website',
      description: "An e-commerce site for fashion, crafted with pure HTML, CSS, and JavaScript. It encapsulates all e-commerce essentials like a blog, cart, gallery, and trending sections, offering a complete shopping experience without external frameworks.",
      technos: ["javascript"],
      github: 'https://github.com/fahadNoufal/fashion-site',
      visit: 'https://fahadnoufal.github.io/fashion-site/',
    },
    p4: {
      name: "Task flow",
      num: '04',
      type: 'landing website',
      platform: 'social media',
      platformSub: 'application',
      description: "A to-do application that stands out with its engaging animations, making task management visually appealing and user-friendly.",
      technos: ["javascript", "mui", "react", "redux", "gsap", "tailwind"],
      github: 'https://github.com/fahadNoufal/TaskFlow',
      visit: 'https://fahadnoufal.github.io/TaskFlow/',
    },
  }

  useGSAP(() => {
    gsap.to('.work-letters', {
      y: 0,
      stagger: 0.2,
      ease: 'power4.out',
      duration: 1.5,
      opacity: 1,
      scrollTrigger: {
        trigger: '.work-txt-container',
        start: 'top 45%',
        end: '50% top',
        toggleActions: 'play play play reverse',
      }
    })
  })

  const handleBackClick = () => {
    const backTl = gsap.timeline()
    backTl.to('.project-details-container', { opacity: 0, y: -100, duration: 0.5, ease: 'power3.in' })
    backTl.to('.details-curtain', { yPercent: -100, duration: 1, stagger: { each: 0.05, from: 'center' } })
    backTl.to('.proj-details-curtain', {
      yPercent: -150,
      onComplete: () => { setSelectedProjDetails(null) }
    })
  }

  const workText = 'WORKS'.split('').map((char, index) => (
    <div className='work-letters leading-[90%] opacity-0 translate-y-[100%] bg-gradient-to-t from-[#333] to-white bg-clip-text text-transparent' key={index}>
      <div className='inline-block'>{char}</div>
    </div>
  ))

  return (
    <div data-scroll-section className='work overflow-hidden'>
      <h1 className='work-txt-container h-[100dvh] flex justify-center items-center font-humane-black text-[12.5rem] sm:text-[15rem] md:text-[20rem] lg:text-[30rem] xl:text-[40rem]'>
        <span className='flex overflow-hidden pt-8'>
          {workText}
        </span>
      </h1>

      {/* Each project will now slide in using 100dvh for consistency */}
      <div className="projs-container">
        <div className="p1-container" onClick={() => { setSelectedProjDetails(allProjDetails.p1) }}>
          <Project title="Chat circle" sub1="chat based" sub2="social media application" thumb="Find your circle" no="01" img={p1} />
        </div>
        <div className="p4-container" onClick={() => { setSelectedProjDetails(allProjDetails.p2) }}>
          <Project title="Chat.C-App" sub1="Immersive chating" sub2="with people of your interest" thumb="Strengthen your ideas!" no="02" img={p2} />
        </div>
        <div className="p2-container" onClick={() => { setSelectedProjDetails(allProjDetails.p3) }}>
          <Project title="fashion site" sub1="online" sub2="Ecommerse website" thumb="Get your best outfit" no="03" img={p3} />
        </div>
        <div className="p3-container" onClick={() => { setSelectedProjDetails(allProjDetails.p4) }}>
          <Project title="Task flow" sub1="Modern todo app" sub2="with stunning animation" thumb="Get your things done" no="04" img={p4} />
        </div>
      </div>

      <div className="h-[100dvh] flex items-center justify-center">
        <div className="flex justify-center  border-[#ffffff40] text-[#ffffff90] font-sansation-light items-center xl:text-[5rem] sm:text-[3.5rem] text-[2rem]">
          <span className='leading-[100%] border-b-[2px]'>More Works</span>
          <svg className='aspect-square sm:ml-[-1.5rem] xl:ml-0 h-[5rem] sm:h-[8rem] xl:h-[12rem] -rotate-45 text-yellow-bg' viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.1086 66.5246L37.1086 60.189H80.5533L61.0937 40.7294L65.6192 36.2039L92.7721 63.3568L65.6192 90.5097L61.0937 85.9842L80.5533 66.5246L37.1086 66.5246Z" fill='#D1FD0A' />
          </svg>
        </div>
      </div>

      <div className="proj-details-curtain fixed right-0 bottom-0 flex h-full z-[40] translate-y-[-150svh] left-0 top-0">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="details-curtain flex-1 bg-white-bg h-full translate-y-[-100%]" />
        ))}
      </div>

      {selectedProjDetails && (
        <div className="project-details-container fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll z-50 project-details-scrollbar translate-y-[120svh]">
          <ProjectDetails handleBackClick={handleBackClick} {...selectedProjDetails} />
        </div>
      )}
    </div>
  )
}

export default Works;
