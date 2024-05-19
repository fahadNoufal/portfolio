import './App.css';
import AboutMe from './components/about-me/AboutMe';
import BoringIsBad from './components/BoringIsBad';
import Service from './components/Service';
import Landing from './components/landing/Landing';
import Certificates from './components/Certificates';
import Works from './components/Works';
import Contact from './components/Contact';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  // let enoughOfDialogs ='HELLOWORLD'.split('').map((char, index) => (
  //   <span className=' inline-block charr translate-x-[20rem]' key={index}>{char}</span>
  // ))
  return (
    <div className="App bg-black-bg">
      <Landing/>
      <AboutMe/>
      <BoringIsBad/>
      <Service/>
      <Certificates/>
      <Works/>
      <Contact/>

      {/* <div className=" h-[100svh] flex justify-center items-center">
        <div className=" text-white font-humane-black text-[20rem] ">
          {enoughOfDialogs}
        </div>
      </div>
       */}
    </div>
  );
}

export default App;
