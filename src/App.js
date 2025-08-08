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
  
  return (


    <div className="App bg-black-bg">
      <Cursor/>
      <div  id='app'>
        <Landing/>
        <AboutMe/>
        {/* <BoringIsBad/> */}
        <Service/>
        <Certificates/>
        <Works />
        <Contact/>
      </div>

    </div>
  );
}

export default App;
