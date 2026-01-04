import "./web-projs.css";
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'

import taskflow from '../../resources/web-projs/taskflow.png'
import fashion from '../../resources/web-projs/fashion-site.png'
import mess from '../../resources/web-projs/mess-app.png'
import ccApp from '../../resources/web-projs/work-cc-app.png'
import xactitude from '../../resources/web-projs/x-actitude.png'
import ccWebsite from '../../resources/web-projs/work-chat-circle.png'








const CONFIG = {
  timeZone: "Europe/Zagreb",
  timeUpdateInterval: 1000,
};
export default function WebProjs() {
  useEffect(() => {
    
    const backgroundImage = document.getElementById("backgroundImage");
    const projectItems = document.querySelectorAll(".project-item");
    const portfolioContainer = document.querySelector(".portfolio-container");

    let currentActiveIndex = -1;
    let originalTexts = new Map();
    let debounceTimeout = null;
    let idleAnimation = null;
    let idleTimer = null;

    // Store original text per row
    projectItems.forEach((item) => {
      const textElements = item.querySelectorAll(".hover-text");
      const texts = Array.from(textElements).map((el) => el.textContent);
      originalTexts.set(item, texts);
    });

    preloadImages();
    projectItems.forEach((item, index) => {
      addEventListeners(item, index);
    });

    portfolioContainer.addEventListener("mouseleave", () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      clearActiveStates();
      hideBackgroundImage();
      startIdleTimer();
    });

    startIdleTimer();
    startTimeDisplay();

    // ------------------------------------------------------------------
    // Functions
    // ------------------------------------------------------------------

    function preloadImages() {
      projectItems.forEach((item) => {
        const imageUrl = item.dataset.image;
        if (imageUrl) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = imageUrl;
        }
      });
    }

    function addEventListeners(item, index) {
      const textElements = item.querySelectorAll(".hover-text");
      const imageUrl = item.dataset.image;
      const original = originalTexts.get(item);

      const handleMouseEnter = () => {
        stopIdleAnimation();
        stopIdleTimer();

        if (debounceTimeout) clearTimeout(debounceTimeout);
        if (currentActiveIndex === index) return;

        updateActiveStates(index);

        textElements.forEach((el, i) => {
          gsap.killTweensOf(el);
          gsap.to(el, {
            duration: 0.8,
            scrambleText: {
              text: original[i],
              chars: "qwerty1337h@ck3r",
              revealDelay: 0.3,
              speed: 0.4,
            },
          });
        });

        if (imageUrl) showBackgroundImage(imageUrl);
      };

      const handleMouseLeave = () => {
        debounceTimeout = setTimeout(() => {
          textElements.forEach((el, i) => {
            gsap.killTweensOf(el);
            el.textContent = original[i];
          });
        }, 50);
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    }

    function updateActiveStates(activeIndex) {
      currentActiveIndex = activeIndex;
      portfolioContainer.classList.add("has-active");

      projectItems.forEach((item, idx) => {
        item.classList.toggle("active", idx === activeIndex);
      });
    }

    function clearActiveStates() {
      currentActiveIndex = -1;
      portfolioContainer.classList.remove("has-active");

      projectItems.forEach((item) => {
        item.classList.remove("active");
        const textElements = item.querySelectorAll(".hover-text");
        const original = originalTexts.get(item);

        textElements.forEach((el, i) => {
          gsap.killTweensOf(el);
          el.textContent = original[i];
        });
      });

      startIdleTimer();
    }

    function showBackgroundImage(url) {
      backgroundImage.style.transition = "none";
      backgroundImage.style.transform = "translate(-50%, -50%) scale(1.2)";
      backgroundImage.style.backgroundImage = `url(${url})`;
      backgroundImage.style.opacity = "1";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          backgroundImage.style.transition =
            "opacity 0.6s ease, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          backgroundImage.style.transform = "translate(-50%, -50%) scale(1.0)";
        });
      });
    }

    function hideBackgroundImage() {
      backgroundImage.style.opacity = "0";
    }

    function startIdleTimer() {
      stopIdleTimer();
      idleTimer = setTimeout(() => {
        if (currentActiveIndex === -1) startIdleAnimation();
      }, 3000);
    }

    function stopIdleTimer() {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = null;
    }

    function startIdleAnimation() {
      if (idleAnimation) return;

      idleAnimation = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      const columns = {
        artists: [...projectItems].map((i) => i.querySelector(".artist")),
        albums: [...projectItems].map((i) => i.querySelector(".album")),
        categories: [...projectItems].map((i) => i.querySelector(".category")),
        labels: [...projectItems].map((i) => i.querySelector(".label")),
        years: [...projectItems].map((i) => i.querySelector(".year")),
      };

      const totalRows = projectItems.length;
      const rowDelay = 0.05;
      const hideGap = totalRows * rowDelay * 0.5;

      // Row hide/show animation
      projectItems.forEach((item, rowIndex) => {
        const hideTime = rowIndex * rowDelay;
        const showTime = hideGap + rowIndex * rowDelay;

        idleAnimation.call(
          () => item.classList.add("counter-hidden"),
          [],
          hideTime
        );
        idleAnimation.call(
          () => item.classList.remove("counter-hidden"),
          [],
          showTime
        );
      });

      // Column fade animation
      Object.values(columns).forEach((elements, colIndex) => {
        const colStart = (colIndex + 1) * 0.25;

        elements.forEach((el, rowIndex) => {
          const hideTime = colStart + rowIndex * rowDelay;
          idleAnimation.to(el, { duration: 0.1, opacity: 0.05 }, hideTime);
        });

        elements.forEach((el, rowIndex) => {
          const showTime = colStart + hideGap + rowIndex * rowDelay;
          idleAnimation.to(el, { duration: 0.1, opacity: 1 }, showTime);
        });
      });
    }

    function stopIdleAnimation() {
      if (idleAnimation) {
        idleAnimation.kill();
        idleAnimation = null;

        gsap.set(document.querySelectorAll(".project-data"), { opacity: 1 });
        projectItems.forEach((i) => i.classList.remove("counter-hidden"));
      }
    }

    // ------------------------------------------------------------------
    // Clock
    // ------------------------------------------------------------------

    function startTimeDisplay() {
      const el = document.getElementById("current-time");
      const update = () => {
        const now = new Date();
        const opt = {
          timeZone: CONFIG.timeZone,
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        };
        const fmt = new Intl.DateTimeFormat("en-US", opt).formatToParts(now);
        const hours = fmt.find((p) => p.type === "hour").value;
        const minutes = fmt.find((p) => p.type === "minute").value;
        const period = fmt.find((p) => p.type === "dayPeriod").value;
        el.innerHTML = `${hours}<span class="time-blink">:</span>${minutes} ${period}`;
      };

      update();
      setInterval(update, CONFIG.timeUpdateInterval);
    }
  }, []);
  const webWorkText = 'WEB WORKS'.split('').map((char, index) => (
    <div className='web-work-letters leading-[90%] opacity-0 translate-y-[50%] bg-gradient-to-t from-[#333] to-white bg-clip-text text-transparent' key={index}>
      <div className='inline-block'>{char}</div>
    </div>
  ))
  useGSAP(() => {
    gsap.to('.web-work-letters', {
      y: 0,
      stagger: 0.1,
      ease: 'power4.out',
      duration: 1.5,
      opacity: 1,
      scrollTrigger: {
        trigger: '.web-work-txt-container',
        start: 'top 50%',
        end: '50% top',
        toggleActions: 'play play play reverse',
        onLeaveBack:()=>{
          gsap.to('.web-projs-text',{
          opacity:0,
          duration:0.5
        })
        }  
      },
      onComplete:()=>{
        gsap.to('.web-projs-text',{
          opacity:0.8,
          duration:0.5
        })
      }
    })
  })
  return (
    <div className="web-projs">
      <main className="portfolio-container overflow-hidden">
        
        <div className="h-[40dvh] md:h-[100dvh] mb-20 md:mb-0 flex flex-col justify-center items-center">
          <h1 className='web-work-txt-container   font-humane-black text-[32svw] justify-center items-center'>
              <span className='flex overflow-hidden pt-8'>
              {webWorkText}
              </span>
          </h1>
          <span className="web-projs-text text-xs px-2 text-left md:text-sm md:text-center w-full opacity-0 md:-mt-16">
            I have also created some web apps. This makes me a unique candidate who also knows how to work with api's and other frameworks
          </span>
        </div>

        <ul className="project-list" >
          <li
            className="project-item interactable " role="list" data-type='project-item'
            data-image={xactitude}
            onClick={() => window.open('https://www.figma.com/design/ElNh1HHlnTHvxUYeI916lh/rough-01?m=auto&t=gkQSwm7GjqEaBVdS-6', '_blank')}

          >
            <span className="project-data artist hover-text">XACTITUDE WEBSITE</span>
            <span className="project-data hidden md:inline-block album hover-text">IT FEST</span>
            <span className="project-data hidden md:inline-block category hover-text">UI/UX</span>
            <span className="project-data hidden md:inline-block label hover-text">DESIGNING</span>
            <span className="project-data year hover-text year-info hidden md:inline-block">2024</span>
          </li>

          <li
            className="project-item interactable " role="list" data-type='project-item'
            data-image={ccApp}
            onClick={() => window.open('https://fahadnoufal.github.io/chat-circle/', '_blank')}
            // onClick={}
          >
            <span className="project-data artist hover-text">
              CHAT CIRCLE APPLICATION
            </span>
            <span className="project-data hidden md:inline-block album hover-text">SOCIAL MEDIA</span>
            <span className="project-data hidden md:inline-block category hover-text">DEVELOPMENT</span>
            <span className="project-data hidden md:inline-block label hover-text">FULL STACK</span>
            <span className="project-data year hover-text year-info hidden md:inline-block">2024</span>
          </li>


          <li
            className="project-item interactable " role="list" data-type='project-item'
            data-image={fashion}
            onClick={() => window.open('https://fahadnoufal.github.io/fashion-site/', '_blank')}

          >
            <span className="project-data artist hover-text">
              VESTO 
            </span>
            <span className="project-data album hover-text hidden md:inline-block">
              E-COMMERCE
            </span>
            <span className="project-data category hover-text hidden md:inline-block">MULTIPAGE</span>
            <span className="project-data label hover-text hidden md:inline-block">
              FRONTEND
            </span>
            <span className ="project-data year hover-text year-info hidden md:inline-block">2021</span>
          </li>

          <li
            className="project-item interactable " role="list" data-type='project-item'
            data-image={ccWebsite}
            onClick={() => window.open('https://fahadnoufal.github.io/chatcircle-website/', '_blank')}

          >
            <span className="project-data artist hover-text">CHAT CIRCLE WEBSITE</span>
            <span className="project-data hidden md:inline-block album hover-text">SOCIAL MEDIA</span>
            <span className="project-data hidden md:inline-block category hover-text">MODERN UI</span>
            <span className="project-data hidden md:inline-block label hover-text">FRONTEND</span>
            <span className="project-data year hover-text year-info hidden md:inline-block">2023</span>
          </li>

          <li
            className="project-item interactable " role="list" data-type='project-item'
            data-image={taskflow}
            onClick={() => window.open('https://fahadnoufal.github.io/TaskFlow/', '_blank')}

          >
            <span className="project-data artist hover-text">TASKFLOW APP</span>
            <span className="project-data hidden md:inline-block album hover-text">
              TODO
            </span>
            <span className="project-data hidden md:inline-block category hover-text">SMOOTH ANIMATION</span>
            <span className="project-data hidden md:inline-block label hover-text">FRONTEND</span>
            <span className="project-data year hover-text year-info hidden md:inline-block">2023</span>
          </li>

          <li
            className="project-item"
            data-image={mess}
          >
            <span className="project-data artist hover-text">MESS DELIVERY</span>
            <span className="project-data hidden md:inline-block album hover-text">GROCERY</span>
            <span className="project-data hidden md:inline-block category hover-text">UI/UX</span>
            <span className="project-data hidden md:inline-block label hover-text">DESIGNING</span>
            <span className="project-data year hover-text year-info hidden md:inline-block">2023</span>
          </li>

        </ul>
      </main>

      <div
        className="background-image"
        id="backgroundImage"
        role="img"
        aria-hidden="true"
      />

      <aside className="corner-elements">
        <div className="corner-item top-left">
          <div className="corner-square" aria-hidden="true" />
        </div>

        <nav className="corner-item top-right">
          <a href="https://open.spotify.com/user/226ilulo57zutgtiwjsjqnqsy?si=0004e7bc669a406e">
            Spotify
          </a>{" "}
          | <a href="mailto:hi@filip.fyi">Email</a> |{" "}
          <a
            href="https://x.com/filipz"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </nav>

        <div className="corner-item bottom-left">43.9250° N, 19.5530° E</div>
        <time className="corner-item bottom-right" id="current-time"></time>
      </aside>
    </div>
  );
}
