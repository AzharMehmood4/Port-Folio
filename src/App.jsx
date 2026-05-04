import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 750,
        once: false,    
        offset: 80,
        disable: false,
      });

      AOS.refreshHard();
    };

    initAOS();

    window.addEventListener("resize", initAOS);

    return () => window.removeEventListener("resize", initAOS);
  }, []);
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster />
     </>
  )
}

export default App
