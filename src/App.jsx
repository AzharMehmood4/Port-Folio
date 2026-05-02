import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
// import Experiance from './components/Experiance';
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
        duration: 800,
        once: false,      // IMPORTANT for mobile stability
        offset: 80,
        disable: false,
      });

      AOS.refreshHard();
    };

    initAOS();

    // re-fix mobile resize/scroll issues
    window.addEventListener("resize", initAOS);

    return () => window.removeEventListener("resize", initAOS);
  }, []);

// useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: false,
//       offset: 100,
//     });

//     AOS.refreshHard();
//   }, []);
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
