import './App.css';
import AboutMe from './components/about-me/AboutMe';
import BoringIsBad from './components/BoringIsBad';
import Service from './components/Service';
import Landing from './components/landing/Landing';
import Certificates from './components/Certificates';
import Works from './components/Works';
import Contact from './components/Contact';
import './base.css'
import { useEffect } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


function App() {

  gsap.registerPlugin(ScrollTrigger)
  
  
  const allProjDetails={
    p1:{
        name:"Chat Circle", //capatilize here
        num:'01',
        type:'landing website',
        platform:'social media',
        platformSub:'application',
        description:"Online text based social media application in which the users create rooms in and people can join and share their thoughts.",
        technos:["python","mui","react","redux","router","gsap","tailwind"],
        github:'',
        visit:'',
        
    },
    p2:{

    },
    p3:{

    }
  }

  // useEffect(()=>{
  //   const scrollEl=document.querySelector("#app")
  //   const locoScroll=new locomotiveScroll({
  //     el:scrollEl,
  //     smooth:true,
  //     // multiplier:1,
  //     // class:'is-reveal'
  //   })
  //   locoScroll.on("scroll",ScrollTrigger.update)

  //   ScrollTrigger.scrollerProxy("#app", {
  //     scrollTop(value) {
  //       return arguments.length
  //         ? locoScroll.scrollTo(value, 0, 0)
  //         : locoScroll.scroll.instance.scroll.y;
  //     },
  //     getBoundingClientRect() {
  //       return {
  //         top: 0,
  //         left: 0,
  //         width: window.innerWidth,
  //         height: window.innerHeight
  //       };
  //     },
  //     // pinType: document.querySelector("#app").style.transform
  //     //   ? "transform"
  //     //   : "fixed" 
    
  //   });
  //   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  //   ScrollTrigger.refresh();
  // },[])
  
  return (


    <div className="App bg-black-bg">
      <div  id='app'>
        <Landing/>
        <AboutMe/>
        <BoringIsBad/>
        <Service/>
        <Certificates/>
        <Works/>
        <Contact/>
                                                  {/* <div data-scroll-section>
                                                        <h1 data-scroll>Hey</h1>
                                                        <p data-scroll>👋</p>
                                                    </div>
                                                    <div data-scroll-section>
                                                        <h2 data-scroll data-scroll-speed="1">What's up?</h2>
                                                        <p data-scroll data-scroll-speed="2">😬</p>
                                                  </div> */}
      </div>
      {/* <ProjectDetails 
          {...allProjDetails.p1}
      /> */}

    </div>
  );
}

export default App;
