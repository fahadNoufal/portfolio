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
  return (
    <div className="App bg-black-bg">
      <Landing/>
      <AboutMe/>
      <BoringIsBad/>
      <Service/>
      <Certificates/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
