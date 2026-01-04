import './App.css';
import AboutMe from './components/about-me/AboutMe';
import Service from './components/Service';
import Landing from './components/landing/Landing';
import Certificates from './components/Certificates';
import SelectedWorks from './components/selected-works/SelectedWorks.jsx';
import WebProjs from './components/web-projects/WebProjs.jsx';
import Contact from './components/Contact';
import './base.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Cursor from './components/Cursor';
import DataScienceProjects from './components/ds-projs/DataScienceProjects.jsx';

// Only trigger a refresh if the width changes (rotation), 
// ignoring height changes (address bar scroll)
ScrollTrigger.config({ 
  ignoreMobileResize: true 
});


function App() {

  gsap.registerPlugin(ScrollTrigger)
  
  return (


    <div className="App bg-black-bg select-none">
      <Cursor/>
      <div  id='app'>
        <Landing/>
        <AboutMe/>
        <Service/>
        <Certificates/>
        <DataScienceProjects/>
        <SelectedWorks/>
        <WebProjs/>
        <Contact/>
      </div>
      {/* <Gallary/> */}

    </div>
  );
}

export default App;
