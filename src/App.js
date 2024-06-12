import './App.css';
import AboutMe from './components/about-me/AboutMe';
import BoringIsBad from './components/BoringIsBad';
import Service from './components/Service';
import Landing from './components/landing/Landing';
import Certificates from './components/Certificates';
import Works from './components/Works';
import Contact from './components/Contact';
import './base.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Cursor from './components/Cursor';


function App() {

  gsap.registerPlugin(ScrollTrigger)

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
      <Cursor/>
      <div  id='app'>
        <Landing/>
        <AboutMe/>
        <BoringIsBad/>
        <Service/>
        <Certificates/>
        <Works />
        <Contact/>
      </div>

    </div>
  );
}

export default App;
