import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import "./selected-works.css";
import ai_librarian from '../../resources/selected-works/ai-librarian.jpg'
import llm from '../../resources/selected-works/llm.png'
import quickscope from '../../resources/selected-works/quick-scope.jpg'
import ProjectDetails from "../ProjectDetails";

// Sample data for the grid
const itemsData = [
  {
    id: 1,
    number: "01",
    title: "Highlands",
    img: "https://picsum.photos/id/192/700/1400",
  },
  {
    id: 2,
    number: "02",
    title: "AI LIBRARIAN",
    // img: "https://picsum.photos/id/209/700/1400",
    img: ai_librarian,
  }, // This will be taller (480px) via CSS
  {
    id: 3,
    number: "03",
    title: "QUICK SCOPE",
    // img: "https://picsum.photos/id/175/700/1400",
    img: quickscope
  }, // This will be shorter (350px) via CSS
  {
    id: 4,
    number: "04",
    title: "CUSTOM LLM",
    // img: "https://picsum.photos/id/302/700/1400",
    img: llm

  },
];

const allProjDetails = {
    0: {
      name: "Chat Circle",
      num: '01',
      type: 'Functional Application',
      platform: 'Social Media',
      platformSub: 'application',
      description: "This social media application offers a platform for users to create chat rooms and engage in real-time discussions. The backend is developed with Django, providing a RESTful API for efficient user interactions, while the React frontend ensures a smooth user experience, all supported by SQLPlus for data management.",
      technos: ["python", "django", "javascript", "react", "redux", "router", "tailwind"],
      referenceImg:quickscope,
      github: 'https://github.com/fahadNoufal/chat-circle',
      visit: 'https://fahadnoufal.github.io/chat-circle/',
    },
    1: {
      name: "Chat Website",
      num: '02',
      type: 'Landing Website',
      platform: 'Social Media',
      platformSub: 'application',
      description: "The official landing page for the Chat Circle App, this site is a showcase of modern web design with React, featuring a fun and modern vibe, smooth navigation, and a Join button that takes users directly into the Chat Circle application.",
      technos: ["javascript", "react", "router", "tailwind"],
      referenceImg:ai_librarian,
      github: 'https://github.com/fahadNoufal/chatcircle-website',
      visit: 'https://fahadnoufal.github.io/chatcircle-website/',
    },
    2: {
      name: "Xactitude",
      num: '03',
      type: 'Event UI/UX',
      platform: 'Stunning UI',
      platformSub: 'Figma',
      description: "A modern and engaging website UI/UX designed in Figma for the intra-college IT fest, featuring stunning visual elements and intuitive layouts that highlight event details and enhance student participation.",
      // technos: ['react'],
      referenceImg:quickscope,
      github: 'https://github.com/fahadNoufal/TaskFlow',
      visit: 'https://www.figma.com/design/ElNh1HHlnTHvxUYeI916lh/rough-01?m=auto&t=gkQSwm7GjqEaBVdS-6',
    },
    3: {
      name: "Fashion Site",
      num: '03',
      type: 'E-commerce Website',
      platform: 'Ecommerce',
      platformSub: 'website',
      description: "A fully responsive fashion shopping platform featuring an About Us page, blog section, product cart, and image gallery, delivering a complete and seamless online shopping experience.",
      technos: ["javascript"],
      referenceImg:llm,
      github: 'https://github.com/fahadNoufal/fashion-site',
      visit: 'https://fahadnoufal.github.io/fashion-site/',
    }
}

