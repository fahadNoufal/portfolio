import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import "./selected-works.css";

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
    title: "Snowy Peak",
    img: "https://picsum.photos/id/209/700/1400",
  }, // This will be taller (480px) via CSS
  {
    id: 3,
    number: "03",
    title: "Old Clock",
    img: "https://picsum.photos/id/175/700/1400",
  }, // This will be shorter (350px) via CSS
  {
    id: 4,
    number: "04",
    title: "Deep Forest",
    img: "https://picsum.photos/id/302/700/1400",
  },
];

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
      className="grid__item"
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
  const [activeImage, setActiveImage] = useState(null);

  // Refs for animations
  const gridItemsRef = useRef([]);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
  if (activeImage) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [activeImage]);


  // Helper to accumulate refs
  const addToRefs = (el, index) => {
    if (el && !gridItemsRef.current.includes(el)) {
      gridItemsRef.current[index] = el;
    }
  };

  // --- OPEN ANIMATION ---
  const handleItemClick = (index, imageUrl) => {
    setActiveImage(imageUrl);
    const tl = gsap.timeline();

      
    // tl

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
      .to(
        contentRef.current,
        { duration: 0.75, y: "-100%", ease: "power3.out" },
        "-=0.25"
      );

    // 4. Fly grid items away (Upwards)
    gridItemsRef.current.forEach((item) => {
      gsap.to(item, {
        duration: 0.75 + Math.random() * 0.25,
        y: -window.innerHeight,
        ease: "power3.in",
      });
    });
  };

  // --- CLOSE ANIMATION ---
  const handleBackClick = (e) => {
    e.preventDefault();

    // 1. Move Content down
    gsap.to(contentRef.current, {
      duration: 0.75,
      y: 0, // Reset to original css position (which is 100% down relative to viewport)
      ease: "power3.inOut",
    })
    
    gsap.to('.selected-works-header', {opacity:1})
    ;

    // 2. Bring Grid Items back
    gridItemsRef.current.forEach((item) => {
      gsap.to(item, {
        duration: 1 + Math.random() * 0.5,
        y: 0,
        ease: "power3.inOut",
        onComplete:()=>{setActiveImage(false)},
      });
    });
    
  };


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

  return (
    <div className="selected-works-container">
      {/* Full Screen Content */}
      <div
        className="content"
        ref={contentRef}
        style={{
          backgroundImage: activeImage ? `url(${activeImage})` : "none",
        }}
      >
        <a className="content__back" href="/" onClick={handleBackClick}>
          Back
        </a>
      </div>
      
    <div className="selected-works translate-y-[10%] pt-[40vh]  py-[20vh]">
      <div className="app-container bg-[#f4f4f4] pt-[40vh] relative overflow-hidden">
        <div className="selected-works-header absolute top-[27svh] left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center ">
          <h1 className='selected-work-txt-container relative overflow-hidden flex justify-center items-center font-humane-black text-[20svw]'>
            <span className='selected-work-txt flex overflow-hidden pt-8 leading-[70%]'>
            {/* {selectedWorkText} */}
            SELECTED WORKS
            </span>
          </h1>
        </div>

        {/* Transition Curtain */}
        <div className="background" ref={backgroundRef}></div>

        {/* Grid Layout */}
        <div className="grid">
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
    </div>
    </div>
  );
}