const GridItem = ({ item, index, onItemClick, itemRef }) => {
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const imageRef = useRef(null);

  // Parallax Mouse Hover Effect
  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left - bounds.width / 2;
    const mouseY = e.clientY - bounds.top - bounds.height / 2;

    gsap.to(titleRef.current, {
      duration: 1,
      x: mouseX * 0.05,
      y: mouseY * 0.05,
    });
    gsap.to(numberRef.current, {
      duration: 1.25,
      x: mouseX * 0.05,
      y: mouseY * -0.03,
    });
    gsap.to(imageRef.current, {
      duration: 1,
      x: mouseX * 0.03,
      y: mouseY * 0.03,
    });
    gsap.to(imageRef.current, {
      duration: 1,
      scale: 1.1,
    });
  };

  // Reset positions on leave
  const handleMouseLeave = () => {
    gsap.to([titleRef.current, numberRef.current, imageRef.current], {
      duration: 1,
      x: 0,
      y: 0,
    });
    gsap.to(imageRef.current, {
      duration: 1,
      scale: 1,
    });
  };

  return (
    <div
      className="grid__item cursor-pointer interactable "
      data-type='visit'
      ref={(el) => itemRef(el, index)}
      onClick={() => onItemClick(index, item.img)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid__imagewrap">
        <figure
          ref={imageRef}
          className="grid__image"
          style={{ backgroundImage: `url(${item.img})` }}
        />
      </div>
      <span ref={numberRef} className="grid__number">
        {item.number}
      </span>
      <span ref={titleRef} className="grid__title">
        {item.title}
      </span>
    </div>
  );
};

export default function App() {
  // const [activeImage, setActiveImage] = useState(null);

  const [selectedProjDetails, setSelectedProjDetails] = useState(null)

  // Refs for animations
  const gridItemsRef = useRef([]);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Only run this logic if the modal is OPEN
    if (selectedProjDetails) {
      // 1. Push a temporary state to history to 'trap' the back button
      window.history.pushState(null, "", window.location.href);

      // 2. Define what happens when the back button is pressed
      const handlePopState = () => {
        // Close the modal
        setSelectedProjDetails(null);
        handleBackClick()
      };

      // 3. Listen for the back event
      window.addEventListener("popstate", handlePopState);

      // 4. Cleanup: Remove the listener when the component unmounts or modal closes
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [selectedProjDetails]);

  // Helper to accumulate refs
  const addToRefs = (el, index) => {
    if (el && !gridItemsRef.current.includes(el)) {
      gridItemsRef.current[index] = el;
    }
  };

  // --- OPEN ANIMATION ---
  const handleItemClick = (index, imageUrl) => {
    setSelectedProjDetails(allProjDetails[index]);
    console.log(selectedProjDetails)
    const tl = gsap.timeline();

      
    // 1. Wipe animation (Background curtain moves up)
    tl.fromTo(
      backgroundRef.current,
      { y: "100%" },
      { duration: 0.75, y: "0%", ease: "power3.inOut" }
    )
      .set('.selected-works-header', {opacity:0})
      // 2. Hide curtain (move up out of view)
      .to(backgroundRef.current, {
        duration: 0.5,
        y: "-100%",
        ease: "power3.inOut",
      })
      // 3. Bring content into view (simultaneously)
      // .to(
      //   contentRef.current,
      //   { duration: 0.75, y: "-100%", ease: "power3.out" },
      //   "-=0.25"
      // );

    // 4. Fly grid items away (Upwards)
    gridItemsRef.current.forEach((item) => {
      gsap.to(item, {
        duration: 0.75 + Math.random() * 0.25,
        y: -window.innerHeight,
        ease: "power3.in",
      });
    });

    const tl2 = gsap.timeline();

    tl2.set('.proj-details-curtain',{y:0})

    tl2.set('.project-details-container',{
        y:0,opacity:1,
    })
  };

  // --- CLOSE ANIMATION ---
  const handleBackClick = (e='') => {
    if(e !==''){
      e.preventDefault();
    }
    const backTl = gsap.timeline()
    backTl.to('.project-details-container', { opacity: 0, y: -100, duration: 0.5, ease: 'power3.in' })
    backTl.to('.details-curtain', { yPercent: -100, duration: 1, stagger: { each: 0.05, from: 'center' } })
    backTl.to('.proj-details-curtain', {
      yPercent: -150,
    })

    gsap.to('.selected-works-header', {opacity:1})
    ;

    // 2. Bring Grid Items back
    gridItemsRef.current.forEach((item) => {
      gsap.to(item, {
        duration: 1 + Math.random() * 0.5,
        y: 0,
        ease: "power3.inOut",
        onComplete:()=>{setSelectedProjDetails(null)},
      });
    });
    
  };

  useGSAP(() => {
    // 1. Guard clause: If there is no project selected, don't run animation
    if (!selectedProjDetails) return; 

    const tl = gsap.timeline();
    

    // 2. IMPORTANT: Bring the main container into view first!
    // Since you have 'translate-y-[120svh]' in Tailwind, we need to override it.
    tl.to('.project-details-container', {
        y: 0, 
        duration: 0.5, // Make this fast or instant depending on preference
        ease: 'power2.out',
        delay:0.6
    });

    // 3. Now run your existing sequence
    tl.from(".proj-detail-img", {
        width: "100%",
        yPercent: 100,
        duration: 2,
        ease: 'power3.out'
    });
    
    tl.from([".proj-subheads", ".proj-num"], {
        yPercent: -200,
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
    }, "<");

    tl.from('.tech-stack-item', {
        yPercent: 200,
        opacity: 0,
        duration: 1.5,
        delay: 0.6,
        ease: 'back.out'
    }, "<");

    tl.to('.projd-name-cover', {
        yPercent: 100,
        duration: 2.5,
        ease: 'power3.out'
    }, "-=1");

    tl.from('.proj-details-line', {
        xPercent: 100,
        duration: 2,
        delay: 0.3,
        ease: 'power3.out'
    }, "<");

  }, { dependencies: [selectedProjDetails] }); // <--- Triggers the hook when this changes

  useGSAP(() => {
    gsap.from('.selected-work-txt', {
      yPercent: 100,
      ease: 'inOutCubic',
      duration: 1.3,
      opacity: 1,
      scrollTrigger: {
        trigger: '.selected-works',
        start: 'top 10%',
        end: '50% top',
        toggleActions: 'play play play reverse',
      }
    })
    gsap.from('.grid__item', {
      yPercent: 100,
      ease: 'inOutCubic',
      duration: 1.3,
      opacity: 1,
      scrollTrigger: {
        trigger: '.selected-works-header',
        start: 'top 40%',
        end: 'bottom top',
        toggleActions: 'play play play reverse',
      }
    })
    gsap.to('.selected-works', {
      y: 0,
      ease: 'power3.out',
      duration: 1.3,
      scrollTrigger: {
        trigger: '.selected-works',
        start: 'top bottom',
        end: '50% top',
        toggleActions: 'play play play reverse',
      }
    })
  })

  // const handleBackClick = () => {
    
  // }

  return (
    <div className="selected-works-container">
      {/* Full Screen Content */}
      {/* <div
        className="content"
        ref={contentRef}
        // style={{
        //   backgroundImage: selectedProjDetails ? `url(${selectedProjDetails})` : "none",
        // }}
      >
        <a className="content__back" href="/" onClick={handleBackClick}>
          Back
        </a>
      </div> */}
      
    <div className="selected-works md:translate-y-[10%] pb-0 pt-[40vh]  py-[20vh]">
      <div className="app-container bg-[#f4f4f4] pt-[40vh] relative overflow-hidden">
        <div className="selected-works-header absolute top-[27svh] left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center ">
          <h1 className='selected-work-txt-container relative overflow-hidden flex justify-center items-center font-humane-black text-[24svw] md:text-[20svw]'>
            <span className='selected-work-txt flex overflow-hidden pt-8 leading-[70%]'>
            {/* {selectedWorkText} */}
            SELECTED WORKS
            </span>
          </h1>
        </div>

        {/* Transition Curtain */}
        {/* <div className="background" ref={backgroundRef}></div> */}

        {/* Grid Layout */}
        <div className="grid -rotate-90 md:rotate-0">
          {itemsData.map((item, index) => (
            <GridItem
              key={item.id}
              index={index}
              item={item}
              itemRef={addToRefs}
              onItemClick={handleItemClick}
            />
          ))}
        </div>

        
      </div>
    <div className="proj-details-curtain fixed right-0 bottom-0 flex h-full z-[40] translate-y-[-150svh] left-0 top-0">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="details-curtain flex-1 bg-white-bg h-full translate-y-[-100%]" />
      ))}
    </div>
    </div>
        {selectedProjDetails && (
          <div className="project-details-container fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll z-50 project-details-scrollbar translate-y-[120svh]">
            <ProjectDetails handleBackClick={handleBackClick} {...selectedProjDetails} />
          </div>
        )}
    </div>
  );
}
